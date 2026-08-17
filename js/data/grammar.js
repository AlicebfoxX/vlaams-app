// js/data/grammar.js - Flemish Grammar & Tussentaal Reference & Practice

export const GRAMMAR_DATA = {
  // REPLACED old "Gij/Ge" section with accurate modern Belgian Dutch
  pronomenVerschillen: {
    title: "Persoonlijke Voornaamwoorden: Vlaams vs. Hollands",
    description: "Modern Belgisch Nederlands gebruikt gewoon **je / jij** — precies zoals in Nederland. 'Ge' en 'Gij' hoor je zelden meer in het dagelijkse leven en worden als ouderwets beschouwd. Het echte verschil zit hem in de uitspraak, het woordgebruik en de zinsbouw!",
    realDifferences: {
      title: "Waar zit het ECHTE Vlaamse verschil?",
      items: [
        { label: "Woordenschat", example: "'gsm' (geen mobieltje), 'tas koffie' (geen kopje), 'frigo' (geen koelkast), 'goesting' (geen zin)" },
        { label: "Verkleinwoorden op -ke", example: "'een pintje' → 'een pinteke', 'koekje' → 'koeksken'" },
        { label: "Uitroepen", example: "'Amai!', 'Allee!', 'Diene!', 'Alleszins!', 'Zeker!'" },
        { label: "Uitdrukkingen", example: "'Ik heb schrik' (niet: ik ben bang), ''k Peis' (ik denk/vermoed)" }
      ]
    },
    exercises: [
      {
        id: "pron-1",
        sentence: "Lucas vraagt aan Elena: '_____ al koffie gehad vandaag?'",
        verbPrompt: "Kies de correcte vraagzin",
        options: ["Zijt gij", "Heb jij al", "Hebt ge"],
        correct: "Heb jij al",
        explanation: "In modern Belgisch Nederlands zeg je gewoon 'Heb jij al...' of 'Heb je al...'. 'Ge/Gij' is ouderwets."
      },
      {
        id: "pron-2",
        sentence: "Sofie zegt tegen haar collega: '_____ dat gisteren gezien?'",
        verbPrompt: "Kies de meest naturele Vlaamse zin",
        options: ["Hebt ge", "Heb jij", "Zijt gij"],
        correct: "Heb jij",
        explanation: "'Heb jij dat gezien?' is perfect correct modern Belgisch Nederlands. 'Ge/Gij' is niet meer in gebruik."
      },
      {
        id: "pron-3",
        sentence: "Jan tegen Marcus: 'Ben _____ serieus of doe je maar alsof?'",
        verbPrompt: "Vul het voornaamwoord in",
        options: ["gij", "ge", "jij"],
        correct: "jij",
        explanation: "Modern Belgisch Nederlands: 'Ben jij serieus?' — perfect correct en natural!"
      }
    ]
  },

  diminutives: {
    title: "Verkleinwoorden (-ke, -eke, -ske) — Echt Vlaams!",
    description: "DÍT is een echt Vlaams kenmerk! In Vlaanderen gebruiken we **-ke** of **-eke** als verkleinwoord in plaats van het Nederlandse **-tje** of **-je**. Dit hoor je nog overal in het dagelijkse leven!",
    examples: [
      { base: "koek (biscuit)", standardNL: "koekje", vlaams: "koekske / koeksken" },
      { base: "man (man)", standardNL: "mannetje", vlaams: "manneke" },
      { base: "pint (beer glass)", standardNL: "biertje", vlaams: "pintje / pinteke" },
      { base: "tas (cup)", standardNL: "kopje", vlaams: "taske" },
      { base: "vrouw (woman)", standardNL: "vrouwtje", vlaams: "vrouwke" },
      { base: "bord (plate)", standardNL: "bordje", vlaams: "berdke / bordeke" }
    ],
    exercises: [
      {
        id: "dim-1",
        word: "tas (mug/cup)",
        options: ["tasje", "taske", "taselen"],
        correct: "taske",
        explanation: "In Vlaams wordt 'tas' een gezellig 'taske'."
      },
      {
        id: "dim-2",
        word: "man (fellow/man)",
        options: ["mannetje", "manneke", "manpje"],
        correct: "manneke",
        explanation: "'Manneke' is een van de meest geliefde Vlaamse woorden."
      }
    ]
  }
};
