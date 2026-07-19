import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoGuidePage } from "@/components/seo/SeoGuidePage";
import { destinationPages, getDestinationPage } from "@/content/seoPages";

const BASE = "https://www.travelbycarta.com";

export function generateStaticParams() {
  return destinationPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getDestinationPage(slug);

  if (!page) {
    return { title: "Destination not found", robots: { index: false, follow: false } };
  }

  const url = `/destinations/${page.slug}`;

  return {
    title: page.seoTitle,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url,
      type: "article",
      ...(page.photos?.[0]
        ? { images: [{ url: page.photos[0].src, alt: page.photos[0].alt }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
      ...(page.photos?.[0] ? { images: [page.photos[0].src] } : {}),
    },
  };
}

export default async function DestinationGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getDestinationPage(slug);

  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.seoTitle,
    description: page.description,
    url: `${BASE}/destinations/${page.slug}`,
    ...(page.photos?.length
      ? { image: page.photos.map((photo) => `${BASE}${photo.src}`) }
      : {}),
    author: { "@type": "Person", name: "Gabe Rozavski" },
    publisher: {
      "@type": "Organization",
      name: "Carta",
      logo: {
        "@type": "ImageObject",
        url: `${BASE}/brand/logo_mark_gold_on_navy_512px.png`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SeoGuidePage page={page} />
    </>
  );
}
