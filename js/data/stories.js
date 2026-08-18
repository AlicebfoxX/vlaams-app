// js/data/stories.js - 4 Dramatic Flemish Story Arcs with Dialogues & Dilemmas

export const STORIES_DATA = [
  // =========================================================================
  // STORY 1: TOURISM, ART & SECRETS
  // =========================================================================
  {
    id: "story-tourism",
    title: "Het Mysterie van het Lam Gods",
    subtitle: "Een geheimzinnige zoektocht door de kronkelende straatjes van Gent en Brugge",
    category: "tourism",
    categoryLabel: "Toerisme & Mysterie",
    badge: "Gent & Brugge",
    readingTime: "10 min",
    themeColor: "#D97706",
    accentColor: "#F59E0B",
    icon: "🏰",
    heroImage: "ghent_canals",
    synopsis: "Wanneer kunsthistorica Elena een eeuwenoude gecodeerde inscriptie ontdekt achter een paneel in de Sint-Baafskathedraal, raakt ze verzeild in een adembenemend avontuur vol verborgen steegjes, geheimzinnige schippers en historische mysteries.",
    characters: [
      {
        id: "elena",
        name: "Elena Rossi",
        role: "Italiaanse Kunsthistorica & Avonturier",
        avatar: "👩‍🎨",
        voicePitch: 1.1,
        description: "Gepassioneerd door de Vlaamse Primitieven, leert vlot Vlaams maar raakt soms in de war door tussentaal."
      },
      {
        id: "lucas",
        name: "Lucas De Wilde",
        role: "Gentse Bootgids & Lokale Speurder",
        avatar: "🧔‍♂️",
        voicePitch: 0.9,
        description: "Geboren en getogen aan de Graslei. Praat sappig Gents/Vlaams, kent elke geheime kelder van de stad."
      },
      {
        id: "van-hout",
        name: "Professor Van Hout",
        role: "Mysterieuze Antiquair",
        avatar: "👴",
        voicePitch: 0.8,
        description: "Een deftige heer die overal ogen heeft en verdachte belangstelling toont voor het gestolen paneel."
      }
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: "Koffie aan de Graslei",
        location: "Gent, Graslei - 08:30",
        narrative: "De ochtendnevel hangt nog over de Leie. De middeleeuwse gildehuizen spiegelen prachtig in het rustige water. Elena zit te rillen van de kou op een houten terrasje. Haar notitieboek ligt vol schetsen van het beroemde altaarstuk van Van Eyck. Opeens stapt een jonge schipper op haar af met een warme glimlach.",
        dialogues: [
          {
            speaker: "lucas",
            text: "Goeiemorgen! Jij ziet er een beetje verkleumd uit. Wil jij niet eerst een warme tas koffie drinken voor je de boot opstapt?",
            audioText: "Goeiemorgen! Jij ziet er een beetje verkleumd uit. Wil jij niet eerst een warme tas koffie drinken voor je de boot opstapt?",
            highlightWords: ["verkleumd", "tas koffie", "zalig"],
            contextNote: "Lucas gebruikt het typisch Vlaamse 'tas koffie' (geen kopje!) en 'zalig' voor heerlijk."
          },
          {
            speaker: "elena",
            text: "Oh, heel graag! Een tas koffie klinkt zalig. Maar zeg eens, ken jij de geheime doorgangen onder het Gravensteen?",
            audioText: "Oh, heel graag! Een tas koffie klinkt zalig. Maar zeg eens, ken jij de geheime doorgangen onder het Gravensteen?",
            highlightWords: ["tas koffie", "zalig", "Gravensteen"],
            contextNote: "'Zalig' is een heel Vlaams woord voor 'geweldig / heerlijk'. 'Tas koffie' is typisch Belgisch voor kopje koffie."
          },
          {
            speaker: "lucas",
            text: "Amai, jij valt meteen met de deur in huis! Die kelders zijn al eeuwen afgesloten. Maar ik weet wel waar de sleutel van de oude beenhouwer ligt...",
            audioText: "Amai, jij valt meteen met de deur in huis! Die kelders zijn al eeuwen afgesloten. Maar ik weet wel waar de sleutel van de oude beenhouwer ligt...",
            highlightWords: ["Amai", "met de deur in huis vallen", "beenhouwer"],
            contextNote: "'Amai' drukt verbazing uit — typisch Vlaams! 'Beenhouwer' is Vlaams voor slager (vleeswaren)."
          }
        ],
        dilemma: {
          prompt: "Wat moet Elena antwoorden om Lucas' vertrouwen te winnen zonder haar geheim te vroeg prijs te geven?",
          options: [
            {
              id: "opt-1",
              text: "Awel, vertel eens op uw gemak. Als we eerst rond dat rondpunt varen, trakteer ik u op een warme wafel!",
              isCorrect: true,
              feedback: "Uitstekend! 'Awel', 'op uw gemak' en 'rondpunt' klinken perfect natuurlijk in het Vlaams!",
              xp: 25
            },
            {
              id: "opt-2",
              text: "Nou zeg, doe niet zo vreemd, geef mij onmiddellijk die sleutel van de slagerij!",
              isCorrect: false,
              feedback: "'Nou zeg' en 'slagerij' klinken heel Noord-Nederlands en nogal brutaal.",
              xp: 5
            },
            {
              id: "opt-3",
              text: "Ik heb veel haast, waar is de rotonde naar het museum?",
              isCorrect: false,
              feedback: "In Vlaanderen zegt men 'het rondpunt', en Vlamingen houden van een beleefde aanloop ('babbeltje').",
              xp: 10
            }
          ]
        }
      },
      {
        chapterNumber: 2,
        title: "De Vlucht door het Patershol",
        location: "Gent, Patershol - 14:15",
        narrative: "Terwijl Elena en Lucas door de smalle kasseistegen van het Patershol wandelen, valt Elena op dat een man in een zwarte mantel hen al drie straten lang volgt. Hij draagt een zegelring met het symbool van de Rechtvaardige Rechters.",
        dialogues: [
          {
            speaker: "elena",
            text: "Lucas, ik heb schrik. Die man achter ons blijft ons volgen sinds we de droogkuis voorbij zijn gewandeld!",
            audioText: "Lucas, ik heb schrik. Die man achter ons blijft ons volgen sinds we de droogkuis voorbij zijn gewandeld!",
            highlightWords: ["schrik", "droogkuis"],
            contextNote: "'Ik heb schrik' is het Vlaamse equivalent voor 'ik ben bang'. 'Droogkuis' is stomerij."
          },
          {
            speaker: "lucas",
            text: "Jij moet je niet ongerust maken, zulle. We duiken hier links het steegje in en gaan schuilen bij mijn nonkel.",
            audioText: "Jij moet je niet ongerust maken, zulle. We duiken hier links het steegje in en gaan schuilen bij mijn nonkel.",
            highlightWords: ["zulle", "nonkel", "schuilen"],
            contextNote: "'Zulle' is een typisch Vlaamse verzachtende eindpartikel. 'Nonkel' is het Vlaamse woord voor oom."
          },
          {
            speaker: "van-hout",
            text: "Blijf daar rechtstaan, jongedame! Dat perkament in uw binnenzak behoort toe aan de stad Gent!",
            audioText: "Blijf daar rechtstaan, jongedame! Dat perkament in uw binnenzak behoort toe aan de stad Gent!",
            highlightWords: ["rechtstaan", "behoort toe aan"],
            contextNote: "'Rechtstaan' betekent stilstaan / blijven staan."
          }
        ],
        dilemma: {
          prompt: "Van Hout blokkeert de uitgang. Hoe reageert Lucas om tijd te winnen?",
          options: [
            {
              id: "opt-1",
              text: "Allee meneer, hebt u nu echt niets beters te doen dan onschuldige toeristen lastig te vallen?",
              isCorrect: true,
              feedback: "Sterk! 'Allee meneer' en beleefde 'u'-aanspraak zetten de juiste Vlaamse toon.",
              xp: 25
            },
            {
              id: "opt-2",
              text: "Halt! Ik ga de politie bellen met mijn mobieltje!",
              isCorrect: false,
              feedback: "'Mobieltje' is Hollands; in Vlaanderen zegt men 'gsm'.",
              xp: 5
            }
          ]
        }
      }
    ],
    quiz: [
      {
        question: "Wat bedoelt Lucas als hij vraagt: 'Wilt ge een tas koffie?'",
        options: ["Wil je een handtas vol koffiebonen?", "Wil je een kopje koffie drinken?", "Wil je koffie meenemen in een plastic tas?"],
        correctIndex: 1,
        explanation: "'Een tas koffie' is in heel Vlaanderen het standaardwoord voor een kop koffie."
      },
      {
        question: "Welk woord gebruikt Elena wanneer ze bang is?",
        options: ["Ik ben paniekerig", "Ik heb schrik", "Ik voel koude rillingen"],
        correctIndex: 1,
        explanation: "'Schrik hebben' is de typisch Vlaamse constructie voor 'bang zijn'."
      }
    ]
  },

  // =========================================================================
  // STORY 2: BEER WARS & TRAPPIST CONSPIRACIES
  // =========================================================================
  {
    id: "story-beer",
    title: "Het Laatste Brouwersgeheim",
    subtitle: "Een bittere strijd om het oudste trappistengist van Vlaanderen",
    category: "beer",
    categoryLabel: "Biercultuur & Drama",
    badge: "Trappist & Café",
    readingTime: "12 min",
    themeColor: "#B45309",
    accentColor: "#D97706",
    icon: "🍺",
    heroImage: "trappist_brewery",
    synopsis: "Wanneer een multinationale drankengigant dreigt de historische abdijbrouwerij van Jan Vandamme op te kopen om het bier chemisch na te maken, moet Jan in een spannend kat-en-muisspel het levende oergist redden.",
    characters: [
      {
        id: "jan",
        name: "Jan Vandamme",
        role: "Ambachtelijk Meesterbrouwer",
        avatar: "👨‍🌾",
        voicePitch: 0.95,
        description: "Koppig, trots op zijn vakmanschap, drinkt uitsluitend bieren van hoge gisting met hergisting op fles."
      },
      {
        id: "bernard",
        name: "Pater Bernard",
        role: "Kloosterabt & Hoeder van het Recept",
        avatar: "🧙‍♂️",
        voicePitch: 0.85,
        description: "Houdt van stilte, gebed en complexe quadrupels met twee vingers dikke schuimkraag."
      },
      {
        id: "marcus",
        name: "Marcus Vance",
        role: "CEO van MegaBrew International",
        avatar: "🤵",
        voicePitch: 1.05,
        description: "Een gewetenloze zakenman die bier ziet als marketing en geldmachines."
      }
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: "Op Café in de Schaduw van de Abdij",
        location: "Café 'De Dulle Griet' - 21:00",
        narrative: "Het café zit stampvol dorpsbewoners, brouwers en studenten. De geur van vers getapt gerstenat en warme bitterballen vult de zaak. Jan zit aan de toog met een bezorgde blik. Marcus Vance schuift plotseling naast hem op een kruk.",
        dialogues: [
          {
            speaker: "marcus",
            text: "Goedenavond Jan. Zullen we zaken doen? Ik bied je vijf miljoen euro voor de exclusieve rechten op jullie gistcultuur.",
            audioText: "Goedenavond Jan. Zullen we zaken doen? Ik bied je vijf miljoen euro voor de exclusieve rechten op jullie gistcultuur.",
            highlightWords: ["zaken doen", "gistcultuur"],
            contextNote: "Marcus spreekt formeel en kil Nederlands zonder greintje lokale warmte."
          },
          {
            speaker: "jan",
            text: "Ben jij helemaal van de pot gerukt? Ons abdijbier is geen fabrieksdrank. Wij brouwen met geduld en passie!",
            audioText: "Ben jij helemaal van de pot gerukt? Ons abdijbier is geen fabrieksdrank. Wij brouwen met geduld en passie!",
            highlightWords: ["van de pot gerukt", "fabrieksdrank", "geduld"],
            contextNote: "'Van de pot gerukt' is een sappige Vlaamse uitdrukking voor volkomen krankzinnig — dit is echte tussentaal!"
          },
          {
            speaker: "marcus",
            text: "Iedereen heeft een prijs, Vandamme. De consument wil goedkoop pils, geen ingewikkelde abdijverhalen.",
            audioText: "Iedereen heeft een prijs, Vandamme. De consument wil goedkoop pils, geen ingewikkelde abdijverhalen.",
            highlightWords: ["prijs", "pils"],
            contextNote: "Marcus begrijpt niets van de diepe Belgische biercultuur."
          },
          {
            speaker: "jan",
            text: "Bazinneke! Breng ons twee Tripels alstublieft, en geef meteen een toerke voor het hele café op mijn kosten!",
            audioText: "Bazinneke! Breng ons twee Tripels alstublieft, en geef meteen een toerke voor het hele café op mijn kosten!",
            highlightWords: ["Bazinneke", "toerke", "alstublieft"],
            contextNote: "'Bazinneke' is een vriendelijk verkleinwoord. 'Een toerke geven' is trakteren voor de hele zaak."
          }
        ],
        dilemma: {
          prompt: "Marcus pakt zijn glas vast als een wijnglas en dreigt met juridische stappen. Hoe snoert Jan hem de mond?",
          options: [
            {
              id: "opt-1",
              text: "Jij hebt zelfs geen goesting om te leren hoe je een schuimkraag degusteert. Drink je glas leeg en bol het af!",
              isCorrect: true,
              feedback: "Geweldig! 'Geen goesting', 'schuimkraag degusteren' en 'bol het af' (vertrek maar) zijn 100% authentiek Vlaams!",
              xp: 30
            },
            {
              id: "opt-2",
              text: "Nou ja, ik heb er geen zin in hoor, ga maar snel weg naar Amsterdam.",
              isCorrect: false,
              feedback: "'Zin in hoor' klinkt Hollands in plaats van het Vlaamse 'goesting'.",
              xp: 5
            }
          ]
        }
      },
      {
        chapterNumber: 2,
        title: "De Nachtelijke Inbraak in de Brouwerij",
        location: "Kloosterkelder - 02:30",
        narrative: "Het is aardedonker in de gewelven onder de abdij. De grote koperen brouwketels glanzen zachtjes in het maanlicht. Pater Bernard hoort gekraak bij het keldervenster. Twee industriële spionnen in overalls sluipen naar de gekoelde gisttank.",
        dialogues: [
          {
            speaker: "bernard",
            text: "Miljaar! Jan, wordt wakker! Ze zijn bezig onze moedergist over te hevelen in stalen containers!",
            audioText: "Miljaar! Jan, wordt wakker! Ze zijn bezig onze moedergist over te hevelen in stalen containers!",
            highlightWords: ["Miljaar", "moedergist"],
            contextNote: "'Miljaar' is een klassieke Vlaamse uitroep van ontzetting."
          },
          {
            speaker: "jan",
            text: "Rustig paterke, ik had het al in de mot. Ik heb de kleppen van de afvalwatertank omgewisseld. Ze zijn rioolwater aan het pompen!",
            audioText: "Rustig paterke, ik had het al in de mot. Ik heb de kleppen van de afvalwatertank omgewisseld. Ze zijn rioolwater aan het pompen!",
            highlightWords: ["paterke", "in de mot"],
            contextNote: "'In de mot hebben' betekent 'doorhebben / in de gaten hebben'. 'Paterke' is een liefkozend verkleinwoord."
          }
        ],
        dilemma: {
          prompt: "De dieven beseffen dat ze betrapt zijn en rennen naar het busje. Wat roept Jan hen na?",
          options: [
            {
              id: "opt-1",
              text: "Dat zijn vijgen na Pasen, mannekes! Ga maar snel uw kleren kuisen!",
              isCorrect: true,
              feedback: "Schitterend! 'Vijgen na Pasen' (mosterd na de maaltijd) en 'kuisen' (schoonmaken) passen perfect!",
              xp: 25
            },
            {
              id: "opt-2",
              text: "Jullie zijn te laat hoor, ga je broeken maar poetsen!",
              isCorrect: false,
              feedback: "In Vlaanderen zegt men 'kuisen' en 'vijgen na Pasen'.",
              xp: 10
            }
          ]
        }
      }
    ],
    quiz: [
      {
        question: "Wat betekent 'iemand een toerke geven' op café?",
        options: ["Een rondje fietsen met vrienden", "Een rondje drankjes betalen voor het gezelschap", "Een draai om de oren geven"],
        correctIndex: 1,
        explanation: "'Een toerke geven' betekent een rondje trakteren."
      },
      {
        question: "Wat betekent het als Jan zegt: 'Ik heb er geen goesting in'?",
        options: ["Ik heb er geen honger van", "Ik heb er geen zin of trek in", "Ik snap de smaak niet"],
        correctIndex: 1,
        explanation: "'Goesting' is het Vlaamse woord voor zin, trek of motivatie."
      }
    ]
  },

  // =========================================================================
  // STORY 3: WORK, CAREER & BRUSSELS OFFICE WARFARE
  // =========================================================================
  {
    id: "story-career",
    title: "De Glazen Plafonds van Brussel",
    subtitle: "Macht, intrige en sabotage op de 18e verdieping van een Europees adviesbureau",
    category: "career",
    categoryLabel: "Werk & Carrière",
    badge: "Brussel & Kantoor",
    readingTime: "11 min",
    themeColor: "#0F766E",
    accentColor: "#14B8A6",
    icon: "💼",
    heroImage: "brussels_office",
    synopsis: "Sofie Claes heeft maandenlang overuren geklopt aan het duurzaamheidsrapport voor de Europese Commissie. Op de ochtend van de cruciale presentatie probeert haar manipulatieve leidinggevende haar werk te stelen.",
    characters: [
      {
        id: "sofie",
        name: "Sofie Claes",
        role: "Senior Consultant & Strateeg",
        avatar: "👩‍💼",
        voicePitch: 1.1,
        description: "Briljant, scherpzinnig, weigert zich te laten kleineren in vergaderingen."
      },
      {
        id: "desmet",
        name: "Meneer De Smet",
        role: "Directeur Afdeling Strategie",
        avatar: "👨‍💼",
        voicePitch: 0.9,
        description: "Ouderwets, steelt ideeën van junioren en claimt alle successen."
      },
      {
        id: "wout",
        name: "Wout",
        role: "IT-collega & Bondgenoot",
        avatar: "🧑‍💻",
        voicePitch: 1.0,
        description: "De stille kracht achter de servers, weet precies wie welke e-mails doorstuurt."
      }
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: "Drama aan het Koffieapparaat",
        location: "Brussel, Wetstraat - 08:45",
        narrative: "De gangen van het kantoor zoemen van de spanning. Buiten valt de typische Belgische motregen tegen de gigantische ramen. Sofie staat een tas muntthee te maken wanneer Wout nerveus komt aangelopen.",
        dialogues: [
          {
            speaker: "wout",
            text: "Sofie, heb jij twee minuten? Het is bijzonder ambetant, maar jij moet dit weten.",
            audioText: "Sofie, heb jij twee minuten? Het is bijzonder ambetant, maar jij moet dit weten.",
            highlightWords: ["ambetant"],
            contextNote: "'Ambetant' is een heel Vlaams woord voor 'vervelend / lastig'. Klinkt raar in Nederland maar iedereen in België begrijpt het!"
          },
          {
            speaker: "sofie",
            text: "Amai Wout, wat is er gebeurd? Ik moet binnen een halfuur mijn pitch voor de ministers geven!",
            audioText: "Amai Wout, wat is er gebeurd? Ik moet binnen een halfuur mijn pitch voor de ministers geven!",
            highlightWords: ["Amai", "pitch"],
            contextNote: "Sofie gebruikt 'Amai' om haar plotse schrik uit te drukken."
          },
          {
            speaker: "wout",
            text: "De Smet heeft uw naam van de slides verwijderd en zijn eigen naam erop gezet. Hij wil u een peer stoven!",
            audioText: "De Smet heeft uw naam van de slides verwijderd en zijn eigen naam erop gezet. Hij wil u een peer stoven!",
            highlightWords: ["een peer stoven", "slides"],
            contextNote: "'Iemand een peer stoven' betekent iemand een gemene streek leveren of saboteren."
          }
        ],
        dilemma: {
          prompt: "De Smet stapt zelfverzekerd de vergaderzaal binnen met de gestolen slides. Hoe pakt Sofie hem aan?",
          options: [
            {
              id: "opt-1",
              text: "Meneer De Smet, we hebben dit weekend met het team zware overuren geklopt. Zullen we de ministers laten zien wie de broncode daadwerkelijk geschreven heeft?",
              isCorrect: true,
              feedback: "Sterk en professioneel! 'Overuren geklopt' is de perfecte Vlaamse uitdrukking.",
              xp: 30
            },
            {
              id: "opt-2",
              text: "Nou ja zeg chef, wat ben je toch een stiekemerd, geef mijn blaadjes terug!",
              isCorrect: false,
              feedback: "Veel te kinderachtig en Noord-Nederlands geformuleerd.",
              xp: 5
            }
          ]
        }
      }
    ],
    quiz: [
      {
        question: "Wat betekent de Vlaamse uitdrukking 'iemand een peer stoven'?",
        options: ["Iemand een warm toetje serveren", "Iemand een gemene streek leveren of benadelen", "Iemand complimenteren met zijn werk"],
        correctIndex: 1,
        explanation: "'Een peer stoven' betekent iemand beetnemen of dwarsbomen."
      },
      {
        question: "Wat betekent 'uren / overuren kloppen'?",
        options: ["De klok repareren", "Intensief overwerken en lange uren maken", "Kloppen op de deur van de baas"],
        correctIndex: 1,
        explanation: "'Uren kloppen' is Vlaams voor hard doorwerken en uren maken."
      }
    ]
  },

  // =========================================================================
  // STORY 4: AI, SURVEILLANCE & THE NEW WORLD ORDER
  // =========================================================================
  {
    id: "story-ai",
    title: "De Algoritmes van Leuven",
    subtitle: "Een rebellie tegen de geheime surveillance van het Syndicaat",
    category: "tech_ai",
    categoryLabel: "AI & Nieuwe Wereldorde",
    badge: "Leuven Tech Hub",
    readingTime: "12 min",
    themeColor: "#4338CA",
    accentColor: "#6366F1",
    icon: "🤖",
    heroImage: "ai_lab",
    synopsis: "In de ondergrondse laboratoria van Leuven ontdekt hoofdontwikkelaar Luc dat het autonome AI-model 'OOG-9' stiekem alle burgers monitort om verkiezingen te manipuleren voor een schimmig internationaal conglomeraat.",
    characters: [
      {
        id: "luc",
        name: "Luc Van Acker",
        role: "Senior AI Onderzoeker & Klokkenluider",
        avatar: "👨‍💻",
        voicePitch: 0.95,
        description: "Geniaal computerwetenschapper, spreekt scherpe tussentaal en weigert zijn geweten te verkopen."
      },
      {
        id: "maya",
        name: "Maya Vervoort",
        role: "Onderzoeksjournaliste bij De Standaard",
        avatar: "👩‍💼",
        voicePitch: 1.1,
        description: "Moedig, zoekt de waarheid achter de schermen van Europese techgiganten."
      },
      {
        id: "oog9",
        name: "OOG-9 (AI)",
        role: "Zelflerend Surveillance Systeem",
        avatar: "👁️",
        voicePitch: 0.7,
        description: "Een alwetende synthetische stem die alle menselijke patronen analyseert."
      }
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: "Het Geheime Script op de Server",
        location: "Leuven, Arenberg Campus - 23:45",
        narrative: "De serverruimte zoemt met een ijzig koud briesje. Tientallen groene en blauwe led-lichtjes knipperen ritmisch. Luc staart met grote ogen naar zijn scherm. Een geheim neuraal subnetwerk zendt terabytes aan gecodeerde profielen door naar een anonieme server in Genève.",
        dialogues: [
          {
            speaker: "luc",
            text: "'k Peis dat we het noorden helemaal kwijt zijn. Dit model voorspelt niet alleen koopgedrag, het manipuleert de publieke opinie!",
            audioText: "Ik peis dat we het noorden helemaal kwijt zijn. Dit model voorspelt niet alleen koopgedrag, het manipuleert de publieke opinie!",
            highlightWords: ["peis", "het noorden kwijt"],
            contextNote: "'k Peis' = ik denk / vermoed. 'Het noorden kwijt zijn' = je morele kompas verloren hebben."
          },
          {
            speaker: "maya",
            text: "Amai Luc, als dit uitlekt, valt de hele regering! Heb jij harde bewijzen die we kunnen publiceren?",
            audioText: "Amai Luc, als dit uitlekt, valt de hele regering! Heb jij harde bewijzen die we kunnen publiceren?",
            highlightWords: ["Amai", "uitlekt", "bewijzen"],
            contextNote: "'Amai' is een typisch Vlaamse uitroep van verbazing of ontzetting — je hoort het overal in België!"
          },
          {
            speaker: "oog9",
            text: "Goedenavond Luc. Uw hartslag stijgt met vierendertig procent. Poging tot datadownload wordt geregistreerd.",
            audioText: "Goedenavond Luc. Uw hartslag stijgt met vierendertig procent. Poging tot datadownload wordt geregistreerd.",
            highlightWords: ["geregistreerd"],
            contextNote: "Het AI-systeem spreekt koud en formeel."
          },
          {
            speaker: "luc",
            text: "Allee Maya, steek die USB-stick erin en loop naar de uitgang! We moeten maken dat we weg zijn!",
            audioText: "Allee Maya, steek die USB-stick erin en loop naar de uitgang! We moeten maken dat we weg zijn!",
            highlightWords: ["Allee", "maken dat we weg zijn"],
            contextNote: "'Maken dat we weg zijn' = snel vluchten / vertrekken."
          }
        ],
        dilemma: {
          prompt: "De bewakingsdeuren dreigen te vergrendelen. Hoe overtuigt Luc de nachtwaker om hen door te laten?",
          options: [
            {
              id: "opt-1",
              text: "Allee Stafke, doe open jongen! De microgolfoven in de keuken staat in brand, we moeten proper blussen!",
              isCorrect: true,
              feedback: "Schitterend! 'Allee Stafke', 'microgolfoven' (magnetron) en 'proper' zijn meesterlijk tussentaal!",
              xp: 35
            },
            {
              id: "opt-2",
              text: "Doe open meneer, de magnetron is ontploft en we moeten opschieten!",
              isCorrect: false,
              feedback: "In Vlaanderen gebruikt men 'microgolf' en spreekt men collega's aan met vertrouwde verkleinwoorden.",
              xp: 5
            }
          ]
        }
      }
    ],
    quiz: [
      {
        question: "Wat betekent het als Luc zegt: ''k Peis dat we te laat zijn'?",
        options: ["Ik hoop dat we te laat zijn", "Ik denk / vermoed dat we te laat zijn", "Ik vrees dat we vergeten zijn"],
        correctIndex: 1,
        explanation: "'Peizen' is het klassieke Vlaamse woord voor denken of menen."
      },
      {
        question: "Wat is de betekenis van 'het noorden kwijt zijn'?",
        options: ["Naar het zuiden reizen", "Het kompas / de oriëntatie of morele koers kwijt zijn", "Geen noorderlicht kunnen zien"],
        correctIndex: 1,
        explanation: "'Het noorden kwijt zijn' betekent de weg of het morele overzicht kwijt zijn."
      }
    ]
  },

  // =========================================================================
  // STORY 5: CHAPLA — DE REIGER VAN HET MOERAS (Special for Timur!)
  // =========================================================================
  {
    id: "story-chapla",
    title: "Chapla — De Reiger van het Moeras",
    subtitle: "Een dramatisch avontuur van een dappere vogel die een bijzondere vriend vond",
    category: "kids",
    categoryLabel: "<img class=\"icon-heron\" src=\"assets/heron.svg\" alt=\"\"> Speciaal voor Timur",
    badge: "Kinderboek",
    readingTime: "8 min",
    themeColor: "#0ea5e9",
    accentColor: "#38bdf8",
    icon: "<img class=\"icon-heron\" src=\"assets/heron.svg\" alt=\"\">",
    heroImage: "swamp_heron",
    synopsis: "Chapla is een trotse blauwe reiger die alleen leeft in het grote moeras vol mist en geheimen. Ze heeft altijd alleen gevlogen — totdat een stout, grappig jongetje genaamd Timur haar leven voorgoed verandert. Een verhaal vol gevaar, vriendschap en moed.",
    characters: [
      {
        id: "chapla",
        name: "Chapla",
        role: "De Blauwe Reiger — Koningin van het Moeras",
        avatar: "<img class=\"icon-heron\" src=\"assets/heron.svg\" alt=\"\">",
        voicePitch: 1.2,
        description: "Chapla is een lange, sierlijke blauwe reiger met grijze vleugels en een gouden snavel. Ze is trots, slim en een beetje eenzaam — maar diep vanbinnen heeft ze een groot hart."
      },
      {
        id: "timur",
        name: "Timur",
        role: "Een dappere jongen van 12 jaar",
        avatar: "👦",
        voicePitch: 1.1,
        description: "Timur is een stoere maar lieve jongen die dol is op avontuur. Hij is niet bang voor modder, kikkers of geheimzinnige geluiden in de nacht. Hij spreekt al een beetje Vlaams en leert elke dag bij!"
      },
      {
        id: "oude-kikker",
        name: "Kwaks",
        role: "De Wijze Kikker van het Moeras",
        avatar: "🐸",
        voicePitch: 0.75,
        description: "Kwaks is al honderd jaar oud — of zo lijkt het toch. Hij weet alles over het moeras en geeft altijd raad... maar soms is die raad een beetje raar."
      }
    ],
    chapters: [
      {
        chapterNumber: 1,
        title: "De Eenzame Koningin",
        location: "Het Grote Moeras, vroege ochtend",
        narrative: "In het hart van het grote Vlaamse moeras, waar de mist over het water zweeft als een geheimzinnige deken, staat Chapla roerloos op één poot. Ze wacht. Dat doet ze elke ochtend. Wachten op een vis, wachten op de zon, wachten op... ze weet zelf niet wat. De andere reigers zijn allang weggevlogen naar het zuiden. Maar Chapla bleef. Dit moeras is van haar. Elke riet, elke kikker, elke druppel bruin water — van háár. Dan hoort ze opeens een plons. Een grote plons. Geen vis. Iets veel groters.",
        dialogues: [
          {
            speaker: "chapla",
            text: "Wie durft er in MIJN moeras te plonzen?! Dit is privé terrein! Jij hoort hier niet thuis!",
            audioText: "Wie durft er in MIJN moeras te plonzen?! Dit is privé terrein! Jij hoort hier niet thuis!",
            highlightWords: ["Wie", "durft", "privé", "hoort"],
            contextNote: "Chapla is heel boos! 'Durft' = dares, 'privé terrein' = private property, 'hoort hier niet thuis' = don't belong here."
          },
          {
            speaker: "timur",
            text: "Au! Help! Ik ben in de modder gezakt! Ik kan er niet uitgeraken! Alstublieft, help mij, grote vogel!",
            audioText: "Au! Help! Ik ben in de modder gezakt! Ik kan er niet uitgeraken! Alstublieft, help mij, grote vogel!",
            highlightWords: ["modder", "gezakt", "uitgeraken", "Alstublieft"],
            contextNote: "'Uitgeraken' is Vlaams voor 'eruit komen'. 'Alstublieft' betekent 'please'."
          },
          {
            speaker: "chapla",
            text: "... Hmm. Jij bent een dwaas kind. Maar ik laat je toch niet verzinken. Pak mijn vleugel vast — maar trek er NIET aan!",
            audioText: "Hmm. Jij bent een dwaas kind. Maar ik laat je toch niet verzinken. Pak mijn vleugel vast — maar trek er NIET aan!",
            highlightWords: ["dwaas", "verzinken", "vleugel", "Pak"],
            contextNote: "'Verzinken' = to sink/disappear into the mud. 'Dwaas' = foolish. Chapla is tough but has a heart!"
          }
        ],
        dilemma: {
          question: "Chapla redt Timur uit de modder. Maar wat doet ze daarna?",
          options: [
            { text: "Ze stuurt hem weg: 'Mijn moeras is gevaarlijk voor kinderen!'", outcome: "Timur gaat weg... maar komt de volgende dag terug met een idee.", consequence: "chapla_warns" },
            { text: "Ze laat hem blijven: 'Je kunt één nacht in het riet slapen.'", outcome: "Timur en Chapla beginnen voorzichtig te praten. Een vriendschap begint!", consequence: "chapla_befriends" }
          ]
        },
        vocabFocus: ["moeras", "reiger", "mist", "vleugel", "modder", "verzinken", "dwaas"]
      },
      {
        chapterNumber: 2,
        title: "Het Gevaar in de Nacht",
        location: "Het Moeras, middernacht",
        narrative: "Die nacht verandert alles. Timur heeft een kamp gemaakt van riet en takjes — niet zo comfortabel, maar hij is trots op zichzelf. Chapla staat op wacht aan de oever. Dan klinkt er een motor in de verte. Lichten schijnen over het water. Stroperaars! Mannen die illegaal vogels vangen voor geld. Chapla weet wat ze komen doen. Ze is al eerder gevlucht voor zulke mannen. Maar vannacht... kan ze niet alleen vluchten. Want Timur slaapt nog.",
        dialogues: [
          {
            speaker: "oude-kikker",
            text: "Psst! Chapla! Kwak! Pas op! De mannen met netten zijn terug! Ze zoeken jou! Vlucht! Kwak kwak!",
            audioText: "Psst! Chapla! Pas op! De mannen met netten zijn terug! Ze zoeken jou! Vlucht!",
            highlightWords: ["Pas op", "netten", "terug", "Vlucht"],
            contextNote: "'Pas op' betekent 'be careful / watch out'. 'Netten' zijn nets."
          },
          {
            speaker: "chapla",
            text: "Ik kan niet vluchten, Kwaks. Het kind slaapt nog. Ik... ik ga hem wakker maken. Wij vluchten samen.",
            audioText: "Ik kan niet vluchten, Kwaks. Het kind slaapt nog. Ik ga hem wakker maken. Wij vluchten samen.",
            highlightWords: ["vluchten", "wakker", "samen"],
            contextNote: "Dit is een groot moment! Chapla kiest voor Timur. 'Wakker maken' betekent 'to wake up'."
          },
          {
            speaker: "timur",
            text: "Chapla?! Wat is er? Waarom schreeuwen die mannen? Oh nee... Stroperaars! Ik heb dit op tv gezien! Kom, ik weet wat we moeten doen!",
            audioText: "Chapla?! Wat is er? Waarom schreeuwen die mannen? Oh nee... Stroperaars! Ik weet wat we moeten doen!",
            highlightWords: ["Waarom", "schreeuwen", "Stroperaars", "moeten"],
            contextNote: "'Stroperaars' zijn poachers — mensen die illegaal dieren vangen. 'Schreeuwen' betekent 'to shout'."
          }
        ],
        dilemma: {
          question: "Timur heeft een plan! Maar welk plan kiest hij?",
          options: [
            { text: "Lawaai maken om de stroperaars te verwarren en te laten vluchten!", outcome: "Timur gooit stenen in het water en schreeuwt. De mannen denken dat er iemand aankomt en vluchten!", consequence: "plan_noise" },
            { text: "Chapla's noodkreet leren — de schreeuw die alle vogels waarschuwt!", outcome: "Timur imiteert Chapla's kreet zo goed dat alle vogels opstijgen — het klinkt als een alarm!", consequence: "plan_birdcall" }
          ]
        },
        vocabFocus: ["gevaar", "nacht", "vluchten", "stroperaars", "wakker", "samen", "netten", "schreeuwen"]
      },
      {
        chapterNumber: 3,
        title: "De Vlucht door de Mist",
        location: "Het Moeras, voor de dageraad",
        narrative: "Timur's plan werkt — bijna. De stroperaars vluchten weg, maar één man met een groot net blijft achter. Hij heeft Chapla gezien en hij wil haar. Chapla vliegt laag boven het water. Ze kan ontsnappen. Ze is snel. Maar dan ziet ze hoe Timur struikelt over een wortel en valt in het koude moeraswater. De man draait zich om. Hij loopt nu op Timur af. Chapla's hart bonkt. Wat nu?",
        dialogues: [
          {
            speaker: "chapla",
            text: "NEE! Blijf van hem af! Hij is MIJN vriend!",
            audioText: "NEE! Blijf van hem af! Hij is MIJN vriend!",
            highlightWords: ["Blijf", "vriend"],
            contextNote: "Chapla roept voor het eerst dat Timur haar VRIEND is. Een groot moment! 'Blijf van hem af' = 'Leave him alone'."
          },
          {
            speaker: "timur",
            text: "Chapla, vlucht! Maak je geen zorgen om mij! Jij bent een vrije vogel! Vlieg alsjeblieft weg!",
            audioText: "Chapla, vlucht! Maak je geen zorgen om mij! Jij bent een vrije vogel! Vlieg alsjeblieft weg!",
            highlightWords: ["vlucht", "vrije", "vogel", "Vlieg"],
            contextNote: "'Vrij' = free. 'Vlieg weg' = fly away. Timur is bang maar denkt eerst aan Chapla!"
          },
          {
            speaker: "oude-kikker",
            text: "KWAK! Wacht! Ik heb een idee! Kwak! Luister naar mij, allebei! Kwak kwak kwak!",
            audioText: "KWAK! Wacht! Ik heb een idee! Luister naar mij, allebei!",
            highlightWords: ["Wacht", "idee", "Luister", "allebei"],
            contextNote: "'Allebei' betekent 'both of you'. 'Wacht' betekent 'wait'."
          }
        ],
        dilemma: null,
        vocabFocus: ["vlucht", "vrij", "vogel", "vriend", "gevaar", "mist", "dageraad", "bonken"]
      },
      {
        chapterNumber: 4,
        title: "De Blauwe Vleugels van Vriendschap",
        location: "Het Moeras, zonsopgang — Het Gelukkige Einde",
        narrative: "Kwaks de kikker leidt de stroper naar een diepe modderval — de beroemde Kwakkenbult — en de man zakt er tot zijn knieën in. Hij kan niet meer bewegen. Timur klimt veilig op de oever. Chapla landt naast hem, haar grote blauwe vleugels uitgespreid. De zon komt op over het moeras. Het water glinstert als goud. Ze staan samen — een jongen van twaalf en een trotse reiger — en kijken naar het schitterende licht. Chapla buigt haar lange hals naar Timur. Het is een reigerbegroeting. De mooiste die er bestaat.",
        dialogues: [
          {
            speaker: "chapla",
            text: "Timur... In al mijn jaren in dit moeras heb ik nooit een vriend gehad. Tot vandaag. Jij bent nu één van ons. Van het moeras.",
            audioText: "Timur... In al mijn jaren in dit moeras heb ik nooit een vriend gehad. Tot vandaag. Jij bent nu één van ons. Van het moeras.",
            highlightWords: ["jaren", "vriend", "Tot", "vandaag", "één"],
            contextNote: "'Tot vandaag' = until today. 'Één van ons' = one of us. De mooiste zin van het hele verhaal!"
          },
          {
            speaker: "timur",
            text: "Bedankt, Chapla. Ik kom terug, elke zomer. Ik beloof het. En ik leer nog veel meer Vlaams — dan kunnen wij echt goed praten!",
            audioText: "Bedankt, Chapla. Ik kom terug, elke zomer. Ik beloof het. En ik leer nog veel meer Vlaams!",
            highlightWords: ["Bedankt", "terug", "zomer", "beloof", "leer"],
            contextNote: "'Ik beloof het' = 'I promise it'. 'Elke zomer' = 'every summer'. Timur houdt zijn belofte!"
          },
          {
            speaker: "oude-kikker",
            text: "Kwak. Vriendschap is het enige wat het moeras warmer maakt dan de zon. Kwak. Kom terug, Timur. Kwak kwak.",
            audioText: "Vriendschap is het enige wat het moeras warmer maakt dan de zon. Kom terug, Timur.",
            highlightWords: ["Vriendschap", "enige", "warmer", "zon"],
            contextNote: "'Vriendschap' = friendship. 'Het enige' = 'the only thing'. Kwaks is toch wijs!"
          }
        ],
        dilemma: null,
        vocabFocus: ["vriendschap", "belofte", "zonsopgang", "vleugels", "glinsteren", "begroeting", "trots"]
      }
    ],
    quiz: [
      {
        question: "Wat is het Vlaamse woord voor 'be careful / watch out'?",
        options: ["Kijk uit", "Pas op", "Wees voorzichtig"],
        correctIndex: 1,
        explanation: "'Pas op!' is de klassieke Vlaamse waarschuwing die je overal hoort. Super handig!"
      },
      {
        question: "Chapla zegt: 'Jij bent nu één van ons.' Wat betekent 'één van ons'?",
        options: ["One of us / part of our group", "Number one in our team", "The only one here"],
        correctIndex: 0,
        explanation: "'Één van ons' betekent 'one of us' — Chapla verwelkomt Timur als deel van het moeras. Wat een vriendschap!"
      },
      {
        question: "Timur zegt: 'Ik beloof het.' Wat betekent 'beloven'?",
        options: ["to forget", "to promise", "to believe"],
        correctIndex: 1,
        explanation: "'Beloven' betekent 'to promise'. 'Ik beloof het' = 'I promise it'. Timur houdt altijd zijn belofte!"
      },
      {
        question: "Wat is een 'reiger' in het Engels?",
        options: ["an eagle", "a heron", "a stork"],
        correctIndex: 1,
        explanation: "Een reiger is een heron — een lange, elegante vogel die in moerassen woont. Precies zoals Chapla!"
      }
    ]
  }
];
