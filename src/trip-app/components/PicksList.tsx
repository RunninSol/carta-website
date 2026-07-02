"use client";

import type {
  Category,
  Contact,
  ContactInfo,
  GuideBlock,
  MapProvider,
  Pick,
} from "../lib/types";
import {
  contactVCard,
  directionsUrl,
  downloadFile,
  mapsLabel,
  priceLevel,
} from "../lib/trip";
import { DirectionsIcon, PhoneIcon } from "./icons";

type Filter = "all" | "favorites" | string;

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export default function PicksList({
  picks,
  categories,
  guideBlocks,
  contacts,
  cartaContact,
  plannedIds,
  onAddPlace,
  provider,
  filter,
  onFilter,
  favorites,
  onToggleFavorite,
  selectedId,
  onSelect,
  onOpen,
  counts,
  listRef,
}: {
  picks: Pick[];
  categories: Category[];
  guideBlocks: GuideBlock[];
  contacts: Contact[];
  cartaContact: ContactInfo;
  plannedIds: Set<string>;
  onAddPlace: () => void;
  provider: MapProvider;
  filter: Filter;
  onFilter: (f: Filter) => void;
  favorites: Set<string>;
  onToggleFavorite: (id: string) => void;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onOpen: (id: string) => void;
  counts: Record<string, number>;
  listRef: React.RefObject<HTMLDivElement>;
}) {
  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "favorites", label: "Saved" },
    ...categories.map((c) => ({ id: c.id as Filter, label: c.label })),
  ];

  const catLabel = (id: string) =>
    categories.find((c) => c.id === id)?.label ?? id;

  return (
    <>
      <nav className="filters" aria-label="Filter recommendations">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            className={filter === f.id ? "filter active" : "filter"}
            onClick={() => onFilter(f.id)}
          >
            {f.label}
            <span className="count">{counts[f.id] ?? 0}</span>
          </button>
        ))}
      </nav>

      <div className="list" ref={listRef}>
        {picks.length === 0 ? (
          <p className="empty">
            Nothing saved yet. Tap Save on any place you want to keep.
          </p>
        ) : (
          picks.map((pick) => {
            const price = priceLevel(pick.priceLevel);
            const saved = favorites.has(pick.id);
            return (
              <article
                key={pick.id}
                data-item-id={pick.id}
                className={selectedId === pick.id ? "card selected" : "card"}
                onClick={() => {
                  onSelect(pick.id);
                  onOpen(pick.id);
                }}
              >
                {pick.imageUrl && (
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url("${pick.imageUrl}")` }}
                    role="img"
                    aria-label={pick.name}
                  />
                )}
                <div className="card-top">
                  <div>
                    <span className="category">{catLabel(pick.category)}</span>
                    <h2 className="card-title">{pick.name}</h2>
                    {pick.address && <p className="address">{pick.address}</p>}
                  </div>
                  <button
                    type="button"
                    className={saved ? "save-btn saved" : "save-btn"}
                    aria-label={saved ? "Remove from saved" : "Save place"}
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(pick.id);
                    }}
                  >
                    {saved ? "Saved" : "Save"}
                  </button>
                </div>

                {pick.subtitle && <p className="description">{pick.subtitle}</p>}
                {pick.description && (
                  <p className="description">{pick.description}</p>
                )}

                {(price ||
                  pick.rating ||
                  pick.hours ||
                  pick.season ||
                  plannedIds.has(pick.id)) && (
                  <div className="meta-row">
                    {plannedIds.has(pick.id) && (
                      <span className="meta-chip planned">In your plans</span>
                    )}
                    {pick.hours && (
                      <span className="meta-chip">{pick.hours}</span>
                    )}
                    {price && <span className="meta-chip price">{price}</span>}
                    {pick.rating && (
                      <span className="meta-chip">{pick.rating.toFixed(1)} rating</span>
                    )}
                    {pick.season && (
                      <span className="meta-chip season">{pick.season}</span>
                    )}
                  </div>
                )}

                {pick.note && (
                  <div className="note">
                    <span className="note-label">What I would tell you</span>
                    <p>{pick.note}</p>
                  </div>
                )}

                <div className="card-actions">
                  {pick.phone && (
                    <a
                      className="action-btn"
                      href={telHref(pick.phone)}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <PhoneIcon />
                      {pick.phone}
                    </a>
                  )}
                  {pick.lat != null && pick.lng != null && (
                    <a
                      className="action-btn primary"
                      href={directionsUrl(provider, pick.lat, pick.lng, pick.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <DirectionsIcon />
                      {mapsLabel(provider)}
                    </a>
                  )}
                </div>
              </article>
            );
          })
        )}

        <button type="button" className="util-btn" onClick={onAddPlace}>
          Somewhere else in mind? Add your own place
        </button>

        {(guideBlocks.length > 0 || contacts.length > 0) && (
          <div className="extras">
            {guideBlocks.length > 0 && (
              <section className="guide-blocks">
                <h3 className="extras-heading">Notes from me</h3>
                {guideBlocks.map((b, i) => (
                  <div className="guide-block" key={i}>
                    <h4 className="guide-block-heading">{b.heading}</h4>
                    <p className="guide-block-body">{b.body}</p>
                  </div>
                ))}
              </section>
            )}

            {contacts.length > 0 && (
              <section className="contacts-list">
                <h3 className="extras-heading">Your contacts</h3>
                {contacts.map((c, i) => (
                  <div className="contact-row" key={c.id ?? i}>
                    <div className="contact-row-top">
                      <span className="contact-name">{c.name}</span>
                      {c.role && <span className="contact-role">{c.role}</span>}
                    </div>
                    {c.note && <p className="contact-note">{c.note}</p>}
                    {c.phone && (
                      <a className="contact-inline" href={telHref(c.phone)}>
                        {c.phone}
                      </a>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="util-btn save-contact-btn"
                  onClick={() =>
                    downloadFile(
                      "carta-gabe.vcf",
                      "text/vcard",
                      contactVCard(cartaContact)
                    )
                  }
                >
                  Save my contact to your phone
                </button>
              </section>
            )}
          </div>
        )}
      </div>
    </>
  );
}
