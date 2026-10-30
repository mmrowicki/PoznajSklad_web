"use client";

import { useState } from "react";
import { sampleIngredients, sampleProduct, tagMeta } from "@/data/sample-ingredients";

export function IngredientDemo() {
  const [selectedId, setSelectedId] = useState(sampleIngredients[3].id);
  const selected = sampleIngredients.find((i) => i.id === selectedId) ?? sampleIngredients[0];
  const tag = tagMeta[selected.tag];

  return (
    <div className="rounded-3xl border border-line bg-surface shadow-[0_1px_0_var(--line),0_24px_48px_-24px_rgb(0_0_0/0.18)]">
      <div className="flex items-center justify-between gap-4 border-b border-dashed border-line px-5 py-4 sm:px-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            {sampleProduct.note}
          </p>
          <p className="font-serif text-lg font-semibold">{sampleProduct.name}</p>
        </div>
        <p className="text-right text-xs text-muted">Kliknij składnik</p>
      </div>

      <p className="px-5 py-5 font-mono text-[13px] leading-7 sm:px-6 sm:text-sm sm:leading-8">
        <span className="font-semibold">Skład: </span>
        {sampleIngredients.map((ingredient, index) => {
          const isSelected = ingredient.id === selectedId;
          return (
            <span key={ingredient.id}>
              {ingredient.prefix && <span className="text-muted">{ingredient.prefix}: </span>}
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(ingredient.id)}
                className={`cursor-pointer rounded-md px-1 py-0.5 underline decoration-dotted decoration-1 underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand ${
                  ingredient.bold ? "font-bold" : ""
                } ${
                  isSelected
                    ? "bg-brand text-brand-ink no-underline"
                    : "decoration-muted/60 hover:bg-brand-soft"
                }`}
              >
                {ingredient.label}
              </button>
              {index < sampleIngredients.length - 1 ? ", " : "."}
            </span>
          );
        })}
      </p>

      <div aria-live="polite" className="rounded-b-3xl border-t border-line bg-background/60 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-serif text-xl font-semibold">{selected.name}</h3>
          {selected.code && (
            <span className="rounded-md border border-line px-1.5 py-0.5 font-mono text-xs text-muted">
              {selected.code}
            </span>
          )}
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tag.className}`}>
            {tag.label}
          </span>
        </div>
        <dl className="mt-4 grid gap-3 text-sm leading-6">
          <div>
            <dt className="font-medium">Co to jest?</dt>
            <dd className="text-muted">{selected.what}</dd>
          </div>
          <div>
            <dt className="font-medium">Po co jest w produkcie?</dt>
            <dd className="text-muted">{selected.why}</dd>
          </div>
          <div>
            <dt className="font-medium">Na co zwrócić uwagę?</dt>
            <dd className="text-muted">{selected.watch}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
