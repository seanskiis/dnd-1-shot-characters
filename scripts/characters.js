window.CHARACTERS = [
  {
    id: "fallow",
    name: "Fallow",
    race: "Dark Elf / Drow",
    className: "Sorcerer",
    image: "assets/characters/fallow.png",
    sheet: "assets/sheets/fallow.pdf",
    tagline: "A dramatic magic-user who talks well and hits hard with spells.",
    description:
      "Fallow is a naturally magical character who relies on charm, force of personality, and destructive spellcasting. As a Dark Elf, Fallow can see extremely well in darkness, resists being magically charmed, and cannot be magically put to sleep.",
    strengths: [
      "Very strong magical attacker",
      "Excellent in darkness",
      "Very persuasive, intimidating, or deceptive",
      "Has tougher-than-average defenses for this type of spellcaster"
    ],
    tradeoffs: [
      "Not physically strong",
      "Has limited weapon/armor options",
      "New players may need help choosing when to use spells"
    ],
    playstyle:
      "A dramatic magic-user who talks well, hits hard with spells, and does best staying out of the middle of melee combat."
  },
  {
    id: "torq",
    name: "Torq",
    race: "Forest Gnome",
    className: "Paladin",
    image: "assets/characters/torq.png",
    sheet: "assets/sheets/torq.pdf",
    tagline: "A small but sturdy holy warrior built to protect allies.",
    description:
      "Torq is a small but sturdy holy warrior. Paladins are protective, brave, and can heal others. As a Forest Gnome, Torq has sharp magical instincts, can see in the dark, and has a small natural illusion trick.",
    strengths: [
      "Durable and armored",
      "Can heal",
      "Good at resisting magic",
      "Strong personality and good instincts"
    ],
    tradeoffs: [
      "Not especially fast or agile",
      "Less physically imposing than larger warrior characters",
      "Has fewer flashy offensive options at the start"
    ],
    playstyle:
      "A defensive protector who can stand near the front, help allies, and survive dangerous situations."
  },
  {
    id: "pallaq",
    name: "Pallaq",
    race: "Tiefling",
    className: "Druid",
    image: "assets/characters/pallaq.png",
    sheet: "assets/sheets/pallaq.pdf",
    tagline: "A flexible nature-mage with infernal resilience.",
    description:
      "Pallaq is a nature-based spellcaster with some infernal traits. Tieflings can see in the dark and naturally resist fire. Druids use nature magic, healing, elemental effects, and survival-focused spells.",
    strengths: [
      "Can cast useful nature magic",
      "Resistant to fire",
      "Good mix of wisdom, awareness, and flexibility",
      "Has darkvision"
    ],
    tradeoffs: [
      "Not physically strong",
      "Spell choices can be a little complex for new players",
      "Not as durable as a dedicated warrior"
    ],
    playstyle:
      "A flexible nature-mage who can heal, attack with spells, and solve wilderness or survival problems."
  },
  {
    id: "hammer",
    name: "Hammer",
    race: "Half-Orc",
    className: "Bard",
    image: "assets/characters/hammer.png",
    sheet: "assets/sheets/hammer.pdf",
    claimedBy: "Kevin",
    tagline: "A tough performer who helps the whole group shine.",
    description:
      "Hammer is a performer, talker, and support character with a tough Half-Orc body. Bards use music, words, and magic to inspire allies, distract enemies, and solve social problems.",
    strengths: [
      "Great at performing, sneaking, and social situations",
      "Can boost allies",
      "Harder to kill than most soft spellcasters",
      "Can see in the dark"
    ],
    tradeoffs: [
      "Not as magically explosive as a wizard or sorcerer",
      "Not as physically powerful as a barbarian or fighter",
      "Works best when helping the whole group, not acting alone"
    ],
    playstyle:
      "A charismatic support character who helps everyone else shine while still being surprisingly durable."
  },
  {
    id: "kallax",
    name: "Kallax",
    race: "Dragonborn",
    className: "Fighter",
    image: "assets/characters/kallax.png",
    sheet: "assets/sheets/kallax.pdf",
    tagline: "A heavily armored front-line warrior with icy dragon power.",
    description:
      "Kallax is a heavily armored front-line warrior with dragon-like traits. This Dragonborn has White Dragon ancestry, a cold-based breath attack, and resistance to cold damage.",
    strengths: [
      "Very durable",
      "Strong with weapons and armor",
      "Can heal himself a little during battle",
      "Has a breath attack for groups of enemies",
      "Resistant to cold"
    ],
    tradeoffs: [
      "Not very persuasive or charming",
      "Fewer magical tricks",
      "Mostly solves problems through strength, weapons, and toughness"
    ],
    playstyle:
      "A straightforward battle character: stand up front, take hits, hit back, and breathe icy dragon power when needed."
  },
  {
    id: "yolanda",
    name: "Yolanda",
    race: "Human",
    className: "Druid",
    image: "assets/characters/yolanda.png",
    sheet: "assets/sheets/yolanda.pdf",
    tagline: "A wise, observant spellcaster with nature magic and healing.",
    description:
      "Yolanda is a wise nature spellcaster. Humans are flexible and broadly capable, while druids bring healing, nature magic, and strong awareness.",
    strengths: [
      "Very aware and perceptive",
      "Strong nature magic",
      "Useful in exploration and survival situations",
      "Can heal and support allies"
    ],
    tradeoffs: [
      "Physically weak",
      "More spell choices to manage",
      "Not meant to stand in the middle of a weapon fight"
    ],
    playstyle:
      "A wise, observant spellcaster who helps the party through healing, nature magic, and problem-solving."
  },
  {
    id: "maax",
    name: "Maax",
    race: "Human",
    className: "Sorcerer",
    image: "assets/characters/maax.png",
    sheet: "assets/sheets/maax.pdf",
    tagline: "A magical powerhouse fueled by inner power and charisma.",
    description:
      "Maax is a naturally gifted spellcaster with strong endurance for a magic-user. Sorcerers do not study magic like wizards; their magic comes from within.",
    strengths: [
      "Strong spellcasting",
      "Tougher than many fragile spellcasters",
      "Good at intimidation, deception, and magical presence",
      "Human flexibility makes the character broadly capable"
    ],
    tradeoffs: [
      "Not especially wise or perceptive",
      "Not a front-line weapon user",
      "Spellcasters require more learning than weapon-focused characters"
    ],
    playstyle:
      "A magical powerhouse who uses inner power and charisma to blast enemies or influence situations."
  },
  {
    id: "durg",
    name: "Durg",
    race: "Rock Gnome",
    className: "Wizard",
    image: "assets/characters/durg.png",
    sheet: "assets/sheets/durg.pdf",
    tagline: "A clever inventor-type magic user and tactical problem-solver.",
    description:
      "Durg is a clever inventor-type magic user. Rock Gnomes are small, smart, resistant to magic, and good with tinkering. Wizards are the classic book-smart spellcasters.",
    strengths: [
      "Extremely smart",
      "Strong magical knowledge",
      "Can see in the dark",
      "Good at investigation and problem-solving",
      "Resistant to many magical effects"
    ],
    tradeoffs: [
      "Physically fragile",
      "Not charming or intimidating",
      "Wizard is one of the more complex classes for a new player"
    ],
    playstyle:
      "A tactical problem-solver who uses careful spell choices, knowledge, and cleverness rather than brute force."
  },
  {
    id: "heath",
    name: "Heath",
    race: "Lightfoot Halfling",
    className: "Ranger",
    image: "assets/characters/heath.png",
    sheet: "assets/sheets/heath.pdf",
    tagline: "A mobile scout who sneaks, shoots, and tracks danger.",
    description:
      "Heath is a nimble wilderness scout. Halflings are small, lucky, brave, and good at slipping through danger. Rangers are hunters, trackers, and survival experts.",
    strengths: [
      "Very agile and sneaky",
      "Good with ranged attacks",
      "Excellent at survival, scouting, and noticing danger",
      "Naturally lucky",
      "Can hide behind larger allies more easily"
    ],
    tradeoffs: [
      "Small and not built for heavy weapons",
      "Less magically flashy at this level",
      "Not as tough as a fighter or barbarian"
    ],
    playstyle:
      "A mobile scout who sneaks, shoots, tracks enemies, and helps the group navigate dangerous places."
  },
  {
    id: "vartak",
    name: "Vartak",
    race: "Wood Elf",
    className: "Rogue",
    image: "assets/characters/vartak.png",
    sheet: "assets/sheets/vartak.pdf",
    claimedBy: "Kelly",
    tagline: "A fast, sneaky, sharp-eyed scout who strikes from position.",
    description:
      "Vartak is a fast, sneaky, sharp-eyed scout. Wood Elves move quickly, see in the dark, resist charm magic, and are naturally good at hiding in natural environments. Rogues are experts at stealth, traps, and striking vulnerable enemies.",
    strengths: [
      "Very sneaky",
      "Very agile",
      "Excellent scout",
      "Great at noticing things",
      "Can hit hard when attacking from the right position",
      "Can see in the dark"
    ],
    tradeoffs: [
      "Not built to take repeated heavy hits",
      "Needs positioning and clever play",
      "Less useful in a straight-up slugfest than a fighter or barbarian"
    ],
    playstyle:
      "A stealthy scout/thief type who sneaks ahead, spots danger, and strikes at the perfect moment."
  },
  {
    id: "perigord",
    name: "Perigord",
    race: "Tiefling",
    className: "Rogue",
    image: "assets/characters/perigord.png",
    sheet: "assets/sheets/perigord.pdf",
    claimedBy: "Chris",
    tagline: "A clever infiltrator with fire resistance and precise hands.",
    description:
      "Perigord is a sneaky Tiefling with infernal traits. Tieflings can see in the dark and resist fire, while rogues specialize in stealth, precision, and skills.",
    strengths: [
      "Very good with quick hands and precision work",
      "Can see in the dark",
      "Resistant to fire",
      "Useful for scouting, locks, traps, and ambushes",
      "More socially balanced than some rogues"
    ],
    tradeoffs: [
      "Not heavily armored",
      "Needs clever positioning in fights",
      "Less naturally stealthy than the Wood Elf rogue, but has better fire resistance"
    ],
    playstyle:
      "A clever infiltrator who is good at sneaking, trickery, and striking enemies when they are vulnerable."
  },
  {
    id: "kassuid-stormflayer",
    name: "Kassuid Stormflayer",
    race: "Mountain Dwarf",
    className: "Barbarian",
    image: "assets/characters/kassuid-stormflayer.png",
    sheet: "assets/sheets/kassuid-stormflayer.pdf",
    tagline: "A tough brawler who absorbs damage and hits hard.",
    description:
      "Kassuid Stormflayer is a tough, strong, hard-hitting warrior. Mountain Dwarves are sturdy, resilient, and comfortable with armor and weapons. Barbarians are aggressive front-line fighters who become much harder to hurt when enraged.",
    strengths: [
      "Extremely strong",
      "Very durable",
      "Can take heavy punishment",
      "Good in direct physical fights",
      "Can see in the dark",
      "Resistant to poison"
    ],
    tradeoffs: [
      "Not good at social situations",
      "Limited magic or subtlety",
      "Best option is often \"charge in and hit it\""
    ],
    playstyle:
      "A tough brawler who absorbs damage, hits hard, and keeps fighting when others would drop."
  },
  {
    id: "zavog",
    name: "Zavog",
    race: "Half-Orc",
    className: "Fighter",
    image: "assets/characters/zavog.png",
    sheet: "assets/sheets/zavog.pdf",
    claimedBy: "Meredith",
    tagline: "A classic powerful warrior and one of the easiest beginner picks.",
    description:
      "Zavog is a classic powerful warrior. Half-Orcs are strong, intimidating, hard to kill, and dangerous with heavy weapon hits. Fighters are the most straightforward weapon-focused class.",
    strengths: [
      "Very strong",
      "Durable",
      "Simple and reliable in combat",
      "Can heal himself a little",
      "Can see in the dark",
      "Has a \"barely stay standing\" survival trait when he would otherwise fall"
    ],
    tradeoffs: [
      "Not charming or subtle",
      "Few magical or social tools",
      "More focused on combat than problem-solving"
    ],
    playstyle:
      "One of the best beginner picks: strong, direct, reliable, and easy to understand."
  },
  {
    id: "trap",
    name: "Trap",
    race: "Stout Halfling",
    className: "Barbarian",
    image: "assets/characters/trap.png",
    sheet: "assets/sheets/trap.pdf",
    tagline: "A small, scrappy, lucky front-line warrior.",
    description:
      "Trap is an unusual combination: a small, lucky Halfling who fights like a raging front-line warrior. Stout Halflings are tougher than other Halflings and resist poison. Barbarians become very hard to hurt when enraged.",
    strengths: [
      "Strong for a small character",
      "Surprisingly tough",
      "Naturally lucky",
      "Brave against fear",
      "Resistant to poison",
      "Good at quick hands and some clever skill work"
    ],
    tradeoffs: [
      "Small size limits some weapon choices",
      "Not as overwhelmingly strong as the dwarf barbarian",
      "Barbarian rage is simple but very combat-focused"
    ],
    playstyle:
      "A fun contrast character: small, scrappy, lucky, and much harder to kill than enemies expect."
  },
  {
    id: "naenelis",
    name: "Naenelis",
    race: "High Elf",
    className: "Wizard",
    image: "assets/characters/naenelis.png",
    sheet: "assets/sheets/naenelis.pdf",
    tagline: "A smart, traditional magic-user for careful planning.",
    description:
      "Naenelis is a classic refined spellcaster: smart, observant, and magically talented. High Elves can see in the dark, resist charm magic, do not sleep normally, and know a little extra magic.",
    strengths: [
      "Extremely intelligent",
      "Strong spellcasting",
      "Great at knowledge, investigation, and magical problem-solving",
      "Can see in the dark",
      "Has extra elven magical talent"
    ],
    tradeoffs: [
      "Physically fragile",
      "Not strong",
      "Wizard is more complex because spell choices matter"
    ],
    playstyle:
      "A smart, traditional magic-user who rewards careful planning and creative spell use."
  },
  {
    id: "klara",
    name: "Klara",
    race: "Dragonborn",
    className: "Cleric",
    image: "assets/characters/klara.png",
    sheet: "assets/sheets/klara.pdf",
    claimedBy: "Jess",
    tagline: "A protective healer with dragon flavor.",
    description:
      "Klara is a holy spellcaster with dragon-like traits. This Dragonborn has Black Dragon ancestry, an acid breath attack, and resistance to acid damage. Clerics are divine magic users who can heal, protect, and still fight when needed.",
    strengths: [
      "Can heal and support allies",
      "More durable than many spellcasters",
      "Has acid breath for offense",
      "Resistant to acid",
      "Strong instincts and presence",
      "Good beginner spellcaster because the role is clear: protect, heal, help"
    ],
    tradeoffs: [
      "Not agile",
      "Spell choices still add complexity",
      "Less purely destructive than a sorcerer or wizard"
    ],
    playstyle:
      "A protective healer with dragon flavor: support the group, survive danger, and use divine magic."
  }
];
