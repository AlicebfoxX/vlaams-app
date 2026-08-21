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
        quiz: [
          {
            question: "Wat biedt Lucas aan Elena aan nog vóór ze de boot opstapt?",
            options: ["Een warme tas koffie", "Een rondleiding in het Gravensteen", "Een plaats op zijn boot"],
            correctIndex: 0,
            explanation: "Hij ziet dat ze verkleumd is: 'Wil jij niet eerst een warme tas koffie drinken?' In Vlaanderen drink je een tas koffie, geen kopje."
          },
          {
            question: "Elena zegt: 'Een tas koffie klinkt zalig.' Wat betekent 'zalig' hier?",
            options: ["Heilig", "Heerlijk, geweldig", "Warm"],
            correctIndex: 1,
            explanation: "'Zalig' is een heel gewoon Vlaams woord voor heerlijk of geweldig."
          },
          {
            question: "Waar vraagt Elena meteen naar?",
            options: ["De geheime doorgangen onder het Gravensteen", "De weg naar het station", "Het beste restaurant van Gent"],
            correctIndex: 0,
            explanation: "Ze valt met de deur in huis — Lucas reageert verbaasd met 'Amai!'."
          },
          {
            question: "Lucas heeft het over de sleutel van de oude beenhouwer. Wat is een beenhouwer?",
            options: ["Een slager", "Een botenbouwer", "Een dokter"],
            correctIndex: 0,
            explanation: "'Beenhouwer' is het Vlaamse woord voor slager."
          }
        ],
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
        quiz: [
          {
            question: "Elena zegt: 'Ik heb schrik.' Wat bedoelt ze?",
            options: ["Ik ben bang", "Ik heb honger", "Ik ben verbaasd"],
            correctIndex: 0,
            explanation: "'Schrik hebben' is de typisch Vlaamse constructie voor bang zijn."
          },
          {
            question: "Waar wil Lucas met Elena gaan schuilen?",
            options: ["Bij zijn nonkel", "In de droogkuis", "In een kerk"],
            correctIndex: 0,
            explanation: "'Nonkel' is het Vlaamse woord voor oom."
          },
          {
            question: "Waaraan herkent Elena de man die hen volgt?",
            options: ["Aan zijn zegelring met het symbool van de Rechtvaardige Rechters", "Aan zijn zwarte hoed", "Aan zijn stem"],
            correctIndex: 0,
            explanation: "De zegelring verraadt zijn band met het gestolen paneel."
          },
          {
            question: "Van Hout roept: 'Blijf daar rechtstaan!' Wat vraagt hij?",
            options: ["Ga rechtop zitten", "Blijf staan, verroer je niet", "Ga aan de rechterkant staan"],
            correctIndex: 1,
            explanation: "'Rechtstaan' betekent in Vlaanderen gewoon stilstaan of blijven staan."
          }
        ],
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
        quiz: [
          {
            question: "Wat biedt Marcus Vance aan Jan aan?",
            options: ["Vijf miljoen euro voor de rechten op de gistcultuur", "Een nieuwe brouwerij in Amerika", "Een plaats in zijn bestuur"],
            correctIndex: 0,
            explanation: "Marcus wil de exclusieve rechten kopen; voor Jan is bier geen fabrieksdrank."
          },
          {
            question: "Jan antwoordt: 'Ben jij helemaal van de pot gerukt?' Wat betekent dat?",
            options: ["Ben je van de trap gevallen?", "Ben je volkomen gek geworden?", "Heb je te veel gedronken?"],
            correctIndex: 1,
            explanation: "'Van de pot gerukt' is sappige tussentaal voor volstrekt krankzinnig."
          },
          {
            question: "Wat doet Jan wanneer hij 'een toerke geeft'?",
            options: ["Hij fietst een rondje", "Hij trakteert het hele café", "Hij zet de muziek luider"],
            correctIndex: 1,
            explanation: "'Een toerke geven' betekent een rondje betalen voor het gezelschap."
          },
          {
            question: "Hoe spreekt Jan de vrouw achter de toog aan?",
            options: ["Bazinneke", "Madameke", "Tantje"],
            correctIndex: 0,
            explanation: "'Bazinneke' is een vriendelijk verkleinwoord voor de bazin van het café."
          }
        ],
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
        quiz: [
          {
            question: "Wat proberen de indringers te stelen?",
            options: ["De moedergist uit de gekoelde tank", "De koperen brouwketels", "Het geld uit de kassa"],
            correctIndex: 0,
            explanation: "De moedergist is het echte geheim van het abdijbier."
          },
          {
            question: "Pater Bernard roept 'Miljaar!'. Wat drukt hij daarmee uit?",
            options: ["Blijdschap", "Schrik en ontzetting", "Dorst"],
            correctIndex: 1,
            explanation: "'Miljaar' is een klassieke Vlaamse uitroep van ontzetting."
          },
          {
            question: "Jan zegt: 'Ik had het al in de mot.' Wat betekent dat?",
            options: ["Ik had het al doorgehad", "Ik heb het opgeschreven", "Ik had het al opgedronken"],
            correctIndex: 0,
            explanation: "'In de mot hebben' betekent iets in de gaten hebben."
          },
          {
            question: "Hoe heeft Jan de dieven te slim af zijn?",
            options: ["Hij belde de politie", "Hij verwisselde de kleppen, zodat ze rioolwater pompen", "Hij sloot de kelderdeur"],
            correctIndex: 1,
            explanation: "Ze pompen triomfantelijk het afvalwater over in plaats van de kostbare gist."
          }
        ],
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
        quiz: [
          {
            question: "Wout zegt dat het 'bijzonder ambetant' is. Wat betekent 'ambetant'?",
            options: ["Vervelend, lastig", "Ambitieus", "Dringend"],
            correctIndex: 0,
            explanation: "'Ambetant' is een heel gewoon Vlaams woord voor vervelend of lastig."
          },
          {
            question: "Wat heeft De Smet gedaan?",
            options: ["Hij haalde Sofies naam van de slides en zette er zijn eigen naam op", "Hij verzette de vergadering", "Hij nam haar laptop mee"],
            correctIndex: 0,
            explanation: "Hij eigent zich haar werk toe, vlak voor de pitch."
          },
          {
            question: "'Iemand een peer stoven' betekent...",
            options: ["Iemand een dessert aanbieden", "Iemand een gemene streek leveren", "Iemand promotie geven"],
            correctIndex: 1,
            explanation: "Een peer stoven is iemand opzettelijk dwarsbomen of benadelen."
          },
          {
            question: "Hoeveel tijd heeft Sofie nog voor haar pitch?",
            options: ["Een halfuur", "Twee minuten", "Een volledige dag"],
            correctIndex: 0,
            explanation: "Ze moet binnen een halfuur voor de ministers spreken — vandaar haar 'Amai!'."
          }
        ],
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
        quiz: [
          {
            question: "Wat ontdekt Luc op de server?",
            options: ["Een geheim netwerk dat profielen naar Genève stuurt", "Een virus op de campuscomputers", "Een verouderde back-up"],
            correctIndex: 0,
            explanation: "Een neuraal subnetwerk zendt terabytes gecodeerde profielen door."
          },
          {
            question: "Luc zegt: ''k Peis dat we het noorden kwijt zijn.' Wat betekent ''k peis'?",
            options: ["Ik denk, ik vermoed", "Ik hoop", "Ik weet zeker"],
            correctIndex: 0,
            explanation: "'Peizen' is het klassieke Vlaamse woord voor denken of vermoeden."
          },
          {
            question: "Wat betekent 'het noorden kwijt zijn' hier?",
            options: ["De weg naar huis niet vinden", "Je morele kompas verloren hebben", "Het koud krijgen"],
            correctIndex: 1,
            explanation: "Luc bedoelt dat het project alle ethische grenzen overschrijdt."
          },
          {
            question: "Luc roept: 'We moeten maken dat we weg zijn!' Wat bedoelt hij?",
            options: ["We moeten snel vertrekken", "We moeten eerst opruimen", "We moeten de deur repareren"],
            correctIndex: 0,
            explanation: "'Maken dat je weg bent' betekent zo snel mogelijk vluchten."
          }
        ],
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
        quiz: [
          {
            question: "Waarom is Chapla eerst boos op Timur?",
            options: ["Hij plonst zomaar in háár moeras", "Hij heeft haar vis opgegeten", "Hij maakt te veel lawaai met muziek"],
            correctIndex: 0,
            explanation: "Het moeras is van haar: 'Wie durft er in MIJN moeras te plonzen?!'"
          },
          {
            question: "Timur roept: 'Ik kan er niet uitgeraken!' Wat betekent 'uitgeraken'?",
            options: ["Eruit komen", "Uitrusten", "Uitkleden"],
            correctIndex: 0,
            explanation: "'Uitgeraken' is Vlaams voor ergens uit komen. Timur zit vast in de modder."
          },
          {
            question: "Wat doet Chapla uiteindelijk?",
            options: ["Ze vliegt weg", "Ze laat hem haar vleugel vastpakken", "Ze roept de kikker om hulp"],
            correctIndex: 1,
            explanation: "Ze is streng, maar ze laat hem niet verzinken — 'maar trek er NIET aan!'"
          },
          {
            question: "Chapla noemt Timur 'een dwaas kind'. Wat betekent 'dwaas'?",
            options: ["Dapper", "Dom, onnozel", "Vriendelijk"],
            correctIndex: 1,
            explanation: "'Dwaas' betekent dom of onnozel."
          }
        ],
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
        quiz: [
          {
            question: "Wie waarschuwt Chapla voor het gevaar in de nacht?",
            options: ["Kwaks de kikker", "Timur", "Een andere reiger"],
            correctIndex: 0,
            explanation: "'Psst! Chapla! Kwak! Pas op!' — Kwaks hoort de mannen het eerst."
          },
          {
            question: "Kwaks roept 'Pas op!'. Wat betekent dat?",
            options: ["Kijk uit, wees voorzichtig", "Ga opzij", "Ga slapen"],
            correctIndex: 0,
            explanation: "'Pas op!' is dé Vlaamse waarschuwing."
          },
          {
            question: "Wat zijn stroperaars?",
            options: ["Mannen die illegaal dieren vangen", "Vissers met een vergunning", "Boswachters"],
            correctIndex: 0,
            explanation: "Ze vangen vogels met netten om ze te verkopen."
          },
          {
            question: "Waarom vlucht Chapla niet meteen alleen?",
            options: ["Ze is gewond", "Timur slaapt nog en ze laat hem niet achter", "Ze kan niet vliegen in het donker"],
            correctIndex: 1,
            explanation: "Dit is het grote moment van het hoofdstuk: ze kiest voor Timur."
          }
        ],
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
        quiz: [
          {
            question: "Wat gebeurt er met Timur tijdens de vlucht?",
            options: ["Hij struikelt over een wortel en valt in het water", "Hij klimt in een boom", "Hij verstopt zich in het riet"],
            correctIndex: 0,
            explanation: "Daardoor draait de man met het net zich naar hem toe."
          },
          {
            question: "Chapla roept: 'Blijf van hem af! Hij is MIJN vriend!' Waarom is dat bijzonder?",
            options: ["Ze noemt Timur voor het eerst haar vriend", "Ze praat voor het eerst", "Ze roept om hulp"],
            correctIndex: 0,
            explanation: "De trotse, eenzame reiger geeft eindelijk toe dat ze om hem geeft."
          },
          {
            question: "Timur zegt: 'Maak je geen zorgen om mij!' Wat wil hij dat Chapla doet?",
            options: ["Wegvliegen en zichzelf redden", "Hem dragen", "De stroper aanvallen"],
            correctIndex: 0,
            explanation: "Hij is bang, maar denkt eerst aan haar vrijheid: 'Jij bent een vrije vogel!'"
          },
          {
            question: "Kwaks roept: 'Luister naar mij, allebei!' Wat betekent 'allebei'?",
            options: ["Jullie twee samen", "Nog een keer", "Alleen jij"],
            correctIndex: 0,
            explanation: "'Allebei' betekent beiden, jullie twee."
          }
        ],
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
        quiz: [
          {
            question: "Hoe wordt de stroper uiteindelijk tegengehouden?",
            options: ["Kwaks lokt hem naar de modderval, de Kwakkenbult", "De politie komt aan", "Timur duwt hem in het water"],
            correctIndex: 0,
            explanation: "De wijze kikker kent het moeras beter dan wie ook."
          },
          {
            question: "Chapla zegt tegen Timur: 'Jij bent nu één van ons.' Wat betekent dat?",
            options: ["Je hoort er nu bij, je bent van het moeras", "Je bent de eerste", "Je bent nu alleen"],
            correctIndex: 0,
            explanation: "Het is haar mooiste zin: Timur is opgenomen in haar wereld."
          },
          {
            question: "Wat belooft Timur?",
            options: ["Elke zomer terug te komen", "Een huis te bouwen in het moeras", "Nooit meer te zwemmen"],
            correctIndex: 0,
            explanation: "'Ik kom terug, elke zomer. Ik beloof het.'"
          },
          {
            question: "Hoe begroet Chapla Timur op het einde?",
            options: ["Ze buigt haar lange hals — een reigerbegroeting", "Ze geeft hem een blauwe veer", "Ze roept heel luid"],
            correctIndex: 0,
            explanation: "De mooiste begroeting die er bestaat, volgens het verhaal."
          }
        ],
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
  },

  // =========================================================================
  // STORY 6: STERRENVAL — DE IJZEREN VRIEND VAN HET MOERAS
  // =========================================================================
{
    "id": "story-ijzer",
    "title": "Sterrenval — De IJzeren Vriend van het Moeras",
    "subtitle": "Er valt iets uit de hemel in het moeras. Niemand vertrouwt het. Behalve Chapla.",
    "category": "kids",
    "categoryLabel": "<img class=\"icon-heron\" src=\"assets/heron.svg\" alt=\"\"> Chapla, deel 2",
    "badge": "Kinderboek",
    "readingTime": "12 min",
    "themeColor": "#7c3aed",
    "accentColor": "#a78bfa",
    "icon": "🤖",
    "heroImage": "swamp_robot",
    "synopsis": "Op een nacht valt er een ster uit de hemel — en het is geen ster. Het is een groot, stil wezen van ijzer en glas. De dieren van het moeras zijn doodsbang: het ding hoort hier niet, zeggen ze, het moet weg. Alleen Chapla durft dichterbij te komen, en Kwaks durft te luisteren. Dan komt de zwaarste storm in honderd jaar, de oude sluis breekt, en het water stijgt. Wie zal het moeras redden — de dieren die het ijzeren wezen wegjoegen, of het ijzeren wezen zelf?",
    "characters": [
      {
        "id": "chapla",
        "name": "Chapla",
        "role": "De Blauwe Reiger — Koningin van het Moeras",
        "avatar": "<img class=\"icon-heron\" src=\"assets/heron.svg\" alt=\"\">",
        "voicePitch": 1.2,
        "description": "Chapla kent nu het geheim van vriendschap. Daarom durft zij als enige naar het ijzeren wezen toe te stappen."
      },
      {
        "id": "oude-kikker",
        "name": "Kwaks",
        "role": "De Wijze Kikker van het Moeras",
        "avatar": "🐸",
        "voicePitch": 0.75,
        "description": "Kwaks is oud, traag en wijs. Hij is bang van het ijzeren wezen — maar hij is nog nieuwsgieriger dan hij bang is."
      },
      {
        "id": "sterreke",
        "name": "Sterreke",
        "role": "Het Wezen van IJzer en Glas",
        "avatar": "🤖",
        "voicePitch": 0.6,
        "description": "Groot, grijs en stil, met twee lampjes als ogen en een deuk in zijn schouder. Hij praat traag en beleefd, alsof elk woord nieuw voor hem is. De dieren noemen hem 'Sterreke', omdat hij uit de sterren viel."
      },
      {
        "id": "bulle",
        "name": "Bulle",
        "role": "Het Everzwijn — de luidste stem van het moeras",
        "avatar": "🐗",
        "voicePitch": 0.5,
        "description": "Bulle is groot, sterk en snel kwaad. Hij vertrouwt niets wat hij niet kan opeten of omverduwen. Maar onder al dat lawaai zit een dier dat gewoon bang is."
      },
      {
        "id": "pieke",
        "name": "Pieke",
        "role": "Het kleinste lieveheersbeestje van het moeras",
        "avatar": "🐞",
        "voicePitch": 1.6,
        "description": "Pieke is nog geen zomer oud en weegt minder dan een regendruppel. Zij is de eerste die met Sterreke durft te spelen — de kleinste dieren zijn vaak het dapperst."
      },
      {
        "id": "timur",
        "name": "Timur",
        "role": "De jongen die zijn belofte hield",
        "avatar": "👦",
        "voicePitch": 1.1,
        "description": "Timur beloofde elke zomer terug te komen naar het moeras. En Timur houdt zijn beloftes."
      }
    ],
    "chapters": [
      {
        "chapterNumber": 1,
        "title": "De Nacht dat de Ster Viel",
        "location": "Het Grote Moeras, een heldere nacht in augustus",
        "narrative": "Het is de stilste nacht van de zomer. Geen wind, geen wolk. Chapla staat op haar vaste plek bij het riet en kijkt naar de sterren in het zwarte water. Dan gebeurt er iets. Eén ster begint te bewegen. Ze wordt groter. En groter. En dan is het geen ster meer, maar een groot, brandend ding dat gillend door de lucht scheurt en met een enorme klap in het moeras slaat. Modder spat tot in de boomtoppen. De kikkers zwijgen. Alle vogels zwijgen. Het hele moeras houdt zijn adem in. En daar, midden in een rokende krater van slijk, ligt iets grijs. Iets groots. Iets wat niet beweegt.",
        "dialogues": [
          {
            "speaker": "oude-kikker",
            "text": "Kwak! Chapla! Kom hier, ga daar niet naartoe! Dat ding is uit de hemel gevallen! Dat is niet normaal, kwak!",
            "audioText": "Kwak! Chapla! Kom hier, ga daar niet naartoe! Dat ding is uit de hemel gevallen! Dat is niet normaal, kwak!",
            "highlightWords": [
              "hemel",
              "gevallen",
              "normaal"
            ],
            "contextNote": "'Uit de hemel gevallen' = fallen from the sky. 'Ga daar niet naartoe' = don't go over there."
          },
          {
            "speaker": "chapla",
            "text": "Stil eens, Kwaks. Ik hoor iets. Het tikt. Zoals een hart, maar dan van metaal.",
            "audioText": "Stil eens, Kwaks. Ik hoor iets. Het tikt. Zoals een hart, maar dan van metaal.",
            "highlightWords": [
              "Stil",
              "tikt",
              "metaal"
            ],
            "contextNote": "'Stil eens' is een heel Vlaamse manier om 'be quiet for a moment' te zeggen. 'Tikken' = to tick."
          },
          {
            "speaker": "sterreke",
            "text": "Sys... krak... Goedenavond. Ik ben beschadigd. Ik ben... verloren. Waar ben ik hier terechtgekomen?",
            "audioText": "Sys... krak... Goedenavond. Ik ben beschadigd. Ik ben... verloren. Waar ben ik hier terechtgekomen?",
            "highlightWords": [
              "beschadigd",
              "verloren",
              "terechtgekomen"
            ],
            "contextNote": "'Beschadigd' = damaged. 'Terechtkomen' = to end up somewhere. Sterreke praat heel beleefd!"
          },
          {
            "speaker": "chapla",
            "text": "Je bent in mijn moeras terechtgekomen, ijzeren ding. En je hebt mijn rietkraag kapotgemaakt. Maar... je bloedt niet. Wat ben jij eigenlijk?",
            "audioText": "Je bent in mijn moeras terechtgekomen, ijzeren ding. En je hebt mijn rietkraag kapotgemaakt. Maar... je bloedt niet. Wat ben jij eigenlijk?",
            "highlightWords": [
              "ijzeren",
              "rietkraag",
              "kapotgemaakt"
            ],
            "contextNote": "'Kapotmaken' = to break. 'Rietkraag' is de rand van riet rond het water."
          }
        ],
        "dilemma": {
          "prompt": "Het ijzeren wezen ligt hulpeloos in de modder en vraagt Chapla om hulp. Kwaks roept dat ze moet wegvliegen. Wat zegt Chapla?",
          "options": [
            {
              "id": "opt-1",
              "text": "Blijf maar liggen, ik haal water voor u. Ik weet hoe het voelt om hier alleen te liggen, zulle.",
              "isCorrect": true,
              "feedback": "Perfect! Beleefd 'u', het zachte Vlaamse 'zulle' — en Chapla herinnert zich haar eigen eenzaamheid. Precies wat een vriend zegt!",
              "xp": 25
            },
            {
              "id": "opt-2",
              "text": "Dat interesseert mij niet. Zoek het zelf maar uit, ik ga slapen.",
              "isCorrect": false,
              "feedback": "Correct Nederlands, maar zo hard! Chapla heeft van Timur geleerd dat je iemand in nood niet laat liggen.",
              "xp": 5
            },
            {
              "id": "opt-3",
              "text": "Wacht daar, ik roep de andere dieren erbij zodat ze het ding kunnen wegjagen.",
              "isCorrect": false,
              "feedback": "Voorzichtig zijn mag, maar meteen een bange menigte roepen maakt alles erger — dat zie je in hoofdstuk 2!",
              "xp": 10
            }
          ]
        },
        "quiz": [
          {
            "question": "Wat ziet Chapla eerst in de lucht?",
            "options": [
              "Een ster die begint te bewegen",
              "Een vliegtuig met lichten",
              "Een zwerm ganzen"
            ],
            "correctIndex": 0,
            "explanation": "Ze denkt eerst dat het een gewone ster is — tot die ster groter en groter wordt."
          },
          {
            "question": "Kwaks roept: 'Ga daar niet naartoe!' Wat wil hij?",
            "options": [
              "Dat Chapla wegblijft van het ding",
              "Dat Chapla sneller vliegt",
              "Dat Chapla hem draagt"
            ],
            "correctIndex": 0,
            "explanation": "'Ga daar niet naartoe' betekent: blijf er weg, kom niet dichterbij."
          },
          {
            "question": "Sterreke zegt: 'Ik ben beschadigd.' Wat betekent dat?",
            "options": [
              "Ik ben stuk, ik heb schade",
              "Ik ben verdwaald",
              "Ik ben moe"
            ],
            "correctIndex": 0,
            "explanation": "'Beschadigd' = damaged. Zijn schouder heeft een grote deuk van de val."
          },
          {
            "question": "Waarom durft Chapla dichterbij te komen?",
            "options": [
              "Ze hoort een tikkend geluid, als een hart",
              "Ze heeft honger",
              "Ze wil het ding opeten"
            ],
            "correctIndex": 0,
            "explanation": "'Het tikt. Zoals een hart, maar dan van metaal.' Voor Chapla is dat genoeg om te blijven."
          }
        ]
      },
      {
        "chapterNumber": 2,
        "title": "Niemand Vertrouwt het IJzer",
        "location": "De open plek bij de wilgen, de volgende ochtend",
        "narrative": "Tegen de ochtend weet het hele moeras het. De reigers weten het, de eenden weten het, de muizen onder de wortels weten het. En iedereen zegt hetzelfde: dat ding moet weg. Bulle het everzwijn stampt door het riet met twintig dieren achter zich aan. Sterreke zit rechtop in zijn krater en probeert voorzichtig zijn arm te bewegen. Elke keer als hij beweegt, deinzen de dieren achteruit. Alleen Chapla staat er tussenin, met haar vleugels half open, precies zoals ze ooit voor Timur stond.",
        "dialogues": [
          {
            "speaker": "bulle",
            "text": "Aan de kant, reiger! Dat ijzeren monster heeft ons moeras kapotgeslagen. Wij duwen het in het diepe water en klaar is kees!",
            "audioText": "Aan de kant, reiger! Dat ijzeren monster heeft ons moeras kapotgeslagen. Wij duwen het in het diepe water en klaar is kees!",
            "highlightWords": [
              "kant",
              "monster",
              "duwen"
            ],
            "contextNote": "'Aan de kant' = out of the way. 'Klaar is kees' is een grappige uitdrukking voor 'en dan is het opgelost'."
          },
          {
            "speaker": "chapla",
            "text": "Gij duwt hier niets in het water, Bulle. Hij heeft geen enkel dier pijn gedaan. Hij is gevallen. Dat is alles.",
            "audioText": "Gij duwt hier niets in het water, Bulle. Hij heeft geen enkel dier pijn gedaan. Hij is gevallen. Dat is alles.",
            "highlightWords": [
              "duwt",
              "pijn",
              "gevallen"
            ],
            "contextNote": "Chapla gebruikt hier het oude, plechtige 'gij' omdat ze heel streng is. Normaal zeg je gewoon 'jij'."
          },
          {
            "speaker": "sterreke",
            "text": "Ik begrijp uw angst. Ik ben groot en ik maak lawaai. Maar ik heb geen tanden, kijk maar. Ik kan repareren, niet kapotmaken.",
            "audioText": "Ik begrijp uw angst. Ik ben groot en ik maak lawaai. Maar ik heb geen tanden, kijk maar. Ik kan repareren, niet kapotmaken.",
            "highlightWords": [
              "angst",
              "lawaai",
              "repareren"
            ],
            "contextNote": "'Angst' = fear. 'Lawaai' = noise. 'Repareren' = to repair. Sterreke blijft altijd beleefd, ook als iedereen roept."
          },
          {
            "speaker": "oude-kikker",
            "text": "Kwak... Bulle, wacht eens. Mijn oude poot doet al drie zomers zeer. Dat ding heeft er gisteren een takje omgebonden. En vandaag... vandaag kan ik weer springen. Kwak!",
            "audioText": "Kwak... Bulle, wacht eens. Mijn oude poot doet al drie zomers zeer. Dat ding heeft er gisteren een takje omgebonden. En vandaag... vandaag kan ik weer springen. Kwak!",
            "highlightWords": [
              "wacht",
              "zeer",
              "springen"
            ],
            "contextNote": "'Zeer doen' is Vlaams voor pijn doen. Kwaks is de tweede die Sterreke vertrouwt — omdat hij bewijs heeft."
          },
          {
            "speaker": "pieke",
            "text": "En hij heeft mijn vleugeltje losgemaakt uit het spinnenweb! Met zijn grote ijzeren vinger, heel voorzichtig! Ik ben zo klein en hij deed mij geen pijn!",
            "audioText": "En hij heeft mijn vleugeltje losgemaakt uit het spinnenweb! Met zijn grote ijzeren vinger, heel voorzichtig! Ik ben zo klein en hij deed mij geen pijn!",
            "highlightWords": [
              "vleugeltje",
              "voorzichtig",
              "klein"
            ],
            "contextNote": "'Voorzichtig' = careful(ly). Het verkleinwoord 'vleugeltje' maakt het extra lief — heel typisch Nederlands en Vlaams."
          }
        ],
        "dilemma": {
          "prompt": "Bulle stampt naar voren en de andere dieren volgen. Hoe houdt Chapla hem tegen zonder zelf te vechten?",
          "options": [
            {
              "id": "opt-1",
              "text": "Wacht een keer, Bulle. Geef hem drie dagen. Doet hij één dier kwaad, dan help ik je zelf duwen. Akkoord?",
              "isCorrect": true,
              "feedback": "Slim! 'Wacht een keer' klinkt echt Vlaams, en Chapla geeft Bulle iets wat hij kan accepteren zonder gezichtsverlies.",
              "xp": 25
            },
            {
              "id": "opt-2",
              "text": "Jij bent een domme dikke big en niemand luistert ooit naar jou!",
              "isCorrect": false,
              "feedback": "Aha, dat maakt Bulle alleen maar kwader — en de bange dieren volgen dan zeker de luidste stem.",
              "xp": 5
            },
            {
              "id": "opt-3",
              "text": "Ik zeg niets meer, doe maar wat je wilt.",
              "isCorrect": false,
              "feedback": "Zwijgen laat de angst winnen. Sterreke zou in het diepe water verdwijnen — en hoofdstuk 4 loopt heel anders af!",
              "xp": 10
            }
          ]
        },
        "quiz": [
          {
            "question": "Wat wil Bulle met Sterreke doen?",
            "options": [
              "Hem in het diepe water duwen",
              "Hem opeten",
              "Hem naar de stad brengen"
            ],
            "correctIndex": 0,
            "explanation": "'Wij duwen het in het diepe water en klaar is kees!' Bulle is vooral bang, maar dat klinkt als boos."
          },
          {
            "question": "Waarom verandert Kwaks van gedacht?",
            "options": [
              "Sterreke heeft zijn zieke poot verzorgd",
              "Sterreke gaf hem eten",
              "Chapla heeft het bevolen"
            ],
            "correctIndex": 0,
            "explanation": "Kwaks kan weer springen na drie zomers pijn. Bewijs is sterker dan angst."
          },
          {
            "question": "Sterreke zegt: 'Ik kan repareren, niet kapotmaken.' Wat betekent 'repareren'?",
            "options": [
              "Herstellen, maken wat stuk is",
              "Roepen",
              "Wegduwen"
            ],
            "correctIndex": 0,
            "explanation": "Dat wordt in hoofdstuk 3 en 4 heel belangrijk!"
          },
          {
            "question": "Wat betekent 'mijn poot doet zeer'?",
            "options": [
              "Mijn poot doet pijn",
              "Mijn poot is nat",
              "Mijn poot is vies"
            ],
            "correctIndex": 0,
            "explanation": "'Zeer doen' is de gewone Vlaamse manier om 'pijn doen' te zeggen."
          }
        ]
      },
      {
        "chapterNumber": 3,
        "title": "De Sluis die Kraakt",
        "location": "De oude sluis aan de rand van het moeras, drie dagen later",
        "narrative": "Drie dagen. Zo lang duurt het voor Sterreke recht kan staan. In die drie dagen doet hij niets dan kleine dingen: hij zet een omgevallen boompje weer recht, hij haalt een oud visnet uit het water, hij bouwt voor Pieke een klein dak van bladeren. Bulle kijkt van ver toe en zegt niets. Maar op de derde avond wordt de lucht groen. De zwaluwen vliegen laag. En Sterreke draait zijn hoofd naar het westen, waar de oude houten sluis het rivierwater tegenhoudt, en zijn twee lampjes gaan van zacht blauw naar fel oranje.",
        "dialogues": [
          {
            "speaker": "sterreke",
            "text": "Chapla. Luister goed naar mij. Er komt een storm. Een zware. En het hout van die sluis is rot. Als de sluis breekt, loopt heel het moeras onder water.",
            "audioText": "Chapla. Luister goed naar mij. Er komt een storm. Een zware. En het hout van die sluis is rot. Als de sluis breekt, loopt heel het moeras onder water.",
            "highlightWords": [
              "storm",
              "hout",
              "rot",
              "onder water"
            ],
            "contextNote": "'Rot' = rotten. 'Onder water lopen' = to flood. Sterreke kan het weer meten — daarom weet hij het zo zeker."
          },
          {
            "speaker": "chapla",
            "text": "Onder water? Maar de nesten liggen laag! De muizen, de jonge eendjes, Pieke... die kunnen niet weg, die verdrinken allemaal!",
            "audioText": "Onder water? Maar de nesten liggen laag! De muizen, de jonge eendjes, Pieke... die kunnen niet weg, die verdrinken allemaal!",
            "highlightWords": [
              "nesten",
              "jonge",
              "verdrinken"
            ],
            "contextNote": "'Verdrinken' = to drown. Nu begrijpt Chapla pas hoe groot het gevaar is."
          },
          {
            "speaker": "bulle",
            "text": "Ge liegt! Die sluis staat daar al honderd jaar! Ge wilt ons gewoon bang maken zodat wij u gerust laten!",
            "audioText": "Ge liegt! Die sluis staat daar al honderd jaar! Ge wilt ons gewoon bang maken zodat wij u gerust laten!",
            "highlightWords": [
              "liegt",
              "honderd",
              "bang"
            ],
            "contextNote": "'Ge liegt' = you're lying. Bulle is nog altijd wantrouwig — en hij is ook gewoon heel bang."
          },
          {
            "speaker": "sterreke",
            "text": "Kom dan mee kijken, Bulle. Leg uw poot op het hout. Voelt ge dat? Dat trilt. Hout dat trilt, is hout dat gaat breken.",
            "audioText": "Kom dan mee kijken, Bulle. Leg uw poot op het hout. Voelt ge dat? Dat trilt. Hout dat trilt, is hout dat gaat breken.",
            "highlightWords": [
              "mee",
              "poot",
              "trilt",
              "breken"
            ],
            "contextNote": "'Trillen' = to tremble/vibrate. Sterreke overtuigt Bulle niet met woorden maar met zijn eigen poot."
          },
          {
            "speaker": "oude-kikker",
            "text": "Kwak! Ik heb honderd zomers gezien, maar zo'n groene lucht heb ik nog nooit gezien. Doe wat het ijzeren wezen zegt! Kwak kwak!",
            "audioText": "Kwak! Ik heb honderd zomers gezien, maar zo'n groene lucht heb ik nog nooit gezien. Doe wat het ijzeren wezen zegt! Kwak kwak!",
            "highlightWords": [
              "zomers",
              "groene",
              "wezen"
            ],
            "contextNote": "'Wezen' = creature/being. Een groene lucht is in het echt een teken van heel zwaar onweer!"
          }
        ],
        "dilemma": {
          "prompt": "De storm komt eraan en er is nog één uur. Sterreke kan niet alles alleen. Wat vraagt Chapla aan de bange dieren?",
          "options": [
            {
              "id": "opt-1",
              "text": "Allee, iedereen mee! Bulle graaft, de eenden waarschuwen de nesten, ik vlieg de kleintjes naar de hoge duin. Sterreke zegt wat we doen!",
              "isCorrect": true,
              "feedback": "Uitstekend! 'Allee, iedereen mee!' is echt Vlaams aanmoedigen, en Chapla geeft elk dier een taak dat het aankan.",
              "xp": 30
            },
            {
              "id": "opt-2",
              "text": "Redt uzelf maar, ik vlieg weg. Ik ben tenminste een vogel.",
              "isCorrect": false,
              "feedback": "Dat is de oude, eenzame Chapla van vóór Timur. Die Chapla bestaat niet meer!",
              "xp": 5
            },
            {
              "id": "opt-3",
              "text": "Sterreke doet het wel, hij is toch van ijzer. Wij wachten hier af.",
              "isCorrect": false,
              "feedback": "Eén paar handen — of één paar ijzeren armen — is niet genoeg voor een heel moeras. Samen is het enige antwoord.",
              "xp": 10
            }
          ]
        },
        "quiz": [
          {
            "question": "Waaraan ziet Sterreke dat er een zware storm komt?",
            "options": [
              "De lucht wordt groen en de zwaluwen vliegen laag",
              "De zon schijnt fel",
              "Het water wordt warm"
            ],
            "correctIndex": 0,
            "explanation": "Een groene lucht en laagvliegende zwaluwen zijn ook in het echt tekenen van zwaar onweer."
          },
          {
            "question": "Wat is het probleem met de oude sluis?",
            "options": [
              "Het hout is rot en het trilt al",
              "Ze staat op slot",
              "Ze is te klein"
            ],
            "correctIndex": 0,
            "explanation": "'Hout dat trilt, is hout dat gaat breken' — als de sluis breekt, loopt het moeras onder water."
          },
          {
            "question": "Hoe overtuigt Sterreke het wantrouwige everzwijn?",
            "options": [
              "Hij laat Bulle zelf het trillende hout voelen",
              "Hij belooft hem eten",
              "Hij wordt boos op hem"
            ],
            "correctIndex": 0,
            "explanation": "Bulle gelooft geen woorden, maar wel zijn eigen poot."
          },
          {
            "question": "Wat betekent 'het moeras loopt onder water'?",
            "options": [
              "Het moeras overstroomt",
              "Het moeras droogt uit",
              "Het water wordt proper"
            ],
            "correctIndex": 0,
            "explanation": "'Onderlopen' = to flood. Voor de lage nesten is dat levensgevaarlijk."
          }
        ]
      },
      {
        "chapterNumber": 4,
        "title": "De Nacht van het Grote Water",
        "location": "De sluis en de hoge duin, middernacht in de storm",
        "narrative": "De storm komt zoals Sterreke gezegd heeft. De regen slaat horizontaal door het riet. De wilgen buigen tot in het water. En om middernacht klinkt er een geluid dat niemand ooit vergeet: een lange, diepe KRAAK, en dan het brullen van water dat vrijkomt. De oude sluis is gebroken. Een muur van bruin water rolt het moeras binnen. Maar het moeras is niet meer hetzelfde moeras van drie dagen geleden. Bulle heeft een lange gracht gegraven die het water afleidt. De eenden hebben elk nest gewaarschuwd. Chapla heeft achttien keer heen en weer gevlogen met muizen, jonge vogeltjes en één heel klein lieveheersbeestje op haar rug. En in de bres van de gebroken sluis staat Sterreke, met zijn armen wijd, en houdt met zijn eigen lijf het water tegen terwijl de dieren takken en modder achter hem stapelen.",
        "dialogues": [
          {
            "speaker": "sterreke",
            "text": "Stapel door! Niet stoppen! Takken tegen mijn rug, modder in de gaten! Nog even, wij houden het tegen!",
            "audioText": "Stapel door! Niet stoppen! Takken tegen mijn rug, modder in de gaten! Nog even, wij houden het tegen!",
            "highlightWords": [
              "Stapel",
              "stoppen",
              "takken",
              "gaten"
            ],
            "contextNote": "'Stapelen' = to stack/pile up. Sterreke roept nu kort en snel — geen tijd meer voor beleefde zinnen!"
          },
          {
            "speaker": "bulle",
            "text": "Ik graaf zo hard als ik kan, ijzeren vriend! Blijf staan, hoorde! Ge moogt niet loslaten!",
            "audioText": "Ik graaf zo hard als ik kan, ijzeren vriend! Blijf staan, hoorde! Ge moogt niet loslaten!",
            "highlightWords": [
              "graaf",
              "vriend",
              "loslaten"
            ],
            "contextNote": "Kijk goed: Bulle zegt voor het eerst 'vriend'. 'Hoorde' is een typisch Vlaams stopwoordje, zoals 'hoor je?'"
          },
          {
            "speaker": "chapla",
            "text": "Sterreke, uw schouder scheurt! Laat los en kom mee, het is genoeg geweest!",
            "audioText": "Sterreke, uw schouder scheurt! Laat los en kom mee, het is genoeg geweest!",
            "highlightWords": [
              "schouder",
              "scheurt",
              "genoeg"
            ],
            "contextNote": "'Scheuren' = to tear. Chapla wil nu háár vriend redden in plaats van het moeras."
          },
          {
            "speaker": "sterreke",
            "text": "Nee, Chapla. Ik ben van ijzer. Ijzer kan gerepareerd worden. Een nest niet. Nog dertig tellen, dan houdt de dam.",
            "audioText": "Nee, Chapla. Ik ben van ijzer. Ijzer kan gerepareerd worden. Een nest niet. Nog dertig tellen, dan houdt de dam.",
            "highlightWords": [
              "ijzer",
              "gerepareerd",
              "nest",
              "dam"
            ],
            "contextNote": "De mooiste zin van het verhaal: 'Ijzer kan gerepareerd worden. Een nest niet.'"
          },
          {
            "speaker": "pieke",
            "text": "Hij houdt het! Kijk! Het water gaat de gracht in! Sterreke, je houdt het tegen!",
            "audioText": "Hij houdt het! Kijk! Het water gaat de gracht in! Sterreke, je houdt het tegen!",
            "highlightWords": [
              "houdt",
              "gracht",
              "tegen"
            ],
            "contextNote": "'Tegenhouden' = to hold back. Het kleinste dier van het moeras roept het hardst van allemaal."
          }
        ],
        "dilemma": {
          "prompt": "De dam houdt, maar Sterreke ligt met een gescheurde schouder in de modder en zijn lampjes worden zwak. Wat doen de dieren?",
          "options": [
            {
              "id": "opt-1",
              "text": "Allemaal samen: Bulle duwt, de eenden trekken aan het net, Chapla houdt zijn hoofd boven water. Wij laten hem niet liggen!",
              "isCorrect": true,
              "feedback": "Ja! Precies wat Sterreke voor hen deed. Zo hoort een moeras te zijn.",
              "xp": 30
            },
            {
              "id": "opt-2",
              "text": "Hij is toch van ijzer, die roest niet. Wij gaan eerst slapen en kijken morgen wel.",
              "isCorrect": false,
              "feedback": "Van ijzer of niet — hij heeft zich kapotgemaakt om hén te redden. Hem laten liggen zou alles wegnemen wat ze net geleerd hebben.",
              "xp": 5
            },
            {
              "id": "opt-3",
              "text": "Chapla trekt alleen. Zij is sterk genoeg voor twee.",
              "isCorrect": false,
              "feedback": "Moedig, maar een reiger tilt geen wezen van ijzer. Dit hoofdstuk gaat nu net over samen.",
              "xp": 10
            }
          ]
        },
        "quiz": [
          {
            "question": "Wat gebeurt er om middernacht?",
            "options": [
              "De oude sluis breekt met een luide kraak",
              "De storm gaat plots liggen",
              "De maan komt tevoorschijn"
            ],
            "correctIndex": 0,
            "explanation": "Precies wat Sterreke voorspeld had — en daarom was iedereen op tijd klaar."
          },
          {
            "question": "Wat heeft Bulle gedaan om te helpen?",
            "options": [
              "Een lange gracht gegraven die het water afleidt",
              "De dieren bang gemaakt",
              "Bij Sterreke gaan slapen"
            ],
            "correctIndex": 0,
            "explanation": "Het everzwijn dat Sterreke wilde wegduwen, redt nu met zijn sterke poten het hele moeras."
          },
          {
            "question": "Sterreke zegt: 'Ijzer kan gerepareerd worden. Een nest niet.' Wat bedoelt hij?",
            "options": [
              "Schade aan hem is te herstellen, een verdronken nest niet",
              "Hij wil een nieuw nest bouwen",
              "Hij vindt ijzer mooier dan hout"
            ],
            "correctIndex": 0,
            "explanation": "Daarom blijft hij staan, ook al scheurt zijn schouder."
          },
          {
            "question": "Bulle noemt Sterreke nu...",
            "options": [
              "'IJzeren vriend'",
              "'IJzeren monster'",
              "'Dat ding'"
            ],
            "correctIndex": 0,
            "explanation": "In hoofdstuk 2 was het nog 'monster'. Eén nacht samen werken heeft dat veranderd."
          }
        ]
      },
      {
        "chapterNumber": 5,
        "title": "Eén van Ons",
        "location": "Het moeras, drie dagen na de storm — zonsopgang",
        "narrative": "Het water zakt. De zon komt op over een moeras dat er anders uitziet: er ligt een nieuwe gracht, een nieuwe dam van takken en modder, en overal drijven bladeren. Maar elk nest is er nog. Elke muis, elke jonge eend, elk kevertje. Sterreke zit tegen een wilg met een gescheurde schouder en heel zwakke lampjes. De dieren hebben hem drie dagen niet alleen gelaten: Bulle sleepte hem uit het water, Pieke's familie haalde slijk uit zijn gewrichten, en Kwaks bond er een takje omheen — precies zoals Sterreke ooit bij zijn poot deed. En dan, op de vierde ochtend, klinkt er een plons aan de rand van het moeras. Een bekende plons.",
        "dialogues": [
          {
            "speaker": "timur",
            "text": "Chapla! Ik ben het! Ik had het beloofd, hè — elke zomer! Amai, wat is hier gebeurd?! En wat is DAT?",
            "audioText": "Chapla! Ik ben het! Ik had het beloofd, hè — elke zomer! Amai, wat is hier gebeurd?! En wat is DAT?",
            "highlightWords": [
              "beloofd",
              "elke zomer",
              "Amai"
            ],
            "contextNote": "'Amai' is dé Vlaamse uitroep van verbazing. Timur hield zijn belofte uit het vorige verhaal!"
          },
          {
            "speaker": "chapla",
            "text": "Dat, Timur, is Sterreke. Hij viel uit de hemel, en heel het moeras wilde hem wegjagen. Ik was de enige die bleef staan. En hij heeft ons allemaal gered.",
            "audioText": "Dat, Timur, is Sterreke. Hij viel uit de hemel, en heel het moeras wilde hem wegjagen. Ik was de enige die bleef staan. En hij heeft ons allemaal gered.",
            "highlightWords": [
              "viel",
              "wegjagen",
              "gered"
            ],
            "contextNote": "'Wegjagen' = to chase away. 'Redden' = to save. Chapla vertelt het verhaal precies zoals het gebeurd is."
          },
          {
            "speaker": "timur",
            "text": "Mijn papa kan zoiets lassen! Wij komen morgen terug met gereedschap. Dan maken wij uw schouder weer heel, Sterreke.",
            "audioText": "Mijn papa kan zoiets lassen! Wij komen morgen terug met gereedschap. Dan maken wij uw schouder weer heel, Sterreke.",
            "highlightWords": [
              "lassen",
              "gereedschap",
              "heel"
            ],
            "contextNote": "'Lassen' = to weld. 'Gereedschap' = tools. 'Heel maken' = to make whole again."
          },
          {
            "speaker": "sterreke",
            "text": "Dank u. Ik ben hier gevallen als een vreemde. En nu... nu weet ik niet meer hoe ik ergens anders zou moeten zijn.",
            "audioText": "Dank u. Ik ben hier gevallen als een vreemde. En nu... nu weet ik niet meer hoe ik ergens anders zou moeten zijn.",
            "highlightWords": [
              "Dank u",
              "vreemde",
              "ergens anders"
            ],
            "contextNote": "'Een vreemde' = a stranger. Sterreke zegt op zijn stille manier dat hij thuis is."
          },
          {
            "speaker": "bulle",
            "text": "Ge blijft hier, ijzer. Ge hebt mijn gracht helpen graven. Dan zijt ge één van ons, en gedaan met erover te discussiëren.",
            "audioText": "Ge blijft hier, ijzer. Ge hebt mijn gracht helpen graven. Dan zijt ge één van ons, en gedaan met erover te discussiëren.",
            "highlightWords": [
              "blijft",
              "gracht",
              "één van ons"
            ],
            "contextNote": "Dezelfde woorden die Chapla ooit tegen Timur zei: 'één van ons'. Bulle zegt het op zijn eigen brommerige manier."
          },
          {
            "speaker": "oude-kikker",
            "text": "Kwak. Het moeras heeft nu een reiger, een jongen, een everzwijn en een ster. Kwak. Dat is het rijkste moeras van heel Vlaanderen. Kwak kwak.",
            "audioText": "Kwak. Het moeras heeft nu een reiger, een jongen, een everzwijn en een ster. Kwak. Dat is het rijkste moeras van heel Vlaanderen. Kwak kwak.",
            "highlightWords": [
              "reiger",
              "everzwijn",
              "rijkste"
            ],
            "contextNote": "'Het rijkste' = the richest. Kwaks bedoelt natuurlijk rijk aan vrienden, niet aan geld!"
          }
        ],
        "quiz": [
          {
            "question": "Wat is er met het moeras gebeurd na de storm?",
            "options": [
              "Elk nest is gered, maar het moeras ziet er anders uit",
              "Alle dieren zijn verhuisd",
              "Het moeras is helemaal drooggevallen"
            ],
            "correctIndex": 0,
            "explanation": "Er ligt nu een nieuwe gracht en een dam — en elke muis, eend en kever leeft nog."
          },
          {
            "question": "Hoe zorgen de dieren voor Sterreke?",
            "options": [
              "Ze slepen hem uit het water en verzorgen zijn gewrichten",
              "Ze laten hem liggen tot hij vanzelf opdroogt",
              "Ze brengen hem naar de stad"
            ],
            "correctIndex": 0,
            "explanation": "Kwaks bindt zelfs een takje om zijn schouder — precies wat Sterreke ooit voor Kwaks' poot deed."
          },
          {
            "question": "Waarom komt Timur terug?",
            "options": [
              "Hij had beloofd elke zomer terug te komen",
              "Hij is verdwaald",
              "Hij komt vissen"
            ],
            "correctIndex": 0,
            "explanation": "In het vorige verhaal beloofde hij: 'Ik kom terug, elke zomer. Ik beloof het.'"
          },
          {
            "question": "Timur zegt dat zijn papa kan 'lassen'. Wat is dat?",
            "options": [
              "Metaal aan elkaar maken met hitte",
              "Metaal schilderen",
              "Metaal wegen"
            ],
            "correctIndex": 0,
            "explanation": "'Lassen' = to weld. Daarmee kan Sterreke's gescheurde schouder weer heel gemaakt worden."
          },
          {
            "question": "Wat betekent Bulle's zin: 'Dan zijt ge één van ons'?",
            "options": [
              "Je hoort er nu helemaal bij",
              "Je moet vertrekken",
              "Je bent de sterkste"
            ],
            "correctIndex": 0,
            "explanation": "Dezelfde woorden waarmee Chapla ooit Timur verwelkomde. Nu geeft het moeras ze door aan Sterreke."
          }
        ]
      }
    ]
  },

  // =========================================================================
  // STORY 7: DE SCHATKAART VAN HET MOERAS
  // =========================================================================
{
    "id": "story-schat",
    "title": "De Schatkaart van het Moeras",
    "subtitle": "Een oude kaart, een gevaarlijke man, en een deur die van buitenaf dichtgaat.",
    "category": "kids",
    "categoryLabel": "<img class=\"icon-heron\" src=\"assets/heron.svg\" alt=\"\"> Chapla, deel 3",
    "badge": "Kinderboek",
    "readingTime": "14 min",
    "themeColor": "#b45309",
    "accentColor": "#fbbf24",
    "icon": "🗺️",
    "heroImage": "swamp_treasure",
    "synopsis": "De storm heeft de oever opengescheurd, en in de blootgelegde klei ligt een loden koker met een kaart erin — driehonderd jaar oud. Timur is net terug voor de zomer, en samen met Chapla besluit hij de kaart te volgen. Maar zij zijn niet de enigen die haar willen. Victor Grijp zoekt die schat al twintig jaar, en hij deinst nergens voor terug. Diep onder een vervallen kasteel, achter een ijzeren deur die alleen van buitenaf opengaat, wacht het gevaarlijkste avontuur van het moeras.",
    "characters": [
      {
        "id": "chapla",
        "name": "Chapla",
        "role": "De Blauwe Reiger — Koningin van het Moeras",
        "avatar": "<img class=\"icon-heron\" src=\"assets/heron.svg\" alt=\"\">",
        "voicePitch": 1.2,
        "description": "Chapla vliegt hoog, ziet ver en denkt snel. Zij leest de kaart vanuit de lucht: wat voor Timur een sloot is, is voor haar een lijn in het landschap."
      },
      {
        "id": "timur",
        "name": "Timur",
        "role": "De jongen die elke zomer terugkomt",
        "avatar": "👦",
        "voicePitch": 1.1,
        "description": "Timur is een jaar ouder, spreekt al veel beter Vlaams, en heeft een zaklamp, een touw en veel te veel goesting in avontuur."
      },
      {
        "id": "oude-kikker",
        "name": "Kwaks",
        "role": "De Wijze Kikker van het Moeras",
        "avatar": "🐸",
        "voicePitch": 0.75,
        "description": "Kwaks kent elk verhaal dat ooit in het moeras verteld is — ook het verhaal van de schat. Hij dacht altijd dat het maar een sprookje was."
      },
      {
        "id": "sterreke",
        "name": "Sterreke",
        "role": "Het Wezen van IJzer en Glas",
        "avatar": "🤖",
        "voicePitch": 0.6,
        "description": "Sinds de grote storm hoort Sterreke bij het moeras. Zijn schouder is gelast, zijn lampjes branden weer fel — en hij kan in het donker zien."
      },
      {
        "id": "bulle",
        "name": "Bulle",
        "role": "Het Everzwijn — sterkste rug van het moeras",
        "avatar": "🐗",
        "voicePitch": 0.5,
        "description": "Bulle bromt nog altijd over alles, maar hij loopt nu wel meteen mee als er gegraven moet worden. Vrienden zijn vrienden, zegt hij."
      },
      {
        "id": "pieke",
        "name": "Pieke",
        "role": "Het kleinste lieveheersbeestje van het moeras",
        "avatar": "🐞",
        "voicePitch": 1.6,
        "description": "Pieke past door gaten waar niemand anders door past. In dit verhaal redt het kleinste dier van allemaal iedereen."
      },
      {
        "id": "grijp",
        "name": "Victor Grijp",
        "role": "Schattenjager — zoekt al twintig jaar",
        "avatar": "🕵️",
        "voicePitch": 0.45,
        "description": "Een magere man met een metaaldetector, een schop en een bestelwagen vol gereedschap. Hij glimlacht vriendelijk en meent er niets van. Voor Grijp is de schat van hém — en alles wat in de weg staat, is een probleem dat weggaat."
      },
      {
        "id": "vera",
        "name": "Vera",
        "role": "De boswachter van de polder",
        "avatar": "👩‍🌾",
        "voicePitch": 1.15,
        "description": "Vera rijdt elke dag met haar groene jeep langs de dijken. Zij kent elk nest, elke sloot en elke stroper — en zij gelooft kinderen die met een reiger komen aanzetten."
      }
    ],
    "chapters": [
      {
        "chapterNumber": 1,
        "title": "De Koker in de Klei",
        "location": "Het Grote Moeras, de eerste dag van de zomervakantie",
        "narrative": "De storm van vorig jaar heeft de oever opengescheurd als een boek. Waar vroeger riet stond, ligt nu kale, natte klei — en daarin ligt iets wat er niet hoort: een koker van lood, zwart van ouderdom, zo lang als Timurs onderarm. Timur is nog geen uur terug in het moeras of hij ligt al tot aan zijn ellebogen in de modder. Chapla kijkt toe met haar kop schuin. Als Timur het deksel eindelijk lospeutert, rolt er een strook perkament uit, stijf en geel. Er staan lijnen op. Een rivier. Een toren. Een kruisje. En één zin, in oud, krullerig handschrift: 'Wie het moeras bewaart, bewaart de schat.'",
        "dialogues": [
          {
            "speaker": "timur",
            "text": "Chapla! Chapla, kijk! Dit is een kaart! Een echte oude kaart! Amai, kijk dat kruisje eens staan!",
            "audioText": "Chapla! Chapla, kijk! Dit is een kaart! Een echte oude kaart! Amai, kijk dat kruisje eens staan!",
            "highlightWords": [
              "kaart",
              "oude",
              "kruisje"
            ],
            "contextNote": "'Amai' = wow (het bekendste Vlaamse uitroepwoord). 'Een kruisje' = a little cross — op schatkaarten dé plek waar iets ligt."
          },
          {
            "speaker": "chapla",
            "text": "Laat eens zien. Die kronkel daar, dat is onze vaart. En die toren... die toren ken ik. Dat is de ruïne van Hof ter Vloed, drie uur vliegen naar het westen.",
            "audioText": "Laat eens zien. Die kronkel daar, dat is onze vaart. En die toren... die toren ken ik. Dat is de ruïne van Hof ter Vloed, drie uur vliegen naar het westen.",
            "highlightWords": [
              "kronkel",
              "vaart",
              "toren",
              "ruïne"
            ],
            "contextNote": "'De vaart' is in Vlaanderen een kanaal. Een 'ruïne' is een vervallen gebouw. Chapla leest de kaart vanuit de lucht!"
          },
          {
            "speaker": "oude-kikker",
            "text": "Kwak! Ik ken dat verhaal! De schat van Hof ter Vloed! Mijn overgrootvader kwaakte er al over. Ik dacht dat het een sprookje was. Kwak kwak!",
            "audioText": "Kwak! Ik ken dat verhaal! De schat van Hof ter Vloed! Mijn overgrootvader kwaakte er al over. Ik dacht dat het een sprookje was. Kwak kwak!",
            "highlightWords": [
              "verhaal",
              "overgrootvader",
              "sprookje"
            ],
            "contextNote": "'Een sprookje' = a fairy tale. Kwaks kent alle oude verhalen van het moeras."
          },
          {
            "speaker": "timur",
            "text": "Chapla, wij gaan die schat zoeken. Samen. Ik heb een touw, een zaklamp en mijn fiets. Zeg ja. Alsjeblieft, zeg ja!",
            "audioText": "Chapla, wij gaan die schat zoeken. Samen. Ik heb een touw, een zaklamp en mijn fiets. Zeg ja. Alsjeblieft, zeg ja!",
            "highlightWords": [
              "zoeken",
              "touw",
              "zaklamp"
            ],
            "contextNote": "'Een touw' = a rope, 'een zaklamp' = a flashlight. Onthoud die twee — Timur heeft ze allebei nodig!"
          }
        ],
        "dilemma": {
          "prompt": "Kwaks vindt het veel te gevaarlijk en zaagt dat ze thuis moeten blijven. Hoe overtuigt Chapla hem om mee te gaan?",
          "options": [
            {
              "id": "opt-1",
              "text": "Kwaks, gij kent dat verhaal beter dan wij allemaal. Zonder u geraken wij daar nooit. Komt ge mee?",
              "isCorrect": true,
              "feedback": "Schoon gedaan! Chapla vraagt niet, ze geeft hem een rol die alleen hij kan spelen. Zo krijg je iemand mee.",
              "xp": 25
            },
            {
              "id": "opt-2",
              "text": "Blijf dan maar thuis bij uw kikkerdril, oude zaag.",
              "isCorrect": false,
              "feedback": "Auw! 'Zagen' betekent zeuren, maar iemand een 'zaag' noemen is niet vriendelijk — en Kwaks' kennis blijkt later cruciaal.",
              "xp": 5
            },
            {
              "id": "opt-3",
              "text": "Wij vertrekken zonder u, punt uit.",
              "isCorrect": false,
              "feedback": "Alleen op avontuur gaan is precies hoe je in een ijskelder eindigt zonder dat iemand het weet...",
              "xp": 10
            }
          ]
        },
        "quiz": [
          {
            "question": "Wat vindt Timur in de klei?",
            "options": [
              "Een loden koker met een oude kaart erin",
              "Een gouden munt",
              "Een fles met een brief"
            ],
            "correctIndex": 0,
            "explanation": "De storm van het vorige verhaal heeft de oever opengescheurd en de koker blootgelegd."
          },
          {
            "question": "Hoe herkent Chapla de plek op de kaart?",
            "options": [
              "Ze kent de toren van de ruïne uit de lucht",
              "Ze ruikt het",
              "Kwaks vertelt het haar"
            ],
            "correctIndex": 0,
            "explanation": "Een reiger ziet het landschap van bovenaf — voor haar zijn de lijnen op de kaart gewone sloten en vaarten."
          },
          {
            "question": "Wat is 'de vaart' in Vlaanderen?",
            "options": [
              "Een kanaal",
              "De snelheid van een boot",
              "Een brug"
            ],
            "correctIndex": 0,
            "explanation": "In Vlaanderen noemt men een kanaal heel gewoon 'de vaart'."
          },
          {
            "question": "Welke zin staat op de kaart?",
            "options": [
              "'Wie het moeras bewaart, bewaart de schat'",
              "'Hier ligt goud'",
              "'Kom nooit terug'"
            ],
            "correctIndex": 0,
            "explanation": "Die zin lijkt eerst poëzie, maar aan het einde blijkt het een aanwijzing te zijn."
          }
        ]
      },
      {
        "chapterNumber": 2,
        "title": "De Man met de Metaaldetector",
        "location": "De dijk langs de vaart, de volgende ochtend",
        "narrative": "Ze zijn nog geen halfuur onderweg als ze hem zien: een magere man in een groene jas, die traag over de dijk loopt en een metaaldetector voor zich uit zwaait als een pendel. Naast hem staat een bestelwagen vol schoppen, emmers en zeven. Hij glimlacht als hij Timur ziet. Het is een vriendelijke glimlach, maar Chapla, die honderd winters van roofvogels overleefde, zet meteen haar veren op. Er is iets met die ogen. Die kijken niet naar Timur. Die kijken naar de koker onder Timurs arm.",
        "dialogues": [
          {
            "speaker": "grijp",
            "text": "Goeiemorgen, jongeman! Victor Grijp is de naam. Wat een schone koker hebt gij daar. Mag ik eens kijken? Ik ben nogal een liefhebber van oude dingen.",
            "audioText": "Goeiemorgen, jongeman! Victor Grijp is de naam. Wat een schone koker hebt gij daar. Mag ik eens kijken? Ik ben nogal een liefhebber van oude dingen.",
            "highlightWords": [
              "Goeiemorgen",
              "schone",
              "kijken"
            ],
            "contextNote": "In Vlaanderen betekent 'schoon' mooi (niet 'proper'). Grijp klinkt vriendelijk — let op wat hij écht wil."
          },
          {
            "speaker": "timur",
            "text": "Eh... nee, meneer, dank u. Het is gewoon een oude buis die ik gevonden heb. Niks bijzonders, hoor.",
            "audioText": "Eh... nee, meneer, dank u. Het is gewoon een oude buis die ik gevonden heb. Niks bijzonders, hoor.",
            "highlightWords": [
              "nee",
              "gevonden",
              "bijzonders"
            ],
            "contextNote": "'Niks bijzonders' = nothing special. Timur liegt niet graag, maar hij voelt dat er iets niet klopt."
          },
          {
            "speaker": "grijp",
            "text": "Hof ter Vloed. Dat staat erop, hè. Ik zoek die schat al twintig jaar, kereltje. Twintig jaar van mijn leven. En nu komt een snotneus met een reiger het zomaar oprapen?",
            "audioText": "Hof ter Vloed. Dat staat erop, hè. Ik zoek die schat al twintig jaar, kereltje. Twintig jaar van mijn leven. En nu komt een snotneus met een reiger het zomaar oprapen?",
            "highlightWords": [
              "zoek",
              "twintig",
              "leven"
            ],
            "contextNote": "'Kereltje' en 'snotneus' klinken hier neerbuigend. Grijp laat zijn masker vallen."
          },
          {
            "speaker": "chapla",
            "text": "Timur. Steek die kaart weg en stap achteruit. Traag. Niet lopen — traag.",
            "audioText": "Timur. Steek die kaart weg en stap achteruit. Traag. Niet lopen — traag.",
            "highlightWords": [
              "Steek",
              "weg",
              "achteruit",
              "Traag"
            ],
            "contextNote": "'Iets wegsteken' is Vlaams voor iets opbergen. 'Achteruit stappen' = to step back."
          }
        ],
        "dilemma": {
          "prompt": "Grijp zet een stap naar voren en steekt zijn hand uit naar de koker. Wat doet Timur?",
          "options": [
            {
              "id": "opt-1",
              "text": "Hij roept luid 'Boswachter Vera komt hier elk uur voorbij!' en stapt rustig naar zijn fiets.",
              "isCorrect": true,
              "feedback": "Slim! Timur vecht niet en rent niet — hij zorgt dat Grijp denkt dat er getuigen zijn. Precies wat je moet doen bij een vreemde die te dicht komt.",
              "xp": 30
            },
            {
              "id": "opt-2",
              "text": "Hij duwt de man weg en begint te vechten om de koker.",
              "isCorrect": false,
              "feedback": "Nooit doen. Grijp is een volwassen man met een schop; Timur is twaalf. Slimheid is hier het enige wapen.",
              "xp": 5
            },
            {
              "id": "opt-3",
              "text": "Hij geeft de kaart af en hoopt dat de man dan weggaat.",
              "isCorrect": false,
              "feedback": "Begrijpelijk als je bang bent — maar dan is de schat weg én het moeras onbeschermd. Er is een betere weg.",
              "xp": 10
            }
          ]
        },
        "quiz": [
          {
            "question": "Wie is Victor Grijp?",
            "options": [
              "Een schattenjager die de schat al twintig jaar zoekt",
              "De nieuwe boswachter",
              "Een vriend van Timurs vader"
            ],
            "correctIndex": 0,
            "explanation": "Hij loopt met een metaaldetector over de dijk en heeft een bestelwagen vol graafgerief."
          },
          {
            "question": "Grijp zegt: 'Wat een schone koker.' Wat betekent 'schoon' hier?",
            "options": [
              "Mooi",
              "Proper, niet vuil",
              "Duur"
            ],
            "correctIndex": 0,
            "explanation": "In Vlaanderen betekent 'schoon' mooi. Voor 'niet vuil' zeggen ze 'proper'."
          },
          {
            "question": "Wat waarschuwt Chapla aan Timur?",
            "options": [
              "De kaart wegsteken en traag achteruit stappen",
              "Zo snel mogelijk wegrennen",
              "De man alles vertellen"
            ],
            "correctIndex": 0,
            "explanation": "Traag bewegen laat zien dat je niet in paniek bent — en geeft je tijd om na te denken."
          },
          {
            "question": "Wat betekent 'iets wegsteken'?",
            "options": [
              "Iets opbergen, verstoppen",
              "Iets doorprikken",
              "Iets weggooien"
            ],
            "correctIndex": 0,
            "explanation": "'Wegsteken' is een heel gewoon Vlaams werkwoord voor opbergen."
          }
        ]
      },
      {
        "chapterNumber": 3,
        "title": "Drie Uur naar het Westen",
        "location": "Over de polder, van de vaart tot de ruïne",
        "narrative": "Ze reizen zoals alleen zij dat kunnen. Chapla vliegt vooruit en roept de bochten door. Timur trapt langs het jaagpad tot zijn benen branden. Bulle draaft door de weiden met Kwaks in een natte zakdoek op zijn rug, en Sterreke stapt er zwijgend achteraan, met Pieke op zijn schouder als een klein rood knoopje. Tegen de avond ligt de ruïne voor hen: drie muren, een halve toren, en klimop over alles heen. De kaart wijst niet naar de toren. De kaart wijst naar een lage heuvel ernaast, waar tussen de brandnetels een boog van bakstenen uit de grond komt. Een deur. Een ijzeren deur, roestig en zwaar, met een scharnier aan de buitenkant.",
        "dialogues": [
          {
            "speaker": "oude-kikker",
            "text": "Kwak! Dat is een ijskelder! Vroeger bewaarden ze daar ijs uit de vijver, de hele zomer lang. Koud, donker en peperduur was dat, kwak!",
            "audioText": "Kwak! Dat is een ijskelder! Vroeger bewaarden ze daar ijs uit de vijver, de hele zomer lang. Koud, donker en peperduur was dat, kwak!",
            "highlightWords": [
              "ijskelder",
              "bewaarden",
              "donker"
            ],
            "contextNote": "Een 'ijskelder' is een echte oude uitvinding: een diepe kelder waar men winterijs bewaarde tot in de zomer."
          },
          {
            "speaker": "timur",
            "text": "En kijk hier eens! Er staat iets in de steen gekapt. 'Wie... het... moeras... bewaart.' Dezelfde zin als op de kaart!",
            "audioText": "En kijk hier eens! Er staat iets in de steen gekapt. 'Wie... het... moeras... bewaart.' Dezelfde zin als op de kaart!",
            "highlightWords": [
              "steen",
              "gekapt",
              "Dezelfde"
            ],
            "contextNote": "'In steen kappen' = to carve into stone. De zin komt terug — dat is geen toeval."
          },
          {
            "speaker": "chapla",
            "text": "Ik vertrouw dat niet, Timur. Die deur hangt scheef en dat scharnier zit aan de buitenkant. Zo'n deur kan van binnenuit niet open.",
            "audioText": "Ik vertrouw dat niet, Timur. Die deur hangt scheef en dat scharnier zit aan de buitenkant. Zo'n deur kan van binnenuit niet open.",
            "highlightWords": [
              "vertrouw",
              "scheef",
              "buitenkant",
              "binnenuit"
            ],
            "contextNote": "Let op: Chapla waarschuwt letterlijk voor wat er in het volgende hoofdstuk gebeurt!"
          },
          {
            "speaker": "sterreke",
            "text": "Ik zal buiten aan de deur blijven staan. Als er iets misloopt, ben ik degene die haar opendoet.",
            "audioText": "Ik zal buiten aan de deur blijven staan. Als er iets misloopt, ben ik degene die haar opendoet.",
            "highlightWords": [
              "buiten",
              "blijven",
              "misloopt",
              "opendoet"
            ],
            "contextNote": "'Mislopen' = to go wrong. Sterreke denkt vooruit — onthoud dit goed!"
          }
        ],
        "dilemma": {
          "prompt": "Het wordt donker en de kelder is diep. Wie gaat er naar binnen, en hoe?",
          "options": [
            {
              "id": "opt-1",
              "text": "Timur en Chapla naar binnen met touw en zaklamp; Sterreke blijft buiten aan de deur; Bulle houdt de wacht op de heuvel.",
              "isCorrect": true,
              "feedback": "Uitstekend plan: licht mee, iemand buiten, en iemand die kijkt of er niemand aankomt. Zo gaan echte ontdekkers te werk.",
              "xp": 30
            },
            {
              "id": "opt-2",
              "text": "Iedereen tegelijk naar binnen, dat is het spannendst!",
              "isCorrect": false,
              "feedback": "Spannend wel — maar als de deur dichtvalt zit dan wel iedereen vast, en niemand kan hulp halen.",
              "xp": 5
            },
            {
              "id": "opt-3",
              "text": "Timur gaat alleen, de dieren wachten ver weg bij de fiets.",
              "isCorrect": false,
              "feedback": "Alleen een donkere kelder in gaan is precies wat je nooit moet doen. Chapla laat hem sowieso niet gaan.",
              "xp": 10
            }
          ]
        },
        "quiz": [
          {
            "question": "Wat is een ijskelder?",
            "options": [
              "Een diepe kelder waar men vroeger winterijs bewaarde",
              "Een kelder vol ijsjes",
              "Een koelkast van vroeger op elektriciteit"
            ],
            "correctIndex": 0,
            "explanation": "Men haalde ijs uit de vijver in de winter en bewaarde het ondergronds tot in de zomer."
          },
          {
            "question": "Waarom vertrouwt Chapla de ijzeren deur niet?",
            "options": [
              "Het scharnier zit aan de buitenkant, dus van binnen kan ze niet open",
              "Ze is te klein",
              "Er zit een slot op"
            ],
            "correctIndex": 0,
            "explanation": "Chapla waarschuwt precies voor wat er in hoofdstuk 4 gebeurt."
          },
          {
            "question": "Wat staat er in de steen bij de deur gekapt?",
            "options": [
              "Dezelfde zin als op de kaart",
              "De naam van de kasteelheer",
              "Een jaartal"
            ],
            "correctIndex": 0,
            "explanation": "'Wie het moeras bewaart...' — de zin die pas op het einde helemaal duidelijk wordt."
          },
          {
            "question": "Wat betekent 'als er iets misloopt'?",
            "options": [
              "Als er iets fout gaat",
              "Als iemand wegloopt",
              "Als het begint te regenen"
            ],
            "correctIndex": 0,
            "explanation": "'Mislopen' = to go wrong. En het loopt inderdaad mis..."
          }
        ]
      },
      {
        "chapterNumber": 4,
        "title": "De Deur Gaat Dicht",
        "location": "In de ijskelder onder Hof ter Vloed, nacht",
        "narrative": "Binnen is het koud als november. De zaklamp glijdt over bakstenen gewelven, over een put in het midden, over iets in de hoek dat glimt. Timur is nog aan het roepen — 'Chapla! Chapla, hier ligt een KIST!' — wanneer boven hun hoofd de scharnieren gillen. Een streep licht wordt smaller. En smaller. Dan is er een dreun die door de stenen trilt, en daarna nog een: iemand rolt een blok steen tegen de deur. Timurs zaklamp beeft. Buiten klinkt de stem van Victor Grijp, rustig en vriendelijk, alsof hij het weer bespreekt.",
        "dialogues": [
          {
            "speaker": "grijp",
            "text": "Blijf daar maar wat zitten, kereltje. Ik neem de kaart mee. Niemand weet dat gij hier zijt. Niemand komt hier ooit. Dat is spijtig voor u, maar zo is het leven.",
            "audioText": "Blijf daar maar wat zitten, kereltje. Ik neem de kaart mee. Niemand weet dat gij hier zijt. Niemand komt hier ooit. Dat is spijtig voor u, maar zo is het leven.",
            "highlightWords": [
              "Blijf",
              "kaart",
              "Niemand",
              "spijtig"
            ],
            "contextNote": "'Spijtig' = a pity. Grijp zegt de ergste dingen op de vriendelijkste toon — dat maakt hem zo eng."
          },
          {
            "speaker": "timur",
            "text": "Doe open! Doe die deur open! Chapla, ik krijg hem niet los, hij zit muurvast! Ik... ik krijg geen lucht van de schrik.",
            "audioText": "Doe open! Doe die deur open! Chapla, ik krijg hem niet los, hij zit muurvast! Ik... ik krijg geen lucht van de schrik.",
            "highlightWords": [
              "open",
              "muurvast",
              "lucht",
              "schrik"
            ],
            "contextNote": "'Muurvast' = stuck solid. 'Ik heb schrik' is het Vlaamse 'I'm scared' — hier: 'geen lucht van de schrik'."
          },
          {
            "speaker": "chapla",
            "text": "Timur. Kijk naar mij. Adem in. En uit. Wij zijn nog niet verloren — Sterreke staat buiten, en Bulle ligt op die heuvel. Wij moeten hen alleen laten weten waar wij zijn.",
            "audioText": "Timur. Kijk naar mij. Adem in. En uit. Wij zijn nog niet verloren — Sterreke staat buiten, en Bulle ligt op die heuvel. Wij moeten hen alleen laten weten waar wij zijn.",
            "highlightWords": [
              "Adem",
              "verloren",
              "buiten",
              "weten"
            ],
            "contextNote": "Chapla doet precies het juiste: eerst rustig ademen, dan pas denken. 'Verloren' = lost."
          },
          {
            "speaker": "pieke",
            "text": "Ik zie een gaatje! Daar bovenaan, waar de mortel weg is! Het is te klein voor jullie... maar niet voor mij!",
            "audioText": "Ik zie een gaatje! Daar bovenaan, waar de mortel weg is! Het is te klein voor jullie... maar niet voor mij!",
            "highlightWords": [
              "gaatje",
              "bovenaan",
              "klein"
            ],
            "contextNote": "'Een gaatje' is het verkleinwoord van 'gat'. Het kleinste dier vindt de kleinste uitweg."
          }
        ],
        "dilemma": {
          "prompt": "Pieke kan door het luchtgat naar buiten. Wat is de beste boodschap die zij moet doorgeven?",
          "options": [
            {
              "id": "opt-1",
              "text": "'Sterreke: deur op de heuvel, blok steen ervoor. Bulle: graven aan de zijkant. Vera halen bij de dijk.'",
              "isCorrect": true,
              "feedback": "Perfect: wát er is, wáár het is, en wie wat moet doen. Een goede noodboodschap is kort en precies.",
              "xp": 30
            },
            {
              "id": "opt-2",
              "text": "'Help! Help! Er is iets ergs gebeurd!'",
              "isCorrect": false,
              "feedback": "Iedereen schrikt, maar niemand weet waarheen of wat te doen. Bij hulp roepen hoort altijd: waar, en wat.",
              "xp": 10
            },
            {
              "id": "opt-3",
              "text": "Pieke gaat zelf de kist proberen open te maken.",
              "isCorrect": false,
              "feedback": "Lief bedoeld, maar een lieveheersbeestje krijgt geen kist open. Haar échte kracht is dat zij naar buiten kan.",
              "xp": 5
            }
          ]
        },
        "quiz": [
          {
            "question": "Hoe sluit Grijp hen op?",
            "options": [
              "Hij duwt de deur dicht en rolt er een blok steen voor",
              "Hij doet de deur op slot met een sleutel",
              "Hij gooit de put dicht"
            ],
            "correctIndex": 0,
            "explanation": "Daarom kan de deur van binnenuit niet open — precies wat Chapla in hoofdstuk 3 al zag."
          },
          {
            "question": "Wat doet Chapla als Timur in paniek raakt?",
            "options": [
              "Ze laat hem eerst rustig ademen en dan pas denken",
              "Ze roept dat hij harder moet duwen",
              "Ze wordt zelf ook bang"
            ],
            "correctIndex": 0,
            "explanation": "'Adem in. En uit.' Rustig worden is de eerste stap uit elke paniek."
          },
          {
            "question": "Wie vindt de uitweg?",
            "options": [
              "Pieke, door een gaatje waar de mortel weg is",
              "Timur, met zijn touw",
              "Bulle, door de deur"
            ],
            "correctIndex": 0,
            "explanation": "Het kleinste dier van het moeras past door het luchtgat."
          },
          {
            "question": "Wat betekent 'de deur zit muurvast'?",
            "options": [
              "Hij zit helemaal vast en beweegt niet",
              "Hij zit in de muur ingebouwd",
              "Hij is pas geschilderd"
            ],
            "correctIndex": 0,
            "explanation": "'Muurvast' gebruik je voor iets dat totaal niet meer beweegt."
          }
        ]
      },
      {
        "chapterNumber": 5,
        "title": "De Kist en de Vrijbrief",
        "location": "In en onder de ijskelder, tegen de dageraad",
        "narrative": "Terwijl Pieke door de nacht vliegt, wacht Chapla niet af. Ze doet wat een reiger het beste kan: stilstaan en kijken. En dan ziet ze het — het water in de put staat niet stil, het draait traag rond. Waar water wegloopt, is een weg. Timur bindt zijn touw om een steen, ze breken de rotte houten deksel van de put en vinden een afvoerkanaal, laag en nat, dat schuin omhoog loopt naar het licht. Maar eerst maken ze de kist open. Er liggen munten in, honderden, goud dat oplicht in de zaklamp alsof het gisteren gepoetst is. En bovenop de munten ligt een plat pakje in geolied leer: een perkament met een groot rood zegel eraan.",
        "dialogues": [
          {
            "speaker": "timur",
            "text": "Chapla, dit is goud! Echt goud! Wij zijn rijk! Wij... wij zijn zo rijk!",
            "audioText": "Chapla, dit is goud! Echt goud! Wij zijn rijk! Wij... wij zijn zo rijk!",
            "highlightWords": [
              "goud",
              "rijk"
            ],
            "contextNote": "'Rijk' = rich. Timur is twaalf; natuurlijk denkt hij eerst aan de munten."
          },
          {
            "speaker": "chapla",
            "text": "Lees dat papier eens, Timur. Traag. Ik denk dat dát de echte schat is.",
            "audioText": "Lees dat papier eens, Timur. Traag. Ik denk dat dát de echte schat is.",
            "highlightWords": [
              "Lees",
              "papier",
              "echte"
            ],
            "contextNote": "Chapla kan niet lezen — maar ze weet wanneer een papier belangrijker is dan goud."
          },
          {
            "speaker": "timur",
            "text": "'Vrijbrief van het Moeras, anno 1698. Dit moerasland blijft voor altijd van de vogels en van het volk. Niemand mag hier graven, droogleggen of bouwen.' ... Chapla! Dit beschermt jouw moeras!",
            "audioText": "'Vrijbrief van het Moeras, anno 1698. Dit moerasland blijft voor altijd van de vogels en van het volk. Niemand mag hier graven, droogleggen of bouwen.' ... Chapla! Dit beschermt jouw moeras!",
            "highlightWords": [
              "Vrijbrief",
              "altijd",
              "graven",
              "beschermt"
            ],
            "contextNote": "'Een vrijbrief' is een oud officieel document met rechten erin. 'Drooggelegd' = drained."
          },
          {
            "speaker": "chapla",
            "text": "Nu snap ik die zin. 'Wie het moeras bewaart, bewaart de schat.' Ze hebben het goud bij de vrijbrief gelegd zodat iemand de brief zou komen halen. Neem beide mee. En nu naar dat kanaal.",
            "audioText": "Nu snap ik die zin. 'Wie het moeras bewaart, bewaart de schat.' Ze hebben het goud bij de vrijbrief gelegd zodat iemand de brief zou komen halen. Neem beide mee. En nu naar dat kanaal.",
            "highlightWords": [
              "snap",
              "bewaart",
              "beide",
              "kanaal"
            ],
            "contextNote": "'Ik snap het' = I get it. Nu klopt alles: het goud was het lokaas voor de brief."
          },
          {
            "speaker": "chapla",
            "text": "Hoor je dat? Dat is Bulle die graaft. En dat gepiep... dat is Sterreke die die steen wegduwt. Kom, Timur. Naar het licht.",
            "audioText": "Hoor je dat? Dat is Bulle die graaft. En dat gepiep... dat is Sterreke die die steen wegduwt. Kom, Timur. Naar het licht.",
            "highlightWords": [
              "Hoor",
              "graaft",
              "wegduwt",
              "licht"
            ],
            "contextNote": "Pieke's boodschap is aangekomen — iedereen doet precies wat er nodig is."
          }
        ],
        "dilemma": {
          "prompt": "Het afvoerkanaal is nauw en Timur moet zijn rugzak achterlaten. Hij kan maar één ding meenemen. Wat neemt hij?",
          "options": [
            {
              "id": "opt-1",
              "text": "De vrijbrief. Het goud kunnen ze later halen — dit papier redt het hele moeras.",
              "isCorrect": true,
              "feedback": "Juist! En het is ook slim: zonder de vrijbrief kan Grijp gewoon blijven graven. Papier verslaat hier goud.",
              "xp": 35
            },
            {
              "id": "opt-2",
              "text": "Zoveel munten als in zijn zakken passen.",
              "isCorrect": false,
              "feedback": "Verleidelijk! Maar zware zakken in een nauw kanaal zijn gevaarlijk, en de brief is duizend keer meer waard.",
              "xp": 10
            },
            {
              "id": "opt-3",
              "text": "De hele kist meeslepen.",
              "isCorrect": false,
              "feedback": "De kist is te groot voor het kanaal. Soms is kiezen wat je achterlaat het belangrijkste van een avontuur.",
              "xp": 5
            }
          ]
        },
        "quiz": [
          {
            "question": "Hoe vindt Chapla de uitweg?",
            "options": [
              "Ze ziet dat het water in de put wegdraait, dus daar is een afvoer",
              "Ze hoort Bulle door de muur",
              "Ze breekt de deur open"
            ],
            "correctIndex": 0,
            "explanation": "'Waar water wegloopt, is een weg' — een reiger die stilstaat en kijkt, ziet zulke dingen."
          },
          {
            "question": "Wat ligt er bovenop de munten in de kist?",
            "options": [
              "Een perkament met een rood zegel: de vrijbrief",
              "Een tweede kaart",
              "Een gouden kroon"
            ],
            "correctIndex": 0,
            "explanation": "De vrijbrief uit 1698 blijkt de échte schat te zijn."
          },
          {
            "question": "Wat staat er in de vrijbrief?",
            "options": [
              "Het moeras blijft voor altijd van de vogels en het volk",
              "Wie het goud vindt, mag het houden",
              "De kasteelheer bezit het moeras"
            ],
            "correctIndex": 0,
            "explanation": "Niemand mag er graven, droogleggen of bouwen — dat maakt Grijps plannen waardeloos."
          },
          {
            "question": "Waarom lag het goud bij de brief?",
            "options": [
              "Als lokaas, zodat iemand de brief zou komen halen",
              "Om de brief zwaar te maken",
              "Bij toeval"
            ],
            "correctIndex": 0,
            "explanation": "'Wie het moeras bewaart, bewaart de schat' — precies wat de zin bedoelde."
          }
        ]
      },
      {
        "chapterNumber": 6,
        "title": "Terug naar het Moeras",
        "location": "Hof ter Vloed en het Grote Moeras, zonsopgang en later",
        "narrative": "Ze kruipen het kanaal uit in het natte gras, zwart van het slijk, en het eerste wat ze zien is Bulle met modder tot aan zijn oren, en Sterreke met zijn schouder nog tegen het blok steen. Op het pad staat een groene jeep. Boswachter Vera houdt een metaaldetector vast alsof ze hem in beslag heeft genomen — want dat heeft ze ook. Victor Grijp zit op het achterbankje en zegt niets meer. Hij zei eerst heel veel: dat hij een vergunning had, dat het zijn grond was, dat er kinderen zaten te liegen. Toen legde Timur de vrijbrief op de motorkap. En daarna zei Grijp niets meer.",
        "dialogues": [
          {
            "speaker": "vera",
            "text": "Een reiger, een everzwijn, een kikker in een zakdoek en dát ding daar. Weet ge wat, jongen? Ik ga niet eens vragen. Ik heb alles gezien wat ik moet zien.",
            "audioText": "Een reiger, een everzwijn, een kikker in een zakdoek en dát ding daar. Weet ge wat, jongen? Ik ga niet eens vragen. Ik heb alles gezien wat ik moet zien.",
            "highlightWords": [
              "reiger",
              "everzwijn",
              "vragen",
              "gezien"
            ],
            "contextNote": "Vera gelooft Timur meteen. In het Vlaams zegt men vaak 'weet ge wat' als inleiding — 'you know what'."
          },
          {
            "speaker": "timur",
            "text": "Mevrouw, dat goud mag naar het museum. Maar de vrijbrief... die moet naar het gemeentehuis. Zodat niemand ooit nog in het moeras kan graven.",
            "audioText": "Mevrouw, dat goud mag naar het museum. Maar de vrijbrief... die moet naar het gemeentehuis. Zodat niemand ooit nog in het moeras kan graven.",
            "highlightWords": [
              "museum",
              "gemeentehuis",
              "graven"
            ],
            "contextNote": "'Het gemeentehuis' = the town hall, waar officiële documenten bewaard worden."
          },
          {
            "speaker": "oude-kikker",
            "text": "Kwak! Driehonderd jaar heeft dat papier daar liggen wachten. En het wacht op een kikker, een reiger en een jongen uit een ander land. Kwak kwak!",
            "audioText": "Kwak! Driehonderd jaar heeft dat papier daar liggen wachten. En het wacht op een kikker, een reiger en een jongen uit een ander land. Kwak kwak!",
            "highlightWords": [
              "Driehonderd",
              "wachten",
              "ander land"
            ],
            "contextNote": "Kwaks vat het hele verhaal samen zoals alleen een oude kikker dat kan."
          },
          {
            "speaker": "chapla",
            "text": "Timur. Kijk eens rond. Dat riet, dat water, die nesten — dat blijft nu. Voor altijd. Dat hebben wij gedaan, gij en ik.",
            "audioText": "Timur. Kijk eens rond. Dat riet, dat water, die nesten — dat blijft nu. Voor altijd. Dat hebben wij gedaan, gij en ik.",
            "highlightWords": [
              "riet",
              "nesten",
              "altijd",
              "gedaan"
            ],
            "contextNote": "'Gij en ik' klinkt plechtig en warm tegelijk — Chapla gebruikt het op haar mooiste momenten."
          },
          {
            "speaker": "timur",
            "text": "De vakantie is bijna gedaan, hè. Ik moet morgen naar huis. Maar ik kom terug, Chapla. Elke zomer. Dat heb ik toch beloofd?",
            "audioText": "De vakantie is bijna gedaan, hè. Ik moet morgen naar huis. Maar ik kom terug, Chapla. Elke zomer. Dat heb ik toch beloofd?",
            "highlightWords": [
              "vakantie",
              "gedaan",
              "terug",
              "beloofd"
            ],
            "contextNote": "In Vlaanderen zegt men 'de vakantie is gedaan' voor 'the holiday is over'. En Timur houdt zijn beloftes."
          },
          {
            "speaker": "chapla",
            "text": "Dat hebt ge. En ik sta hier, op één poot, aan de rand van het riet. Zoals altijd. Tot de volgende zomer, mijn vriend.",
            "audioText": "Dat hebt ge. En ik sta hier, op één poot, aan de rand van het riet. Zoals altijd. Tot de volgende zomer, mijn vriend.",
            "highlightWords": [
              "poot",
              "rand",
              "volgende",
              "vriend"
            ],
            "contextNote": "Het verhaal eindigt precies zoals het allereerste verhaal begon: een reiger op één poot. Maar nu niet meer alleen."
          }
        ],
        "quiz": [
          {
            "question": "Wat maakt dat Grijp niets meer te zeggen heeft?",
            "options": [
              "Timur legt de vrijbrief op de motorkap",
              "Bulle jaagt hem weg",
              "Hij bekent alles vrijwillig"
            ],
            "correctIndex": 0,
            "explanation": "Het papier bewijst dat niemand in het moeras mag graven — zijn 'vergunning' is waardeloos."
          },
          {
            "question": "Wat stelt Timur voor met de schat?",
            "options": [
              "Het goud naar het museum, de vrijbrief naar het gemeentehuis",
              "Alles verkopen en delen",
              "Alles terugleggen in de kelder"
            ],
            "correctIndex": 0,
            "explanation": "Zo is het goud veilig én is het moeras officieel beschermd."
          },
          {
            "question": "Wat betekent 'de vakantie is gedaan'?",
            "options": [
              "De vakantie is voorbij",
              "De vakantie is geslaagd",
              "De vakantie begint"
            ],
            "correctIndex": 0,
            "explanation": "In Vlaanderen betekent 'gedaan' hier: afgelopen, voorbij."
          },
          {
            "question": "Hoe eindigt het verhaal?",
            "options": [
              "Chapla staat weer op één poot aan het riet, maar niet meer alleen",
              "Chapla vliegt weg naar het zuiden",
              "Timur blijft in het moeras wonen"
            ],
            "correctIndex": 0,
            "explanation": "Precies het beeld waarmee het allereerste Chapla-verhaal begon — maar nu met vrienden."
          },
          {
            "question": "Wie heeft in dit verhaal iedereen gered?",
            "options": [
              "Pieke, het kleinste dier, door het luchtgat",
              "Grijp, per ongeluk",
              "Vera, meteen aan het begin"
            ],
            "correctIndex": 0,
            "explanation": "Zonder Pieke's boodschap had niemand geweten waar ze waren."
          }
        ]
      }
    ]
  }
];
