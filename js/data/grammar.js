// js/data/grammar.js - Nederlandse grammatica, niveau 1.1 → 2.3
// Structuur: levels[] → topics[] → { rules[], examples[], exercises[] }
// Uitleg in het Nederlands, met korte Engelse hint per regel.

export const GRAMMAR_DATA = {
  intro: {
    title: "Grammatica van nul tot niveau 2.3",
    description: "Stap voor stap door de Nederlandse grammatica. Begin bij **de of het** en werk door tot de samengestelde tijden en bijzinnen van niveau **2.3**. Elk onderwerp heeft regels, voorbeelden en oefeningen."
  },

  levels: [
    // ─────────────────────────────────────────────────────────────
    {
      id: "1.1",
      label: "Niveau 1.1",
      cefr: "A1 — beginner",
      icon: "🌱",
      summary: "Lidwoorden, meervoud, persoonlijke voornaamwoorden en de tegenwoordige tijd.",
      topics: [
        {
          id: "lidwoorden",
          title: "De of het",
          subtitle: "Bepaalde en onbepaalde lidwoorden",
          intro: "Elk Nederlands zelfstandig naamwoord heeft **de** of **het**. Je moet dit per woord leren — er is geen sluitende regel, maar er zijn sterke aanwijzingen.",
          introEn: "Every Dutch noun takes either 'de' or 'het'. There is no single rule, but there are reliable patterns.",
          rules: [
            { rule: "de-woorden", detail: "Alle mannelijke en vrouwelijke woorden, én alle meervouden.", en: "All masculine/feminine nouns, and every plural.", examples: "de man, de vrouw, de tafel · de huizen, de boeken" },
            { rule: "het-woorden", detail: "Onzijdige woorden. Ongeveer 25% van alle zelfstandige naamwoorden.", en: "Neuter nouns — about 25% of all nouns.", examples: "het huis, het boek, het kind" },
            { rule: "Altijd het", detail: "Verkleinwoorden (-je, -tje, -pje), talen, windrichtingen, sporten.", en: "Always 'het': diminutives, languages, compass directions, sports.", examples: "het meisje, het Nederlands, het noorden, het voetbal" },
            { rule: "Altijd de", detail: "Woorden op -ing, -heid, -teit, -tie, -ie en beroepen van personen.", en: "Always 'de': words ending in -ing, -heid, -teit, -tie, -ie, and people.", examples: "de vergadering, de waarheid, de universiteit, de politie" },
            { rule: "Een", detail: "Het onbepaalde lidwoord **een** is hetzelfde voor de- en het-woorden.", en: "The indefinite article 'een' is the same for both genders.", examples: "een man, een huis, een kind" }
          ],
          exercises: [
            { id: "l11-a1", sentence: "___ tafel staat in de keuken.", options: ["De", "Het"], correct: "De", explanation: "'Tafel' is een de-woord." },
            { id: "l11-a2", sentence: "___ meisje leest een boek.", options: ["De", "Het"], correct: "Het", explanation: "Verkleinwoorden op -je zijn altijd het-woorden: het meisje." },
            { id: "l11-a3", sentence: "___ vergadering begint om negen uur.", options: ["De", "Het"], correct: "De", explanation: "Woorden op -ing zijn altijd de-woorden." },
            { id: "l11-a4", sentence: "Ik zie ___ kinderen op straat.", options: ["de", "het"], correct: "de", explanation: "Elk meervoud krijgt 'de', ook als het enkelvoud 'het kind' is." }
          ]
        },
        {
          id: "meervoud",
          title: "Enkelvoud en meervoud",
          subtitle: "-en, -s en de spellingregels",
          intro: "Het meervoud krijgt meestal **-en**, soms **-s**. De spelling van de klinker verandert vaak mee.",
          introEn: "Plurals usually take '-en', sometimes '-s'. Vowel spelling often changes along with it.",
          rules: [
            { rule: "Standaard: -en", detail: "Veruit de grootste groep.", en: "Default ending for most nouns.", examples: "boek → boeken · stoel → stoelen · dag → dagen" },
            { rule: "Korte klinker → dubbele medeklinker", detail: "De klinker blijft kort, dus de medeklinker verdubbelt.", en: "Short vowel: double the consonant to keep it short.", examples: "man → mannen · bus → bussen · kop → koppen" },
            { rule: "Lange klinker → één klinker", detail: "In een open lettergreep valt de dubbele klinker weg.", en: "Long vowel: drop one vowel in the open syllable.", examples: "raam → ramen · boot → boten · uur → uren" },
            { rule: "-s na -el, -em, -en, -er, -je", detail: "Woorden op deze onbeklemtoonde uitgangen krijgen -s.", en: "'-s' after unstressed -el, -em, -en, -er, -je.", examples: "tafel → tafels · meisje → meisjes · moeder → moeders" },
            { rule: "f → v en s → z", detail: "Tussen klinkers wordt f een v en s een z.", en: "'f' becomes 'v' and 's' becomes 'z' between vowels.", examples: "brief → brieven · huis → huizen · wolf → wolven" },
            { rule: "Onregelmatig", detail: "Een kleine groep leer je uit het hoofd.", en: "A small group is simply irregular.", examples: "kind → kinderen · ei → eieren · stad → steden" }
          ],
          exercises: [
            { id: "l11-b1", sentence: "één man → twee ___", options: ["manen", "mannen", "mans"], correct: "mannen", explanation: "Korte klinker: de medeklinker verdubbelt → mannen." },
            { id: "l11-b2", sentence: "één raam → drie ___", options: ["ramen", "rammen", "raams"], correct: "ramen", explanation: "Lange klinker in open lettergreep: één a → ramen." },
            { id: "l11-b3", sentence: "één huis → vier ___", options: ["huisen", "huizen", "huises"], correct: "huizen", explanation: "De s wordt een z tussen klinkers: huizen." },
            { id: "l11-b4", sentence: "één kind → vijf ___", options: ["kinden", "kinds", "kinderen"], correct: "kinderen", explanation: "Onregelmatig meervoud: kind → kinderen." }
          ]
        },
        {
          id: "pronomina",
          title: "Persoonlijke voornaamwoorden",
          subtitle: "ik, jij, hij, wij, jullie, zij",
          intro: "Er is een **beklemtoonde** en een **onbeklemtoonde** vorm. In gewone spraak gebruik je meestal de korte vorm.",
          introEn: "Each pronoun has a stressed and an unstressed form; everyday speech uses the short one.",
          rules: [
            { rule: "Onderwerp (subject)", detail: "ik · jij/je · u · hij · zij/ze · wij/we · jullie · zij/ze", en: "Subject pronouns; the second form is the unstressed variant.", examples: "Jij werkt hier. → Je werkt hier." },
            { rule: "Voorwerp (object)", detail: "mij/me · jou/je · u · hem · haar/'r · ons · jullie · hen/ze", en: "Object pronouns, used after a verb or preposition.", examples: "Ik zie hem. · Zij helpt ons." },
            { rule: "U", detail: "Beleefdheidsvorm, enkelvoud én meervoud. Het werkwoord krijgt -t.", en: "Polite form for one or more people; verb takes -t.", examples: "Wilt u koffie? · Woont u hier?" }
          ],
          exercises: [
            { id: "l11-c1", sentence: "Kun je ___ helpen? Ik snap deze oefening niet.", options: ["ik", "mij", "mijn"], correct: "mij", explanation: "Na het werkwoord staat de voorwerpsvorm: mij (of me)." },
            { id: "l11-c2", sentence: "___ gaan vanavond naar de film.", options: ["Wij", "Ons", "Onze"], correct: "Wij", explanation: "Het onderwerp van de zin is 'wij'." },
            { id: "l11-c3", sentence: "Meneer De Vries, woont ___ hier al lang?", options: ["jij", "u", "hij"], correct: "u", explanation: "Tegen een onbekende volwassene gebruik je de beleefdheidsvorm 'u'." }
          ]
        },
        {
          id: "ott",
          title: "Tegenwoordige tijd",
          subtitle: "De stam + t-regel",
          intro: "Neem de infinitief, haal **-en** eraf: dat is de **stam**. Daarna: ik = stam, jij/hij/zij = stam + **t**, meervoud = infinitief.",
          introEn: "Drop '-en' from the infinitive to get the stem: 'ik' = stem, 'jij/hij/zij' = stem + t, plural = infinitive.",
          rules: [
            { rule: "ik", detail: "alleen de stam, zonder uitgang", en: "stem only", examples: "werken → ik werk · wonen → ik woon" },
            { rule: "jij / hij / zij / u / het", detail: "stam + t", en: "stem + t", examples: "jij werkt · hij woont · u komt" },
            { rule: "Inversie: werkwoord vóór 'jij'", detail: "Staat 'jij' ná het werkwoord, dan valt de -t weg.", en: "When 'jij' follows the verb, the -t disappears.", examples: "Jij werkt → Werk jij? · Waar woon jij?" },
            { rule: "wij / jullie / zij", detail: "altijd de infinitief", en: "always the infinitive", examples: "wij werken · jullie wonen · zij komen" },
            { rule: "Nooit -tt of -dt aan het eind", detail: "Eindigt de stam al op t of d, dan schrijf je geen tweede t.", en: "Never write double t; a stem in -d still adds -t.", examples: "zitten → hij zit · worden → hij wordt · antwoorden → hij antwoordt" },
            { rule: "Zijn en hebben", detail: "De twee belangrijkste onregelmatige werkwoorden.", en: "The two key irregular verbs.", examples: "ik ben, jij bent, hij is, wij zijn · ik heb, jij hebt, hij heeft, wij hebben" }
          ],
          exercises: [
            { id: "l11-d1", sentence: "Hij ___ elke dag naar zijn werk. (fietsen)", options: ["fiets", "fietst", "fietsen"], correct: "fietst", explanation: "Derde persoon enkelvoud: stam 'fiets' + t." },
            { id: "l11-d2", sentence: "___ jij morgen naar de les? (komen)", options: ["Komt", "Kom", "Komen"], correct: "Kom", explanation: "Bij inversie (werkwoord vóór jij) valt de -t weg: 'Kom jij?'" },
            { id: "l11-d3", sentence: "Wij ___ in Antwerpen. (wonen)", options: ["woont", "woon", "wonen"], correct: "wonen", explanation: "Het meervoud gebruikt altijd de infinitief." },
            { id: "l11-d4", sentence: "Zij ___ twee kinderen. (hebben)", options: ["heeft", "hebt", "heb"], correct: "heeft", explanation: "Onregelmatig: hij/zij heeft." },
            { id: "l11-d5", sentence: "Het ___ vandaag heel koud. (zijn)", options: ["ben", "bent", "is"], correct: "is", explanation: "Onregelmatig: het/hij/zij is." }
          ]
        },
        {
          id: "woordvolgorde1",
          title: "Woordvolgorde in de hoofdzin",
          subtitle: "Werkwoord op plaats twee",
          intro: "Het vervoegde werkwoord staat in een mededelende zin **altijd op de tweede plaats**. Begin je met iets anders dan het onderwerp, dan komt het onderwerp ná het werkwoord: dat heet **inversie**.",
          introEn: "The conjugated verb always sits in second position; if something else starts the sentence, the subject moves behind the verb (inversion).",
          rules: [
            { rule: "Standaard", detail: "onderwerp – werkwoord – rest", en: "subject – verb – rest", examples: "Ik ga morgen naar Gent." },
            { rule: "Inversie", detail: "Begin je met tijd of plaats, dan wisselen onderwerp en werkwoord.", en: "Starting with time or place swaps subject and verb.", examples: "Morgen ga ik naar Gent. · In Gent woont mijn zus." },
            { rule: "Ja/nee-vraag", detail: "Het werkwoord staat vooraan.", en: "Yes/no questions put the verb first.", examples: "Ga je mee? · Woont hij hier?" },
            { rule: "Vraagwoord", detail: "vraagwoord – werkwoord – onderwerp", en: "question word – verb – subject", examples: "Waar woon je? · Wanneer begint de les?" },
            { rule: "Tijd vóór plaats", detail: "In de rest van de zin komt de tijd meestal vóór de plaats.", en: "Time normally precedes place.", examples: "Ik ga morgen naar Gent. (niet: naar Gent morgen)" }
          ],
          exercises: [
            { id: "l11-e1", sentence: "Morgen ___ ik naar de markt.", options: ["ik ga", "ga", "gaan"], correct: "ga", explanation: "Na 'morgen' volgt het werkwoord, daarna pas het onderwerp: Morgen ga ik..." },
            { id: "l11-e2", sentence: "Welke zin is correct?", options: ["Ik ga naar school morgen.", "Ik ga morgen naar school.", "Morgen ik ga naar school."], correct: "Ik ga morgen naar school.", explanation: "Tijd staat vóór plaats, en het werkwoord op plaats twee." },
            { id: "l11-e3", sentence: "___ begint de film?", options: ["Hoe laat", "Hoe laat het", "Wanneer het"], correct: "Hoe laat", explanation: "Vraagwoord – werkwoord – onderwerp: Hoe laat begint de film?" }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────
    {
      id: "1.2",
      label: "Niveau 1.2",
      cefr: "A2 — basisgebruiker",
      icon: "🌿",
      summary: "Bezittelijke voornaamwoorden, het bijvoeglijk naamwoord, de voltooide tijd en de modale werkwoorden.",
      topics: [
        {
          id: "bezittelijk",
          title: "Bezittelijke voornaamwoorden",
          subtitle: "mijn, jouw, zijn, haar, ons, hun",
          intro: "Alleen **ons/onze** verandert van vorm; de rest blijft altijd hetzelfde.",
          introEn: "Only 'ons/onze' changes form; all the others are invariable.",
          rules: [
            { rule: "De vormen", detail: "mijn · jouw/je · uw · zijn · haar · ons/onze · jullie · hun", en: "my, your, your (polite), his, her, our, your (pl.), their", examples: "mijn boek · haar tas · hun huis" },
            { rule: "ons of onze?", detail: "**ons** bij het-woorden, **onze** bij de-woorden en alle meervouden.", en: "'ons' with het-words, 'onze' with de-words and plurals.", examples: "ons huis · onze auto · onze kinderen" },
            { rule: "Bezit met 's", detail: "Bij namen gebruik je 's zonder apostrof, behalve na een klinker.", en: "Possessive -s on names; apostrophe only after a vowel.", examples: "Jans fiets · Anna's fiets" }
          ],
          exercises: [
            { id: "l12-a1", sentence: "Dit is ___ huis. Wij wonen hier al tien jaar.", options: ["ons", "onze", "onzes"], correct: "ons", explanation: "'Huis' is een het-woord, dus 'ons huis'." },
            { id: "l12-a2", sentence: "___ auto staat voor de deur. (wij)", options: ["Ons", "Onze", "Onzen"], correct: "Onze", explanation: "'Auto' is een de-woord, dus 'onze auto'." },
            { id: "l12-a3", sentence: "Sofie zoekt ___ sleutels.", options: ["zijn", "haar", "hun"], correct: "haar", explanation: "Sofie is vrouwelijk enkelvoud: haar sleutels." }
          ]
        },
        {
          id: "adjectief",
          title: "Het bijvoeglijk naamwoord",
          subtitle: "De -e regel",
          intro: "Vóór een zelfstandig naamwoord krijgt het bijvoeglijk naamwoord meestal **-e**. Er is één belangrijke uitzondering.",
          introEn: "Adjectives before a noun normally take '-e'. There is one key exception.",
          rules: [
            { rule: "Met de: altijd -e", detail: "Bij alle de-woorden en alle meervouden.", en: "Always '-e' with de-words and plurals.", examples: "de grote man · een grote man · de mooie huizen" },
            { rule: "Uitzondering: een + het-woord", detail: "Na **een** (of geen lidwoord) bij een het-woord: géén -e.", en: "No '-e' after 'een' with a het-word.", examples: "een groot huis · een klein kind · groot nieuws" },
            { rule: "Met het: wel -e", detail: "Met het bepaalde lidwoord 'het' krijg je wél -e.", en: "With the definite 'het' the '-e' returns.", examples: "het grote huis · het kleine kind" },
            { rule: "Na het werkwoord: nooit -e", detail: "Staat het bijvoeglijk naamwoord alleen, dan blijft het onveranderd.", en: "Predicative adjectives never take '-e'.", examples: "Het huis is groot. · De man is aardig." }
          ],
          exercises: [
            { id: "l12-b1", sentence: "Zij woont in een ___ huis. (groot)", options: ["groot", "grote", "groten"], correct: "groot", explanation: "een + het-woord (het huis) → geen -e: een groot huis." },
            { id: "l12-b2", sentence: "Kijk, het ___ huis op de hoek. (groot)", options: ["groot", "grote", "groter"], correct: "grote", explanation: "Met het bepaalde lidwoord 'het' krijgt het bijvoeglijk naamwoord wél -e." },
            { id: "l12-b3", sentence: "Dat is een ___ auto. (duur)", options: ["duur", "dure", "duren"], correct: "dure", explanation: "'Auto' is een de-woord, dus altijd -e: een dure auto." },
            { id: "l12-b4", sentence: "Het weer is vandaag ___. (mooi)", options: ["mooi", "mooie", "mooier"], correct: "mooi", explanation: "Na het werkwoord blijft het bijvoeglijk naamwoord onveranderd." }
          ]
        },
        {
          id: "perfectum",
          title: "De voltooide tijd",
          subtitle: "hebben of zijn + voltooid deelwoord",
          intro: "Voor het verleden gebruik je in gesprekken meestal het **perfectum**: hulpwerkwoord + voltooid deelwoord achteraan.",
          introEn: "Spoken Dutch usually expresses the past with the perfect: auxiliary + past participle at the end.",
          rules: [
            { rule: "Regelmatig deelwoord", detail: "**ge** + stam + **t** of **d**", en: "ge- + stem + t/d", examples: "werken → gewerkt · horen → gehoord" },
            { rule: "'t kofschip", detail: "Eindigt de stam op **t, k, f, s, ch, p** → **-t**. Anders → **-d**.", en: "Stem ends in t/k/f/s/ch/p → '-t'; otherwise '-d'.", examples: "praten → gepraat · maken → gemaakt · wonen → gewoond" },
            { rule: "Let op: v en z", detail: "Bij werkwoorden met **v** of **z** in de infinitief kijk je naar díe letter, niet naar de f/s van de stam → altijd **-d**.", en: "Verbs with v/z in the infinitive take '-d', despite the f/s in the stem.", examples: "leven → geleefd · reizen → gereisd · geloven → geloofd" },
            { rule: "Onregelmatig", detail: "Sterke werkwoorden krijgen ge- + …-en, vaak met klinkerwissel.", en: "Strong verbs: ge- + -en, often with a vowel change.", examples: "lezen → gelezen · drinken → gedronken · zien → gezien" },
            { rule: "Geen ge- bij be-, ver-, ont-, ge-, her-", detail: "Werkwoorden met dit voorvoegsel krijgen geen extra ge-.", en: "No extra 'ge-' after these prefixes.", examples: "betalen → betaald · vertellen → verteld · ontmoeten → ontmoet" },
            { rule: "Hebben of zijn?", detail: "**zijn** bij verandering van plaats of toestand, en bij zijn/blijven/worden. Verder **hebben**.", en: "'zijn' for change of place or state; otherwise 'hebben'.", examples: "Ik heb gewerkt. · Ik ben naar Gent gegaan. · Hij is ziek geworden." },
            { rule: "Positie", detail: "Het deelwoord staat helemaal achteraan in de zin.", en: "The participle goes to the very end.", examples: "Ik heb gisteren een film gezien." }
          ],
          exercises: [
            { id: "l12-c1", sentence: "Ik heb gisteren hard ___. (werken)", options: ["gewerkt", "gewerkd", "werkte"], correct: "gewerkt", explanation: "Stam 'werk' eindigt op k ('t kofschip) → gewerkt." },
            { id: "l12-c2", sentence: "Wij ___ vorig jaar naar Spanje gegaan.", options: ["hebben", "zijn", "waren"], correct: "zijn", explanation: "'Gaan' is een verandering van plaats → hulpwerkwoord 'zijn'." },
            { id: "l12-c3", sentence: "Hij heeft de rekening al ___. (betalen)", options: ["gebetaald", "betaald", "betaalt"], correct: "betaald", explanation: "Werkwoorden met be- krijgen geen ge-: betaald." },
            { id: "l12-c4", sentence: "Heb je dat boek al ___? (lezen)", options: ["geleesd", "gelezen", "gelest"], correct: "gelezen", explanation: "Sterk werkwoord: lezen → gelezen." }
          ]
        },
        {
          id: "modalen",
          title: "Modale werkwoorden",
          subtitle: "kunnen, mogen, moeten, willen, zullen",
          intro: "Een modaal werkwoord wordt vervoegd; het tweede werkwoord blijft **infinitief** en gaat naar het einde.",
          introEn: "The modal is conjugated; the second verb stays an infinitive and moves to the end.",
          rules: [
            { rule: "kunnen", detail: "mogelijkheid of vaardigheid — ik kan, jij kunt/kan, hij kan, wij kunnen", en: "ability or possibility", examples: "Ik kan goed zwemmen." },
            { rule: "mogen", detail: "toestemming — ik mag, jij mag, hij mag, wij mogen", en: "permission", examples: "Je mag hier niet parkeren." },
            { rule: "moeten", detail: "verplichting — ik moet, jij moet, hij moet, wij moeten", en: "obligation", examples: "Ik moet morgen vroeg opstaan." },
            { rule: "willen", detail: "wens — ik wil, jij wilt/wil, hij wil, wij willen", en: "wish", examples: "Wij willen een huis kopen." },
            { rule: "Positie", detail: "De infinitief staat altijd achteraan.", en: "The infinitive always lands at the end.", examples: "Ik wil vanavond een film kijken." }
          ],
          exercises: [
            { id: "l12-d1", sentence: "Ik ___ morgen vroeg opstaan, want ik heb een examen.", options: ["moet", "moeten", "moest"], correct: "moet", explanation: "Eerste persoon enkelvoud: ik moet." },
            { id: "l12-d2", sentence: "Welke zin is correct?", options: ["Ik kan zwemmen goed.", "Ik kan goed zwemmen.", "Ik goed kan zwemmen."], correct: "Ik kan goed zwemmen.", explanation: "Het modale werkwoord op plaats twee, de infinitief helemaal achteraan." },
            { id: "l12-d3", sentence: "Je ___ hier niet roken, dat is verboden.", options: ["mag", "moet", "wil"], correct: "mag", explanation: "Bij (geen) toestemming gebruik je 'mogen'." }
          ]
        },
        {
          id: "scheidbaar",
          title: "Scheidbare werkwoorden",
          subtitle: "opbellen, meegaan, aankomen",
          intro: "Bij een scheidbaar werkwoord springt het voorvoegsel in de hoofdzin naar het **einde** van de zin.",
          introEn: "In a main clause the prefix of a separable verb jumps to the end.",
          rules: [
            { rule: "Hoofdzin: gescheiden", detail: "werkwoord op plaats twee, voorvoegsel achteraan", en: "Verb second, prefix last.", examples: "opbellen → Ik bel je morgen op." },
            { rule: "Met een modaal: samen", detail: "Als infinitief blijft het werkwoord één geheel.", en: "As an infinitive it stays together.", examples: "Ik wil je morgen opbellen." },
            { rule: "Voltooid deelwoord", detail: "**ge-** komt tússen voorvoegsel en stam.", en: "'ge-' goes between the prefix and the stem.", examples: "Ik heb je gisteren opgebeld. · De trein is aangekomen." },
            { rule: "In de bijzin: samen", detail: "In een bijzin blijft het werkwoord aan elkaar.", en: "In a subordinate clause it stays joined.", examples: "…omdat ik je morgen opbel." }
          ],
          exercises: [
            { id: "l12-e1", sentence: "Ik ___ je vanavond ___. (opbellen)", options: ["bel … op", "opbel … ∅", "bel op … ∅"], correct: "bel … op", explanation: "In de hoofdzin splitst het werkwoord: 'Ik bel je vanavond op.'" },
            { id: "l12-e2", sentence: "De trein is net ___. (aankomen)", options: ["aangekomen", "geaankomen", "aankomd"], correct: "aangekomen", explanation: "Het ge- staat tussen voorvoegsel en stam: aan-ge-komen." },
            { id: "l12-e3", sentence: "Ik wil je morgen ___. (opbellen)", options: ["op bellen", "opbellen", "bellen op"], correct: "opbellen", explanation: "Als infinitief na een modaal blijft het werkwoord één woord." }
          ]
        },
        {
          id: "ontkenning",
          title: "Niet of geen",
          subtitle: "Ontkennen in het Nederlands",
          intro: "**Geen** ontkent een zelfstandig naamwoord zonder lidwoord of met 'een'. In alle andere gevallen gebruik je **niet**.",
          introEn: "'Geen' negates a noun with 'een' or no article; otherwise use 'niet'.",
          rules: [
            { rule: "geen", detail: "vóór een zelfstandig naamwoord met 'een' of zonder lidwoord", en: "before a noun with 'een' or no article", examples: "Ik heb geen auto. · Ik drink geen koffie." },
            { rule: "niet", detail: "bij werkwoorden, bijvoeglijke naamwoorden, en bij de/het/mijn + naamwoord", en: "with verbs, adjectives, and definite/possessive nouns", examples: "Ik werk niet. · Het is niet duur. · Ik ken die man niet." },
            { rule: "Plaats van niet", detail: "Meestal achteraan, maar vóór een bijvoeglijk naamwoord, voorzetsel of infinitief.", en: "Usually final, but before adjectives, prepositions and infinitives.", examples: "Ik ga vandaag niet naar school." }
          ],
          exercises: [
            { id: "l12-f1", sentence: "Ik heb ___ tijd om te komen.", options: ["niet", "geen", "geene"], correct: "geen", explanation: "'Tijd' staat zonder lidwoord → geen." },
            { id: "l12-f2", sentence: "Ik ken die vrouw ___.", options: ["geen", "niet", "nee"], correct: "niet", explanation: "'Die vrouw' is bepaald, dus ontken je met 'niet'." },
            { id: "l12-f3", sentence: "Deze film is ___ interessant.", options: ["geen", "niet", "geens"], correct: "niet", explanation: "Vóór een bijvoeglijk naamwoord gebruik je 'niet'." }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────
    {
      id: "2.1",
      label: "Niveau 2.1",
      cefr: "B1 — zelfstandig gebruiker",
      icon: "🌳",
      summary: "De onvoltooid verleden tijd, bijzinnen met voegwoorden, en trappen van vergelijking.",
      topics: [
        {
          id: "imperfectum",
          title: "De onvoltooid verleden tijd",
          subtitle: "-te / -de en de sterke werkwoorden",
          intro: "Het **imperfectum** gebruik je voor verhalen, beschrijvingen en gewoontes in het verleden.",
          introEn: "The simple past is used for narration, description and habits in the past.",
          rules: [
            { rule: "Regelmatig", detail: "stam + **-te(n)** na 't kofschip, anders + **-de(n)**", en: "stem + -te(n) after 't kofschip letters, else -de(n)", examples: "werken → ik werkte, wij werkten · horen → ik hoorde, wij hoorden" },
            { rule: "Ook hier: v en z", detail: "Net als bij het deelwoord kijk je naar de v of z van de infinitief → **-de**.", en: "As with participles, v/z verbs take '-de'.", examples: "leven → ik leefde · reizen → ik reisde" },
            { rule: "Sterk", detail: "klinkerverandering, geen uitgang in het enkelvoud", en: "vowel change, no ending in the singular", examples: "lopen → ik liep · drinken → ik dronk · zien → ik zag" },
            { rule: "zijn en hebben", detail: "was / waren · had / hadden", en: "the two essential irregulars", examples: "Ik was ziek. · Wij hadden geen geld." },
            { rule: "Imperfectum of perfectum?", detail: "Perfectum voor een losse gebeurtenis in een gesprek; imperfectum voor een doorlopend verhaal of beschrijving.", en: "Perfect for single events in conversation; simple past for narrative and description.", examples: "Ik heb dat gezien. (nieuws) · Vroeger woonde ik in Gent. (beschrijving)" }
          ],
          exercises: [
            { id: "l21-a1", sentence: "Vroeger ___ ik elke dag met de fiets naar school. (gaan)", options: ["ging", "gingen", "gegaan"], correct: "ging", explanation: "Sterk werkwoord, enkelvoud verleden tijd: ging." },
            { id: "l21-a2", sentence: "Wij ___ gisteren de hele dag. (werken)", options: ["werkte", "werkten", "gewerkt"], correct: "werkten", explanation: "Regelmatig, meervoud: stam + -ten (na 't kofschip)." },
            { id: "l21-a3", sentence: "Zij ___ als kind in Brugge. (wonen)", options: ["woonte", "woonde", "gewoond"], correct: "woonde", explanation: "De stam eindigt op n (niet in 't kofschip) → -de: woonde." },
            { id: "l21-a4", sentence: "Ik ___ vorige week erg ziek. (zijn)", options: ["was", "waren", "ben"], correct: "was", explanation: "Onregelmatig: ik was, wij waren." }
          ]
        },
        {
          id: "bijzin",
          title: "De bijzin",
          subtitle: "Werkwoord naar het einde",
          intro: "Na een onderschikkend voegwoord verhuizen **alle werkwoorden naar het einde** van de bijzin. Dit is een van de grootste verschillen met het Engels.",
          introEn: "After a subordinating conjunction every verb moves to the end of the clause.",
          rules: [
            { rule: "Voegwoorden", detail: "omdat, dat, of, als, wanneer, terwijl, hoewel, zodat, voordat, nadat", en: "Common subordinating conjunctions.", examples: "Ik blijf thuis **omdat** ik ziek **ben**." },
            { rule: "Werkwoord achteraan", detail: "Bij twee werkwoorden staan ze samen achteraan.", en: "With two verbs, both go to the end.", examples: "…omdat ik gisteren gewerkt heb. / …heb gewerkt." },
            { rule: "Bijzin vooraan", detail: "Begint de zin met de bijzin, dan volgt inversie in de hoofdzin.", en: "A fronted clause triggers inversion in the main clause.", examples: "Omdat het regent, blijf ik thuis." },
            { rule: "want vs omdat", detail: "**want** is nevenschikkend (normale volgorde), **omdat** onderschikkend (werkwoord achteraan).", en: "'want' keeps normal order; 'omdat' sends the verb to the end.", examples: "Ik blijf thuis, want ik ben ziek. · Ik blijf thuis omdat ik ziek ben." }
          ],
          exercises: [
            { id: "l21-b1", sentence: "Ik kom niet, omdat ik ___.", options: ["ben ziek", "ziek ben", "ziek bin"], correct: "ziek ben", explanation: "In de bijzin staat het werkwoord achteraan: omdat ik ziek ben." },
            { id: "l21-b2", sentence: "Hij zegt dat hij morgen ___.", options: ["komt", "komen", "kom"], correct: "komt", explanation: "Het werkwoord staat achteraan, maar blijft vervoegd: dat hij morgen komt." },
            { id: "l21-b3", sentence: "Welke zin is correct?", options: ["Ik blijf thuis, want ik ben moe.", "Ik blijf thuis, want ik moe ben.", "Ik blijf thuis, omdat ik ben moe."], correct: "Ik blijf thuis, want ik ben moe.", explanation: "'Want' is nevenschikkend: normale woordvolgorde blijft." },
            { id: "l21-b4", sentence: "Als het morgen ___, gaan we niet fietsen.", options: ["regent", "regenen", "geregend"], correct: "regent", explanation: "Bijzin met 'als': vervoegd werkwoord achteraan." }
          ]
        },
        {
          id: "relatief",
          title: "Betrekkelijke bijzinnen",
          subtitle: "die of dat",
          intro: "**Die** hoort bij de-woorden en meervouden, **dat** bij het-woorden.",
          introEn: "'die' refers to de-words and plurals; 'dat' to het-words.",
          rules: [
            { rule: "die", detail: "bij de-woorden en alle meervouden", en: "with de-words and plurals", examples: "de man die daar staat · de boeken die ik las" },
            { rule: "dat", detail: "bij het-woorden", en: "with het-words", examples: "het huis dat te koop staat" },
            { rule: "Met voorzetsel: waar+", detail: "Bij dingen wordt het waarmee, waarover, waarin…", en: "For things, combine with 'waar-'.", examples: "de pen waarmee ik schrijf · het boek waarover we praatten" },
            { rule: "Werkwoord achteraan", detail: "Een betrekkelijke bijzin is ook een bijzin.", en: "Relative clauses follow subordinate word order.", examples: "De vrouw die naast mij woont, is arts." }
          ],
          exercises: [
            { id: "l21-c1", sentence: "Dat is de man ___ hier gisteren was.", options: ["die", "dat", "wie"], correct: "die", explanation: "'De man' is een de-woord → die." },
            { id: "l21-c2", sentence: "Ik zoek het boek ___ op tafel lag.", options: ["die", "dat", "wat"], correct: "dat", explanation: "'Het boek' is een het-woord → dat." },
            { id: "l21-c3", sentence: "De kinderen ___ hier spelen, wonen in die straat.", options: ["dat", "die", "wie"], correct: "die", explanation: "Meervoud krijgt altijd 'die'." }
          ]
        },
        {
          id: "vergelijking",
          title: "Trappen van vergelijking",
          subtitle: "groot – groter – grootst",
          intro: "De vergrotende trap krijgt **-er**, de overtreffende trap **-st**.",
          introEn: "Comparatives take '-er', superlatives '-st'.",
          rules: [
            { rule: "Regelmatig", detail: "+ -er / + -st", en: "regular pattern", examples: "klein → kleiner → kleinst · snel → sneller → snelst" },
            { rule: "Na -r: -der", detail: "Eindigt het woord op -r, dan komt er een d bij.", en: "Words ending in -r insert a 'd'.", examples: "duur → duurder · lekker → lekkerder" },
            { rule: "Lange woorden: meest", detail: "Bij lange woorden gebruik je 'meer' en 'meest'.", en: "Long adjectives use meer/meest.", examples: "interessant → interessanter → meest interessant" },
            { rule: "Onregelmatig", detail: "goed – beter – best · veel – meer – meest · weinig – minder – minst", en: "irregular forms", examples: "Dit is beter dan dat." },
            { rule: "dan of als", detail: "Vergelijken doe je met **dan**; gelijkheid met **net zo … als**.", en: "Use 'dan' for comparison, 'net zo … als' for equality.", examples: "Hij is groter dan ik. · Zij is net zo groot als ik." }
          ],
          exercises: [
            { id: "l21-d1", sentence: "Deze fiets is ___ dan die van mij. (duur)", options: ["duurer", "duurder", "meer duur"], correct: "duurder", explanation: "Na -r komt er een d bij: duurder." },
            { id: "l21-d2", sentence: "Zij spreekt ___ Nederlands dan vorig jaar. (goed)", options: ["goeder", "beter", "best"], correct: "beter", explanation: "Onregelmatig: goed – beter – best." },
            { id: "l21-d3", sentence: "Hij is net zo lang ___ zijn broer.", options: ["dan", "als", "dat"], correct: "als", explanation: "Bij gelijkheid gebruik je 'net zo … als'." }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────
    {
      id: "2.2",
      label: "Niveau 2.2",
      cefr: "B1+ — gevorderd",
      icon: "🏛️",
      summary: "Toekomst, wederkerende werkwoorden, om te + infinitief, vaste voorzetsels en de lijdende vorm.",
      topics: [
        {
          id: "toekomst",
          title: "De toekomende tijd",
          subtitle: "gaan, zullen of gewoon de tegenwoordige tijd",
          intro: "Het Nederlands gebruikt voor de toekomst heel vaak gewoon de **tegenwoordige tijd** met een tijdsbepaling.",
          introEn: "Dutch very often expresses the future with the present tense plus a time marker.",
          rules: [
            { rule: "Tegenwoordige tijd", detail: "met een woord als morgen, straks, volgend jaar", en: "present tense + time expression", examples: "Ik ga morgen naar Brussel." },
            { rule: "gaan + infinitief", detail: "een plan of voornemen", en: "plan or intention", examples: "Ik ga een huis kopen." },
            { rule: "zullen + infinitief", detail: "belofte, voorspelling of aanbod; formeler", en: "promise, prediction or offer; more formal", examples: "Ik zal je helpen. · Het zal morgen regenen." },
            { rule: "Vervoeging zullen", detail: "ik zal, jij zult/zal, hij zal, wij zullen", en: "conjugation of 'zullen'", examples: "Zullen we gaan?" }
          ],
          exercises: [
            { id: "l22-a1", sentence: "___ we vanavond naar de film gaan?", options: ["Zullen", "Zult", "Zal"], correct: "Zullen", explanation: "Bij 'we' hoort de meervoudsvorm: Zullen we…?" },
            { id: "l22-a2", sentence: "Ik ___ volgend jaar Spaans studeren. (plan)", options: ["ga", "zal", "word"], correct: "ga", explanation: "Voor een plan gebruik je 'gaan + infinitief'." },
            { id: "l22-a3", sentence: "Ik ___ je morgen zeker terugbellen, dat beloof ik.", options: ["ga", "zal", "wil"], correct: "zal", explanation: "Bij een belofte past 'zullen'." }
          ]
        },
        {
          id: "reflexief",
          title: "Wederkerende werkwoorden",
          subtitle: "zich wassen, zich vergissen",
          intro: "Sommige werkwoorden hebben altijd een **wederkerend voornaamwoord** bij zich.",
          introEn: "Some verbs always require a reflexive pronoun.",
          rules: [
            { rule: "De vormen", detail: "me · je · zich · ons · je · zich", en: "myself, yourself, him/herself, ourselves, yourselves, themselves", examples: "ik was me · hij wast zich · wij wassen ons" },
            { rule: "Vaste wederkerende werkwoorden", detail: "zich herinneren, zich vergissen, zich voelen, zich haasten, zich vervelen", en: "verbs that are always reflexive", examples: "Ik voel me niet goed. · Je vergist je." },
            { rule: "Positie", detail: "Het voornaamwoord staat direct na het vervoegde werkwoord.", en: "The pronoun follows the conjugated verb.", examples: "Gisteren voelde ik me ziek." }
          ],
          exercises: [
            { id: "l22-b1", sentence: "Ik voel ___ vandaag niet zo goed.", options: ["me", "zich", "mijn"], correct: "me", explanation: "Bij 'ik' hoort 'me': ik voel me." },
            { id: "l22-b2", sentence: "Hij herinnert ___ die dag nog goed.", options: ["hem", "zich", "zijn"], correct: "zich", explanation: "Derde persoon gebruikt altijd 'zich'." },
            { id: "l22-b3", sentence: "Wij moeten ___ haasten, de trein vertrekt zo.", options: ["ons", "zich", "onze"], correct: "ons", explanation: "Bij 'wij' hoort 'ons'." }
          ]
        },
        {
          id: "omte",
          title: "Om te + infinitief",
          subtitle: "Doel en beknopte bijzinnen",
          intro: "**Om te** drukt een doel uit: waarom doe je iets?",
          introEn: "'Om te' expresses purpose — why you do something.",
          rules: [
            { rule: "Doel", detail: "om + … + te + infinitief, helemaal achteraan", en: "purpose clause, verb-final", examples: "Ik ga naar de winkel om brood te kopen." },
            { rule: "Na bijvoeglijke naamwoorden", detail: "moeilijk, leuk, belangrijk + om te", en: "after adjectives", examples: "Het is moeilijk om Nederlands te leren." },
            { rule: "Zonder om", detail: "Na proberen, beginnen, vergeten, hopen kan 'te' alleen.", en: "Some verbs take bare 'te'.", examples: "Ik probeer te slapen. · Hij vergeet te bellen." },
            { rule: "Scheidbaar werkwoord", detail: "'te' komt tussen voorvoegsel en stam.", en: "'te' goes inside a separable verb.", examples: "Ik vergeet je op te bellen." }
          ],
          exercises: [
            { id: "l22-c1", sentence: "Ik ga naar de bakker ___ brood ___ kopen.", options: ["om … te", "voor … te", "om … ∅"], correct: "om … te", explanation: "Doel druk je uit met 'om … te + infinitief'." },
            { id: "l22-c2", sentence: "Vergeet niet mij morgen ___. (opbellen)", options: ["op te bellen", "te opbellen", "opbellen te"], correct: "op te bellen", explanation: "Bij een scheidbaar werkwoord komt 'te' in het midden: op te bellen." },
            { id: "l22-c3", sentence: "Het is belangrijk ___ elke dag ___ oefenen.", options: ["om … te", "dat … te", "om … ∅"], correct: "om … te", explanation: "Na 'het is belangrijk' volgt 'om … te + infinitief'." }
          ]
        },
        {
          id: "voorzetsels",
          title: "Vaste voorzetsels",
          subtitle: "denken aan, wachten op, houden van",
          intro: "Veel werkwoorden hebben een **vast voorzetsel**. Je leert ze als één geheel.",
          introEn: "Many verbs come with a fixed preposition; learn them as one unit.",
          rules: [
            { rule: "Veelgebruikt", detail: "denken aan · wachten op · houden van · praten over · zoeken naar · vragen om", en: "high-frequency verb + preposition pairs", examples: "Ik wacht op de bus. · Zij houdt van muziek." },
            { rule: "Er + voorzetsel", detail: "Verwijs je naar een ding, dan wordt het erop, eraan, erover…", en: "For things, merge 'er' with the preposition.", examples: "Ik wacht erop. · Ik denk eraan." },
            { rule: "Gesplitst", detail: "In een langere zin splitsen er en het voorzetsel.", en: "'er' and the preposition often split.", examples: "Ik wacht er al een uur op." },
            { rule: "Vragen: waar +", detail: "Vraagwoorden voor dingen: waarop, waaraan, waarover.", en: "Questions about things use 'waar-'.", examples: "Waar wacht je op? · Waarover praten jullie?" }
          ],
          exercises: [
            { id: "l22-d1", sentence: "Ik wacht al een uur ___ de bus.", options: ["voor", "op", "aan"], correct: "op", explanation: "Vast voorzetsel: wachten op." },
            { id: "l22-d2", sentence: "Zij houdt heel veel ___ klassieke muziek.", options: ["van", "over", "aan"], correct: "van", explanation: "Vast voorzetsel: houden van." },
            { id: "l22-d3", sentence: "Denk je nog aan de afspraak? — Ja, ik denk ___.", options: ["eraan", "erop", "daaraan"], correct: "eraan", explanation: "'aan' + verwijzing naar een ding → eraan." }
          ]
        },
        {
          id: "passief",
          title: "De lijdende vorm",
          subtitle: "worden + voltooid deelwoord",
          intro: "In de lijdende vorm is niet de dader belangrijk, maar wat er **gebeurt**.",
          introEn: "The passive foregrounds the action rather than the agent.",
          rules: [
            { rule: "Tegenwoordig", detail: "worden + voltooid deelwoord", en: "present passive", examples: "Het huis wordt geverfd." },
            { rule: "Verleden", detail: "werd / werden + voltooid deelwoord", en: "past passive", examples: "De brief werd gisteren verstuurd." },
            { rule: "Voltooid", detail: "is/zijn + voltooid deelwoord (zonder 'geworden')", en: "perfect passive drops 'geworden'", examples: "Het huis is verkocht." },
            { rule: "De dader: door", detail: "Wil je de dader noemen, gebruik dan 'door'.", en: "Introduce the agent with 'door'.", examples: "De brief werd door Jan geschreven." }
          ],
          exercises: [
            { id: "l22-e1", sentence: "Het rapport ___ elke maand gecontroleerd.", options: ["wordt", "is", "heeft"], correct: "wordt", explanation: "Tegenwoordige lijdende vorm: worden + deelwoord." },
            { id: "l22-e2", sentence: "De ramen ___ gisteren gewassen.", options: ["worden", "werden", "zijn geworden"], correct: "werden", explanation: "Verleden tijd meervoud: werden + deelwoord." },
            { id: "l22-e3", sentence: "Dat boek ___ geschreven ___ een Vlaamse auteur.", options: ["is … door", "wordt … van", "heeft … door"], correct: "is … door", explanation: "Voltooid passief met 'is', dader met 'door'." }
          ]
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────
    {
      id: "2.3",
      label: "Niveau 2.3",
      cefr: "B1 eindniveau",
      icon: "🎓",
      summary: "Voltooid verleden tijd, conditionalis, werkwoordclusters en gevorderde voegwoorden. Eindpunt van deze cursus.",
      topics: [
        {
          id: "vvt",
          title: "Voltooid verleden tijd",
          subtitle: "had / was + voltooid deelwoord",
          intro: "Gebruik je voor iets dat **vóór** een ander moment in het verleden gebeurde.",
          introEn: "Used for an event that happened before another past event.",
          rules: [
            { rule: "Vorm", detail: "had/hadden of was/waren + voltooid deelwoord", en: "had/was + past participle", examples: "Ik had het al gezien. · Zij was al vertrokken." },
            { rule: "Gebruik", detail: "de oudste gebeurtenis in een verhaal", en: "the earlier of two past events", examples: "Toen ik aankwam, was de film al begonnen." },
            { rule: "Hulpwerkwoord", detail: "Dezelfde keuze als bij het perfectum: hebben of zijn.", en: "Same auxiliary choice as the perfect.", examples: "Ik had gewerkt. · Ik was gegaan." }
          ],
          exercises: [
            { id: "l23-a1", sentence: "Toen ik aankwam, ___ de film al begonnen.", options: ["is", "was", "had"], correct: "was", explanation: "'Beginnen' neemt 'zijn' → was begonnen." },
            { id: "l23-a2", sentence: "Zij ___ het boek al gelezen voordat de les begon.", options: ["heeft", "had", "was"], correct: "had", explanation: "'Lezen' neemt 'hebben' → had gelezen." }
          ]
        },
        {
          id: "conditionalis",
          title: "Conditionalis",
          subtitle: "zou + infinitief en als-zinnen",
          intro: "Met **zou(den)** druk je iets hypothetisch, beleefds of onwerkelijks uit.",
          introEn: "'zou(den)' expresses hypothetical, polite or unreal situations.",
          rules: [
            { rule: "Vorm", detail: "ik zou, jij zou, hij zou, wij zouden + infinitief", en: "conditional formation", examples: "Ik zou graag koffie drinken." },
            { rule: "Beleefdheid", detail: "vriendelijker dan 'ik wil'", en: "softer than a plain wish", examples: "Zou u mij kunnen helpen?" },
            { rule: "Onwerkelijke als-zin", detail: "als + imperfectum, hoofdzin met zou", en: "unreal conditional", examples: "Als ik rijk was, zou ik een huis kopen." },
            { rule: "Onwerkelijk verleden", detail: "als + voltooid verleden tijd, hoofdzin met zou hebben/zijn", en: "past unreal conditional", examples: "Als ik het geweten had, zou ik gekomen zijn." }
          ],
          exercises: [
            { id: "l23-b1", sentence: "Als ik meer tijd ___, zou ik vaker sporten.", options: ["heb", "had", "hebben"], correct: "had", explanation: "Onwerkelijke voorwaarde: als + imperfectum." },
            { id: "l23-b2", sentence: "___ u mij alstublieft kunnen helpen?", options: ["Zou", "Zal", "Wil"], correct: "Zou", explanation: "'Zou' maakt het verzoek beleefd." },
            { id: "l23-b3", sentence: "Wij ___ graag volgend jaar naar Japan reizen.", options: ["zouden", "zullen", "zou"], correct: "zouden", explanation: "Meervoud: wij zouden." }
          ]
        },
        {
          id: "clusters",
          title: "Werkwoordclusters",
          subtitle: "Drie werkwoorden achteraan",
          intro: "In een bijzin kunnen drie werkwoorden samen achteraan komen. De volgorde ligt grotendeels vast.",
          introEn: "Subordinate clauses can stack three verbs at the end, in a largely fixed order.",
          rules: [
            { rule: "Twee werkwoorden", detail: "Beide volgordes mogen: 'heeft gewerkt' of 'gewerkt heeft'.", en: "Both orders are accepted with two verbs.", examples: "…omdat hij hard gewerkt heeft / heeft gewerkt." },
            { rule: "Modaal + infinitief", detail: "Het hulpwerkwoord komt vooraan in de groep.", en: "The auxiliary leads the cluster.", examples: "…omdat ik morgen moet werken." },
            { rule: "Vervangende infinitief", detail: "Met een modaal in de voltooide tijd gebruik je géén deelwoord maar een infinitief.", en: "Modals in the perfect use an infinitive, not a participle.", examples: "Ik heb niet kunnen komen. (niet: gekund)" },
            { rule: "Drie werkwoorden", detail: "hulpwerkwoord – modaal – hoofdwerkwoord", en: "auxiliary – modal – main verb", examples: "…omdat ik het niet heb kunnen afmaken." }
          ],
          exercises: [
            { id: "l23-c1", sentence: "Ik heb gisteren niet ___ komen.", options: ["gekund", "kunnen", "kon"], correct: "kunnen", explanation: "Vervangende infinitief: 'heb niet kunnen komen', nooit 'gekund'." },
            { id: "l23-c2", sentence: "…omdat ik het rapport nog niet ___.", options: ["heb kunnen afmaken", "kunnen afmaken heb", "afmaken kunnen heb"], correct: "heb kunnen afmaken", explanation: "Volgorde: hulpwerkwoord – modaal – hoofdwerkwoord." }
          ]
        },
        {
          id: "voegwoorden2",
          title: "Gevorderde voegwoorden",
          subtitle: "hoewel, zodat, tenzij, nadat",
          intro: "Deze voegwoorden geven je zinnen nuance — en ze sturen het werkwoord allemaal naar het einde.",
          introEn: "These conjunctions add nuance, and all of them send the verb to the end.",
          rules: [
            { rule: "hoewel", detail: "tegenstelling — 'although'", en: "although", examples: "Hoewel het regende, gingen we wandelen." },
            { rule: "zodat", detail: "gevolg — 'so that'", en: "so that", examples: "Ik schrijf het op, zodat ik het niet vergeet." },
            { rule: "tenzij", detail: "voorwaarde met uitzondering — 'unless'", en: "unless", examples: "We gaan morgen, tenzij het sneeuwt." },
            { rule: "nadat / voordat", detail: "tijdsvolgorde; let op de tijden", en: "after / before", examples: "Nadat ik gegeten had, ging ik werken." },
            { rule: "terwijl", detail: "gelijktijdigheid — 'while'", en: "while", examples: "Terwijl zij kookte, dekte ik de tafel." }
          ],
          exercises: [
            { id: "l23-d1", sentence: "___ het hard regende, gingen we toch wandelen.", options: ["Hoewel", "Zodat", "Tenzij"], correct: "Hoewel", explanation: "Een tegenstelling druk je uit met 'hoewel'." },
            { id: "l23-d2", sentence: "We vertrekken om acht uur, ___ er staking is.", options: ["zodat", "tenzij", "nadat"], correct: "tenzij", explanation: "'Tenzij' = behalve als." },
            { id: "l23-d3", sentence: "Nadat hij gegeten ___, ging hij naar bed.", options: ["heeft", "had", "was"], correct: "had", explanation: "Bij 'nadat' + verleden gebruik je de voltooid verleden tijd: had gegeten." }
          ]
        },
        {
          id: "erzinnen",
          title: "Het woordje er",
          subtitle: "Vier functies",
          intro: "**Er** is klein maar veelzijdig. Deze vier functies dekken bijna alle gevallen.",
          introEn: "'Er' is small but versatile; these four uses cover nearly everything.",
          rules: [
            { rule: "Onbepaald onderwerp", detail: "er + werkwoord + onbepaald zelfstandig naamwoord", en: "introduces an indefinite subject", examples: "Er staat een man voor de deur." },
            { rule: "Plaats", detail: "verwijst naar een plaats, als 'daar'", en: "refers to a place", examples: "Ik ben er gisteren geweest." },
            { rule: "Met een aantal", detail: "vervangt het zelfstandig naamwoord bij een getal", en: "with quantities", examples: "Hoeveel appels heb je? — Ik heb er drie." },
            { rule: "Met voorzetsel", detail: "er + voorzetsel verwijst naar een ding", en: "combines with a preposition for things", examples: "Ik denk eraan. · Wij praten erover." }
          ],
          exercises: [
            { id: "l23-e1", sentence: "___ staat iemand voor de deur.", options: ["Er", "Het", "Daar er"], correct: "Er", explanation: "Bij een onbepaald onderwerp begin je met 'er'." },
            { id: "l23-e2", sentence: "Hoeveel broers heb je? — Ik heb ___ twee.", options: ["er", "ze", "die"], correct: "er", explanation: "Bij een aantal gebruik je 'er': ik heb er twee." },
            { id: "l23-e3", sentence: "Praten jullie over het project? — Ja, we praten ___.", options: ["erover", "daarover het", "overer"], correct: "erover", explanation: "'over' + verwijzing naar een ding → erover." }
          ]
        }
      ]
    }
  ]
};
