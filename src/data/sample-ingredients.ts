export type IngredientTag = "allergen" | "limit" | "neutral";

export type Ingredient = {
  id: string;
  /** Text as printed on the label. */
  label: string;
  /** Functional class printed before the name, e.g. "emulgator". */
  prefix?: string;
  /** Allergens are printed in bold on EU labels. */
  bold?: boolean;
  name: string;
  code?: string;
  tag: IngredientTag;
  what: string;
  why: string;
  watch: string;
};

export const sampleProduct = {
  name: "Ciastka maślane",
  note: "Przykładowa etykieta",
};

export const sampleIngredients: Ingredient[] = [
  {
    id: "maka",
    label: "mąka pszenna",
    bold: true,
    name: "Mąka pszenna",
    tag: "allergen",
    what: "Zmielone ziarno pszenicy — podstawa większości ciastek i pieczywa.",
    why: "Nadaje ciastu strukturę i objętość.",
    watch:
      "Zawiera gluten. To jeden z 14 alergenów, które w UE muszą być wyróżnione w składzie. Ważne dla osób z celiakią i alergią na pszenicę.",
  },
  {
    id: "cukier",
    label: "cukier",
    name: "Cukier",
    tag: "limit",
    what: "Sacharoza z buraków cukrowych lub trzciny.",
    why: "Słodki smak, złoty kolor podczas pieczenia, kruchość.",
    watch:
      "To cukier dodany. Składniki podaje się od największej ilości — im wyżej na liście, tym więcej go w produkcie. Sprawdź pozycję „w tym cukry” w tabeli wartości odżywczych.",
  },
  {
    id: "olej-palmowy",
    label: "olej palmowy",
    name: "Olej palmowy",
    tag: "limit",
    what: "Tłuszcz z owoców palmy oleistej, w temperaturze pokojowej półstały.",
    why: "Daje kruchość, wydłuża trwałość i jest tani.",
    watch:
      "Około połowa to nasycone kwasy tłuszczowe, których spożycie warto ograniczać. Część osób zwraca też uwagę na wpływ upraw palmy na środowisko.",
  },
  {
    id: "syrop",
    label: "syrop glukozowo-fruktozowy",
    name: "Syrop glukozowo-fruktozowy",
    tag: "limit",
    what: "Słodki syrop otrzymywany z rozkładu skrobi, najczęściej kukurydzianej lub pszennej.",
    why: "Słodzi, utrzymuje wilgotność i jest tańszy od cukru.",
    watch:
      "To również cukier dodany. Gdy w składzie jest kilka rodzajów cukrów, łącznie może ich być więcej, niż sugeruje pozycja każdego z osobna.",
  },
  {
    id: "maslo",
    label: "masło (z mleka) 6%",
    bold: true,
    name: "Masło",
    tag: "allergen",
    what: "Tłuszcz mleczny. Procent podaje się, gdy składnik pojawia się w nazwie produktu.",
    why: "Smak i aromat — stąd „maślane” w nazwie.",
    watch:
      "Mleko to alergen, masło zawiera też trochę laktozy. Zwróć uwagę na procent: 6% to niewiele — większość tłuszczu pochodzi tu z oleju palmowego.",
  },
  {
    id: "sol",
    label: "sól",
    name: "Sól",
    tag: "limit",
    what: "Chlorek sodu.",
    why: "Podkreśla smak, także w produktach słodkich.",
    watch:
      "WHO zaleca dorosłym mniej niż 5 g soli dziennie. Ile jej jest w produkcie, sprawdzisz w tabeli wartości odżywczych.",
  },
  {
    id: "lecytyny",
    label: "lecytyny (z soi)",
    prefix: "emulgator",
    bold: true,
    name: "Lecytyny",
    code: "E322",
    tag: "allergen",
    what: "Naturalne związki tłuszczowe, tu pozyskane z soi.",
    why: "Łączą tłuszcz z wodą i ułatwiają obróbkę ciasta.",
    watch:
      "Sama lecytyna jest uznawana za bezpieczny dodatek, ale soja to alergen — dlatego jest wyróżniona w składzie.",
  },
  {
    id: "soda",
    label: "wodorowęglan sodu",
    prefix: "substancja spulchniająca",
    name: "Wodorowęglan sodu",
    code: "E500",
    tag: "neutral",
    what: "Po prostu soda oczyszczona.",
    why: "Podczas pieczenia uwalnia dwutlenek węgla, dzięki czemu ciasto rośnie.",
    watch: "W ilościach stosowanych w pieczywie nie ma powodu do obaw.",
  },
  {
    id: "kwas-cytrynowy",
    label: "kwas cytrynowy",
    prefix: "regulator kwasowości",
    name: "Kwas cytrynowy",
    code: "E330",
    tag: "neutral",
    what: "Kwas naturalnie obecny w cytrusach. Przemysłowo produkuje się go przez fermentację.",
    why: "Reguluje kwasowość i pomaga zachować świeżość.",
    watch: "Jeden z najczęściej stosowanych i najlepiej przebadanych dodatków.",
  },
  {
    id: "sorbinian",
    label: "sorbinian potasu",
    prefix: "konserwant",
    name: "Sorbinian potasu",
    code: "E202",
    tag: "neutral",
    what: "Sól potasowa kwasu sorbowego.",
    why: "Hamuje rozwój pleśni i drożdży, wydłuża trwałość.",
    watch:
      "Dopuszczony w UE z limitem ilości. Europejski Urząd ds. Bezpieczeństwa Żywności (EFSA) uznaje go za bezpieczny przy typowym spożyciu.",
  },
];

export const tagMeta: Record<IngredientTag, { label: string; className: string }> = {
  allergen: { label: "Alergen", className: "bg-allergen-soft text-allergen" },
  limit: { label: "Warto ograniczać", className: "bg-limit-soft text-limit" },
  neutral: { label: "Neutralny", className: "bg-brand-soft text-brand" },
};
