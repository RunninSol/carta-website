import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { FadeIn } from "../FadeIn";

const photos = [
  {
    file: "paris.jpg",
    alt: "A quiet Paris side street at blue hour, bistro windows glowing gold against the dusk",
    place: "Paris",
    note: "dinner is at eight. ask for claire.",
  },
  {
    file: "tokyo.jpg",
    alt: "A narrow Tokyo alley at dusk, paper lanterns glowing against deep blue twilight",
    place: "Tokyo",
    note: "the counter seat you'd never find alone",
  },
  {
    file: "amalfi.jpg",
    alt: "The Amalfi coast from a high terrace at golden hour, buildings stepping down to a navy sea",
    place: "Amalfi",
    note: "the terrace worth the extra flight",
  },
];

/**
 * Destination photography band. Renders only when all three photos exist in
 * public/photos/ at build time — drop the files in (see PHOTO-PROMPTS.md),
 * rebuild, and this section appears.
 */
export function EditorialSection() {
  const dir = path.join(process.cwd(), "public", "photos");
  const ready = photos.every((p) => existsSync(path.join(dir, p.file)));
  if (!ready) return null;

  return (
    <section className="bg-ivory px-6 py-2xl md:py-4xl">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="text-center">
          <p className="eyebrow">Destinations</p>
          <h2 className="font-display text-lg text-navy md:text-[48px]">
            Some places I keep sending people back to.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-charcoal">
            Not a catalog. Just the places where I know the right rooms, the
            right tables, and the right time of day to arrive.
          </p>
        </FadeIn>

        <div className="mt-2xl grid gap-xl sm:grid-cols-3 sm:gap-lg">
          {photos.map((p) => (
            <FadeIn key={p.place}>
              <figure className="group">
                <div className="overflow-hidden shadow-card transition-shadow duration-300 group-hover:shadow-float">
                  <Image
                    src={`/photos/${p.file}`}
                    alt={p.alt}
                    width={1024}
                    height={768}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-4 text-center">
                  <span className="font-display text-md text-navy">
                    {p.place}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.15em] text-mid-gray">
                    {p.note}
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
