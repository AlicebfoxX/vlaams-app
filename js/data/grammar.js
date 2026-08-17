// js/data/grammar.js - Flemish Grammar & Tussentaal Reference & Practice

export const GRAMMAR_DATA = {
  gijConjugations: {
    title: "Het 'Gij / Ge' Systeem (Informal Second Person)",
    description: "In Flanders, 'gij' (stressed) and 'ge' (unstressed) are used where Northern Dutch uses 'jij' and 'je'. Crucially, verbs conjugate with a **-t** ending in both present and past tense!",
    comparisonTable: [
      { verb: "zijn (to be)", jijForm: "jij bent / was", gijForm: "gij **zijt** / **waart**", example: "Gij **zijt** een slimme student." },
      { verb: "hebben (to have)", jijForm: "je hebt / had", gijForm: "ge **hebt** / **hadt**", example: "Ge **hebt** chance vandaag!" },
      { verb: "kunnen (can)", jijForm: "je kunt / kon", gijForm: "ge **kunt** / **kondt**", example: "Ge **kunt** dat rapport downloaden." },
      { verb: "weten (to know)", jijForm: "jij weet / wist", gijForm: "gij **weet** / **wist**", example: "Gij **weet** goed wat ge wilt." },
      { verb: "willen (to want)", jijForm: "je wil(t) / wilde", gijForm: "ge **wilt** / **wildet**", example: "Wilt ge een tas koffie?" }
    ],
    exercises: [
      {
        id: "gij-1",
        sentence: "Lucas, _____ gij zeker dat de schipper ons kan helpen?",
        verbPrompt: "zijn (tegenwoordige tijd)",
        options: ["bent", "zijt", "is"],
        correct: "zijt",
        explanation: "Met 'gij' is de vorm van 'zijn' altijd 'zijt' (Gij zijt)."
      },
      {
        id: "gij-2",
        sentence: "_____ ge gisteren die geheime e-mail gezien?",
        verbPrompt: "hebben (verleden/tegenwoordig)",
        options: ["Heb", "Hebt", "Heeft"],
        correct: "Hebt",
        explanation: "Zelfs bij inversie blijft de -t behouden: 'Hebt ge' (niet 'heb je')."
      },
      {
        id: "gij-3",
        sentence: "Elena, wat _____ gij drinken op het terras?",
        verbPrompt: "willen",
        options: ["wil", "wilt", "wilt gij"],
        correct: "wilt",
        explanation: "'Gij wilt' heeft altijd de -t uitgang."
      }
    ]
  },

  diminutives: {
    title: "Verkleinwoorden (-ke, -eke, -ske)",
    description: "In Flanders, diminutives overwhelmingly use **-ke** or **-eke** instead of the Northern **-tje** or **-je**.",
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
  },

  articlesNRule: {
    title: "De Mannelijke N-Regel (Ne / Nen & Den)",
    description: "In informal Flemish (tussentaal), masculine words take **ne** or **nen** instead of 'een', and **den** instead of 'de'. The -n is added before **vowels, b, d, t, and h** (the B-D-T-H + Klinker rule)!",
    rules: [
      { rule: "Voor een Klinker (a, e, i, o, u)", example: "**nen** appel, **nen** ottomobiel", standard: "een appel, een auto" },
      { rule: "Voor B, D, T, H", example: "**nen** boom, **nen** dief, **nen** trein, **nen** hond", standard: "een boom, een dief, een trein, een hond" },
      { rule: "Voor andere medeklinkers (k, m, p, s, etc.)", example: "**ne** man, **ne** stoel, **ne** pot", standard: "een man, een stoel, een pot" },
      { rule: "Vrouwelijk & Onzijdig", example: "**een** vrouw, **een** kind / **'t** kind", standard: "een vrouw, een kind" }
    ],
    exercises: [
      {
        id: "art-1",
        sentence: "Jan kocht gisteren _____ auto.",
        options: ["ne", "nen", "eenen"],
        correct: "nen",
        explanation: "Omdat 'auto' met een klinker (A) begint, krijgt het de N: 'nen auto'."
      },
      {
        id: "art-2",
        sentence: "Dat is echt _____ toffe gast!",
        options: ["ne", "nen", "den"],
        correct: "nen",
        explanation: "Omdat 'toffe' met een T begint (B-D-T-H regel), wordt het 'nen toffe gast'."
      },
      {
        id: "art-3",
        sentence: "Zet dat maar op _____ tafel.",
        options: ["den", "de", "ne"],
        correct: "de",
        explanation: "'Tafel' is vrouwelijk, dus het blijft gewoon 'de tafel'."
      }
    ]
  }
};
