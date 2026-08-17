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
  }
};
