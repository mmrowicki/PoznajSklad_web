import { IngredientDemo } from "@/components/ingredient-demo";

const steps = [
  {
    title: "Zeskanuj produkt",
    body: "Kod kreskowy albo zdjęcie etykiety — bez przepisywania składu.",
    status: "W przygotowaniu",
  },
  {
    title: "Poznaj składniki",
    body: "Każdy składnik wyjaśniony prostym językiem: co to jest i po co go dodano.",
    status: "Przykłady dostępne",
  },
  {
    title: "Wybierz świadomie",
    body: "Od razu widzisz alergeny i to, na co warto zwrócić uwagę przed zakupem.",
    status: "W przygotowaniu",
  },
];

const values = [
  {
    title: "Proste wyjaśnienia",
    body: "Bez chemicznego żargonu i straszenia. Krótko: co to jest, po co jest i czy warto się tym przejąć.",
  },
  {
    title: "Świadome wybory",
    body: "Nie oceniamy za Ciebie. Dajemy wiedzę, a decyzję przy półce podejmujesz Ty.",
  },
  {
    title: "Bez reklam",
    body: "Żadnych sponsorowanych produktów ani banerów. Objaśnienia nie zależą od tego, kto płaci.",
  },
];

const roadmap = {
  now: ["Pomysł i kierunek aplikacji", "Przykładowe objaśnienia składników"],
  next: ["Skanowanie kodu kreskowego", "Odczyt składu ze zdjęcia etykiety", "Pełna baza produktów"],
};

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 font-serif text-lg font-semibold">
      <span
        aria-hidden
        className="grid size-8 place-items-center rounded-lg bg-brand font-sans text-sm font-bold text-brand-ink"
      >
        PS
      </span>
      Poznaj Skład
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <Logo />
        <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
          MVP · w rozwoju
        </span>
      </header>

      <main className="flex-1">
        <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-10 pb-20 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:pt-16 lg:pb-28">
          <div>
            <h1 className="font-serif text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
              Wiesz, co <span className="text-brand italic">wybierasz.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted text-pretty">
              Tworzymy aplikację, która pomoże Ci zrozumieć skład produktów spożywczych. Zeskanujesz
              kod kreskowy lub etykietę i sprawdzisz, co oznaczają poszczególne składniki oraz na co
              warto zwrócić uwagę przed zakupem.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#przyklad"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-6 font-medium text-brand-ink transition-opacity hover:opacity-90"
              >
                Przetestuj objaśnienia
              </a>
              <a
                href="#jak-to-dziala"
                className="inline-flex h-12 items-center justify-center rounded-full border border-line px-6 font-medium transition-colors hover:bg-surface"
              >
                Jak to będzie działać
              </a>
            </div>
            <p className="mt-6 max-w-md text-sm leading-6 text-muted">
              Jesteśmy na etapie MVP. Skanowanie i pełna baza produktów są w przygotowaniu — już teraz
              możesz sprawdzić przykładowe objaśnienia.
            </p>
          </div>

          <div id="przyklad" className="scroll-mt-6">
            <IngredientDemo />
            <p className="mt-3 px-2 text-xs leading-5 text-muted">
              Objaśnienia mają charakter edukacyjny i nie zastępują porady lekarza ani dietetyka.
            </p>
          </div>
        </section>

        <section id="jak-to-dziala" className="scroll-mt-6 border-y border-line bg-surface">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Jak to będzie działać
            </h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="border-t border-line pt-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-sm text-muted">0{index + 1}</span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        step.status === "Przykłady dostępne"
                          ? "bg-brand-soft text-brand"
                          : "border border-line text-muted"
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="max-w-2xl font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Nasz cel: proste wyjaśnienia, świadome wybory i aplikacja bez reklam.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 leading-7 text-muted">{value.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
          <div className="grid gap-10 rounded-3xl bg-brand px-6 py-10 text-brand-ink sm:px-10 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <h2 className="font-serif text-3xl font-semibold tracking-tight">Gdzie jesteśmy</h2>
              <p className="mt-3 max-w-sm leading-7 opacity-80">
                To pierwsza wersja w rozwoju. Mówimy wprost, co już działa, a co dopiero powstaje.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] opacity-70">Już teraz</h3>
              <ul className="mt-4 space-y-3">
                {roadmap.now.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] opacity-70">
                W przygotowaniu
              </h3>
              <ul className="mt-4 space-y-3">
                {roadmap.next.map((item) => (
                  <li key={item} className="flex gap-3 opacity-90">
                    <span aria-hidden>○</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Logo />
          <p>© 2026 Poznaj Skład · Wiesz, co wybierasz.</p>
        </div>
      </footer>
    </div>
  );
}
