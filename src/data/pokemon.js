const pokemon = [
  // Gen 1
  {
    "ename": "Bulbasaur",
    "id": "001",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Ivysaur",
    "id": "002",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Venusaur",
    "id": "003",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Charmander",
    "id": "004",
    "type": ["fire"]
  },
  {
    "ename": "Charmeleon",
    "id": "005",
    "type": ["fire"]
  },
  {
    "ename": "Charizard",
    "id": "006",
    "type": ["fire", "flying"]
  },
  {
    "ename": "Squirtle",
    "id": "007",
    "type": ["water"]
  },
  {
    "ename": "Wartortle",
    "id": "008",
    "type": ["water"]
  },
  {
    "ename": "Blastoise",
    "id": "009",
    "type": ["water"]
  },
  {
    "ename": "Caterpie",
    "id": "010",
    "type": ["bug"]
  },
  {
    "ename": "Metapod",
    "id": "011",
    "type": ["bug"]
  },
  {
    "ename": "Butterfree",
    "id": "012",
    "type": ["bug", "flying"]
  },
  {
    "ename": "Weedle",
    "id": "013",
    "type": ["bug", "poison"]
  },
  {
    "ename": "Kakuna",
    "id": "014",
    "type": ["bug", "poison"]
  },
  {
    "ename": "Beedrill",
    "id": "015",
    "type": ["bug", "poison"]
  },
  {
    "ename": "Pidgey",
    "id": "016",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Pidgeotto",
    "id": "017",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Pidgeot",
    "id": "018",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Rattata",
    "id": "019",
    "type": ["normal"]
  },
  {
    "ename": "Raticate",
    "id": "020",
    "type": ["normal"]
  },
  {
    "ename": "Spearow",
    "id": "021",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Fearow",
    "id": "022",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Ekans",
    "id": "023",
    "type": ["poison"]
  },
  {
    "ename": "Arbok",
    "id": "024",
    "type": ["poison"]
  },
  {
    "ename": "Pikachu",
    "id": "025",
    "type": ["electric"]
  },
  {
    "ename": "Raichu",
    "id": "026",
    "type": ["electric"]
  },
  {
    "ename": "Sandshrew",
    "id": "027",
    "type": ["ground"]
  },
  {
    "ename": "Sandslash",
    "id": "028",
    "type": ["ground"]
  },
  {
    "ename": "Nidoran\u2640",
    "flatName": "Nidoran",
    "id": "029",
    "type": ["poison"]
  },
  {
    "ename": "Nidorina",
    "id": "030",
    "type": ["poison"]
  },
  {
    "ename": "Nidoqueen",
    "id": "031",
    "type": ["poison", "ground"]
  },
  {
    "ename": "Nidoran\u2642",
    "flatName": "Nidoran",
    "id": "032",
    "type": ["poison"]
  },
  {
    "ename": "Nidorino",
    "id": "033",
    "type": ["poison"]
  },
  {
    "ename": "Nidoking",
    "id": "034",
    "type": ["poison", "ground"]
  },
  {
    "ename": "Clefairy",
    "id": "035",
    "type": ["fairy"]
  },
  {
    "ename": "Clefable",
    "id": "036",
    "type": ["fairy"]
  },
  {
    "ename": "Vulpix",
    "id": "037",
    "type": ["fire"]
  },
  {
    "ename": "Ninetales",
    "id": "038",
    "type": ["fire"]
  },
  {
    "ename": "Jigglypuff",
    "id": "039",
    "type": ["normal", "fairy"]
  },
  {
    "ename": "Wigglytuff",
    "id": "040",
    "type": ["normal", "fairy"]
  },
  {
    "ename": "Zubat",
    "id": "041",
    "type": ["poison", "flying"]
  },
  {
    "ename": "Golbat",
    "id": "042",
    "type": ["poison", "flying"]
  },
  {
    "ename": "Oddish",
    "id": "043",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Gloom",
    "id": "044",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Vileplume",
    "id": "045",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Paras",
    "id": "046",
    "type": ["bug", "grass"]
  },
  {
    "ename": "Parasect",
    "id": "047",
    "type": ["bug", "grass"]
  },
  {
    "ename": "Venonat",
    "id": "048",
    "type": ["bug", "poison"]
  },
  {
    "ename": "Venomoth",
    "id": "049",
    "type": ["bug", "poison"]
  },
  {
    "ename": "Diglett",
    "id": "050",
    "type": ["ground"]
  },
  {
    "ename": "Dugtrio",
    "id": "051",
    "type": ["ground"]
  },
  {
    "ename": "Meowth",
    "id": "052",
    "type": ["normal"]
  },
  {
    "ename": "Persian",
    "id": "053",
    "type": ["normal"]
  },
  {
    "ename": "Psyduck",
    "id": "054",
    "type": ["water"]
  },
  {
    "ename": "Golduck",
    "id": "055",
    "type": ["water"]
  },
  {
    "ename": "Mankey",
    "id": "056",
    "type": ["fighting"]
  },
  {
    "ename": "Primeape",
    "id": "057",
    "type": ["fighting"]
  },
  {
    "ename": "Growlithe",
    "id": "058",
    "type": ["fire"]
  },
  {
    "ename": "Arcanine",
    "id": "059",
    "type": ["fire"]
  },
  {
    "ename": "Poliwag",
    "id": "060",
    "type": ["water"]
  },
  {
    "ename": "Poliwhirl",
    "id": "061",
    "type": ["water"]
  },
  {
    "ename": "Poliwrath",
    "id": "062",
    "type": ["water", "fighting"]
  },
  {
    "ename": "Abra",
    "id": "063",
    "type": ["psychic"]
  },
  {
    "ename": "Kadabra",
    "id": "064",
    "type": ["psychic"]
  },
  {
    "ename": "Alakazam",
    "id": "065",
    "type": ["psychic"]
  },
  {
    "ename": "Machop",
    "id": "066",
    "type": ["fighting"]
  },
  {
    "ename": "Machoke",
    "id": "067",
    "type": ["fighting"]
  },
  {
    "ename": "Machamp",
    "id": "068",
    "type": ["fighting"]
  },
  {
    "ename": "Bellsprout",
    "id": "069",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Weepinbell",
    "id": "070",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Victreebel",
    "id": "071",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Tentacool",
    "id": "072",
    "type": ["water", "poison"]
  },
  {
    "ename": "Tentacruel",
    "id": "073",
    "type": ["water", "poison"]
  },
  {
    "ename": "Geodude",
    "id": "074",
    "type": ["rock", "ground"]
  },
  {
    "ename": "Graveler",
    "id": "075",
    "type": ["rock", "ground"]
  },
  {
    "ename": "Golem",
    "id": "076",
    "type": ["rock", "ground"]
  },
  {
    "ename": "Ponyta",
    "id": "077",
    "type": ["fire"]
  },
  {
    "ename": "Rapidash",
    "id": "078",
    "type": ["fire"]
  },
  {
    "ename": "Slowpoke",
    "id": "079",
    "type": ["water", "psychic"]
  },
  {
    "ename": "Slowbro",
    "id": "080",
    "type": ["water", "psychic"]
  },
  {
    "ename": "Magnemite",
    "id": "081",
    "type": ["electric", "steel"]
  },
  {
    "ename": "Magneton",
    "id": "082",
    "type": ["electric", "steel"]
  },
  {
    "ename": "Farfetch'd",
    "flatName": "Farfetchd",
    "id": "083",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Doduo",
    "id": "084",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Dodrio",
    "id": "085",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Seel",
    "id": "086",
    "type": ["water"]
  },
  {
    "ename": "Dewgong",
    "id": "087",
    "type": ["water", "ice"]
  },
  {
    "ename": "Grimer",
    "id": "088",
    "type": ["poison"]
  },
  {
    "ename": "Muk",
    "id": "089",
    "type": ["poison"]
  },
  {
    "ename": "Shellder",
    "id": "090",
    "type": ["water"]
  },
  {
    "ename": "Cloyster",
    "id": "091",
    "type": ["water", "ice"]
  },
  {
    "ename": "Gastly",
    "id": "092",
    "type": ["ghost", "poison"]
  },
  {
    "ename": "Haunter",
    "id": "093",
    "type": ["ghost", "poison"]
  },
  {
    "ename": "Gengar",
    "id": "094",
    "type": ["ghost", "poison"]
  },
  {
    "ename": "Onix",
    "id": "095",
    "type": ["rock", "ground"]
  },
  {
    "ename": "Drowzee",
    "id": "096",
    "type": ["psychic"]
  },
  {
    "ename": "Hypno",
    "id": "097",
    "type": ["psychic"]
  },
  {
    "ename": "Krabby",
    "id": "098",
    "type": ["water"]
  },
  {
    "ename": "Kingler",
    "id": "099",
    "type": ["water"]
  },
  {
    "ename": "Voltorb",
    "id": "100",
    "type": ["electric"]
  },
  {
    "ename": "Electrode",
    "id": "101",
    "type": ["electric"]
  },
  {
    "ename": "Exeggcute",
    "id": "102",
    "type": ["grass", "psychic"]
  },
  {
    "ename": "Exeggutor",
    "id": "103",
    "type": ["grass", "psychic"]
  },
  {
    "ename": "Cubone",
    "id": "104",
    "type": ["ground"]
  },
  {
    "ename": "Marowak",
    "id": "105",
    "type": ["ground"]
  },
  {
    "ename": "Hitmonlee",
    "id": "106",
    "type": ["fighting"]
  },
  {
    "ename": "Hitmonchan",
    "id": "107",
    "type": ["fighting"]
  },
  {
    "ename": "Lickitung",
    "id": "108",
    "type": ["normal"]
  },
  {
    "ename": "Koffing",
    "id": "109",
    "type": ["poison"]
  },
  {
    "ename": "Weezing",
    "id": "110",
    "type": ["poison"]
  },
  {
    "ename": "Rhyhorn",
    "id": "111",
    "type": ["ground", "rock"]
  },
  {
    "ename": "Rhydon",
    "id": "112",
    "type": ["ground", "rock"]
  },
  {
    "ename": "Chansey",
    "id": "113",
    "type": ["normal"]
  },
  {
    "ename": "Tangela",
    "id": "114",
    "type": ["grass"]
  },
  {
    "ename": "Kangaskhan",
    "id": "115",
    "type": ["normal"]
  },
  {
    "ename": "Horsea",
    "id": "116",
    "type": ["water"]
  },
  {
    "ename": "Seadra",
    "id": "117",
    "type": ["water"]
  },
  {
    "ename": "Goldeen",
    "id": "118",
    "type": ["water"]
  },
  {
    "ename": "Seaking",
    "id": "119",
    "type": ["water"]
  },
  {
    "ename": "Staryu",
    "id": "120",
    "type": ["water"]
  },
  {
    "ename": "Starmie",
    "id": "121",
    "type": ["water", "psychic"]
  },
  {
    "ename": "Mr. Mime",
    "flatName": "Mr_Mime",
    "id": "122",
    "type": ["psychic", "fairy"]
  },
  {
    "ename": "Scyther",
    "id": "123",
    "type": ["bug", "flying"]
  },
  {
    "ename": "Jynx",
    "id": "124",
    "type": ["ice", "psychic"]
  },
  {
    "ename": "Electabuzz",
    "id": "125",
    "type": ["electric"]
  },
  {
    "ename": "Magmar",
    "id": "126",
    "type": ["fire"]
  },
  {
    "ename": "Pinsir",
    "id": "127",
    "type": ["bug"]
  },
  {
    "ename": "Tauros",
    "id": "128",
    "type": ["normal"]
  },
  {
    "ename": "Magikarp",
    "id": "129",
    "type": ["water"]
  },
  {
    "ename": "Gyarados",
    "id": "130",
    "type": ["water", "flying"]
  },
  {
    "ename": "Lapras",
    "id": "131",
    "type": ["water", "ice"]
  },
  {
    "ename": "Ditto",
    "id": "132",
    "type": ["normal"]
  },
  {
    "ename": "Eevee",
    "id": "133",
    "type": ["normal"]
  },
  {
    "ename": "Vaporeon",
    "id": "134",
    "type": ["water"]
  },
  {
    "ename": "Jolteon",
    "id": "135",
    "type": ["electric"]
  },
  {
    "ename": "Flareon",
    "id": "136",
    "type": ["fire"]
  },
  {
    "ename": "Porygon",
    "id": "137",
    "type": ["normal"]
  },
  {
    "ename": "Omanyte",
    "id": "138",
    "type": ["rock", "water"]
  },
  {
    "ename": "Omastar",
    "id": "139",
    "type": ["rock", "water"]
  },
  {
    "ename": "Kabuto",
    "id": "140",
    "type": ["rock", "water"]
  },
  {
    "ename": "Kabutops",
    "id": "141",
    "type": ["rock", "water"]
  },
  {
    "ename": "Aerodactyl",
    "id": "142",
    "type": ["rock", "flying"]
  },
  {
    "ename": "Snorlax",
    "id": "143",
    "type": ["normal"]
  },
  {
    "ename": "Articuno",
    "id": "144",
    "type": ["ice", "flying"]
  },
  {
    "ename": "Zapdos",
    "id": "145",
    "type": ["electric", "flying"]
  },
  {
    "ename": "Moltres",
    "id": "146",
    "type": ["fire", "flying"]
  },
  {
    "ename": "Dratini",
    "id": "147",
    "type": ["dragon"]
  },
  {
    "ename": "Dragonair",
    "id": "148",
    "type": ["dragon"]
  },
  {
    "ename": "Dragonite",
    "id": "149",
    "type": ["dragon", "flying"]
  },
  {
    "ename": "Mewtwo",
    "id": "150",
    "type": ["psychic"]
  },
  {
    "ename": "Mew",
    "id": "151",
    "type": ["psychic"]
  },
  // Gen 2
  {
    "ename": "Chikorita",
    "id": "152",
    "type": ["grass"]
  },
  {
    "ename": "Bayleef",
    "id": "153",
    "type": ["grass"]
  },
  {
    "ename": "Meganium",
    "id": "154",
    "type": ["grass"]
  },
  {
    "ename": "Cyndaquil",
    "id": "155",
    "type": ["fire"]
  },
  {
    "ename": "Quilava",
    "id": "156",
    "type": ["fire"]
  },
  {
    "ename": "Typhlosion",
    "id": "157",
    "type": ["fire"]
  },
  {
    "ename": "Totodile",
    "id": "158",
    "type": ["water"]
  },
  {
    "ename": "Croconaw",
    "id": "159",
    "type": ["water"]
  },
  {
    "ename": "Feraligatr",
    "id": "160",
    "type": ["water"]
  },
  {
    "ename": "Sentret",
    "id": "161",
    "type": ["normal"]
  },
  {
    "ename": "Furret",
    "id": "162",
    "type": ["normal"]
  },
  {
    "ename": "Hoothoot",
    "id": "163",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Noctowl",
    "id": "164",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Ledyba",
    "id": "165",
    "type": ["bug", "flying"]
  },
  {
    "ename": "Ledian",
    "id": "166",
    "type": ["bug", "flying"]
  },
  {
    "ename": "Spinarak",
    "id": "167",
    "type": ["bug", "poison"]
  },
  {
    "ename": "Ariados",
    "id": "168",
    "type": ["bug", "poison"]
  },
  {
    "ename": "Crobat",
    "id": "169",
    "type": ["poison", "flying"]
  },
  {
    "ename": "Chinchou",
    "id": "170",
    "type": ["water", "electric"]
  },
  {
    "ename": "Lanturn",
    "id": "171",
    "type": ["water", "electric"]
  },
  {
    "ename": "Pichu",
    "id": "172",
    "type": ["electric"]
  },
  {
    "ename": "Cleffa",
    "id": "173",
    "type": ["fairy"]
  },
  {
    "ename": "Igglybuff",
    "id": "174",
    "type": ["normal", "fairy"]
  },
  {
    "ename": "Togepi",
    "id": "175",
    "type": ["fairy"]
  },
  {
    "ename": "Togetic",
    "id": "176",
    "type": ["fairy", "flying"]
  },
  {
    "ename": "Natu",
    "id": "177",
    "type": ["psychic", "flying"]
  },
  {
    "ename": "Xatu",
    "id": "178",
    "type": ["psychic", "flying"]
  },
  {
    "ename": "Mareep",
    "id": "179",
    "type": ["electric"]
  },
  {
    "ename": "Flaaffy",
    "id": "180",
    "type": ["electric"]
  },
  {
    "ename": "Ampharos",
    "id": "181",
    "type": ["electric"]
  },
  {
    "ename": "Bellossom",
    "id": "182",
    "type": ["grass"]
  },
  {
    "ename": "Marill",
    "id": "183",
    "type": ["water", "fairy"]
  },
  {
    "ename": "Azumarill",
    "id": "184",
    "type": ["water", "fairy"]
  },
  {
    "ename": "Sudowoodo",
    "id": "185",
    "type": ["rock"]
  },
  {
    "ename": "Politoed",
    "id": "186",
    "type": ["water"]
  },
  {
    "ename": "Hoppip",
    "id": "187",
    "type": ["grass", "flying"]
  },
  {
    "ename": "Skiploom",
    "id": "188",
    "type": ["grass", "flying"]
  },
  {
    "ename": "Jumpluff",
    "id": "189",
    "type": ["grass", "flying"]
  },
  {
    "ename": "Aipom",
    "id": "190",
    "type": ["normal"]
  },
  {
    "ename": "Sunkern",
    "id": "191",
    "type": ["grass"]
  },
  {
    "ename": "Sunflora",
    "id": "192",
    "type": ["grass"]
  },
  {
    "ename": "Yanma",
    "id": "193",
    "type": ["bug", "flying"]
  },
  {
    "ename": "Wooper",
    "id": "194",
    "type": ["water", "ground"]
  },
  {
    "ename": "Quagsire",
    "id": "195",
    "type": ["water", "ground"]
  },
  {
    "ename": "Espeon",
    "id": "196",
    "type": ["psychic"]
  },
  {
    "ename": "Umbreon",
    "id": "197",
    "type": ["dark"]
  },
  {
    "ename": "Murkrow",
    "id": "198",
    "type": ["dark", "flying"]
  },
  {
    "ename": "Slowking",
    "id": "199",
    "type": ["water", "psychic"]
  },
  {
    "ename": "Misdreavus",
    "id": "200",
    "type": ["ghost"]
  },
  {
    "ename": "Unown",
    "id": "201",
    "type": ["psychic"]
  },
  {
    "ename": "Wobbuffet",
    "id": "202",
    "type": ["psychic"]
  },
  {
    "ename": "Girafarig",
    "id": "203",
    "type": ["normal", "psychic"]
  },
  {
    "ename": "Pineco",
    "id": "204",
    "type": ["bug"]
  },
  {
    "ename": "Forretress",
    "id": "205",
    "type": ["bug", "steel"]
  },
  {
    "ename": "Dunsparce",
    "id": "206",
    "type": ["normal"]
  },
  {
    "ename": "Gligar",
    "id": "207",
    "type": ["ground", "flying"]
  },
  {
    "ename": "Steelix",
    "id": "208",
    "type": ["steel", "ground"]
  },
  {
    "ename": "Snubbull",
    "id": "209",
    "type": ["fairy"]
  },
  {
    "ename": "Granbull",
    "id": "210",
    "type": ["fairy"]
  },
  {
    "ename": "Qwilfish",
    "id": "211",
    "type": ["water", "poison"]
  },
  {
    "ename": "Scizor",
    "id": "212",
    "type": ["bug", "steel"]
  },
  {
    "ename": "Shuckle",
    "id": "213",
    "type": ["bug", "rock"]
  },
  {
    "ename": "Heracross",
    "id": "214",
    "type": ["bug", "fighting"]
  },
  {
    "ename": "Sneasel",
    "id": "215",
    "type": ["dark", "ice"]
  },
  {
    "ename": "Teddiursa",
    "id": "216",
    "type": ["normal"]
  },
  {
    "ename": "Ursaring",
    "id": "217",
    "type": ["normal"]
  },
  {
    "ename": "Slugma",
    "id": "218",
    "type": ["fire"]
  },
  {
    "ename": "Magcargo",
    "id": "219",
    "type": ["fire", "rock"]
  },
  {
    "ename": "Swinub",
    "id": "220",
    "type": ["ice", "ground"]
  },
  {
    "ename": "Piloswine",
    "id": "221",
    "type": ["ice", "ground"]
  },
  {
    "ename": "Corsola",
    "id": "222",
    "type": ["water", "rock"]
  },
  {
    "ename": "Remoraid",
    "id": "223",
    "type": ["water"]
  },
  {
    "ename": "Octillery",
    "id": "224",
    "type": ["water"]
  },
  {
    "ename": "Delibird",
    "id": "225",
    "type": ["ice", "flying"]
  },
  {
    "ename": "Mantine",
    "id": "226",
    "type": ["water", "flying"]
  },
  {
    "ename": "Skarmory",
    "id": "227",
    "type": ["steel", "flying"]
  },
  {
    "ename": "Houndour",
    "id": "228",
    "type": ["dark", "fire"]
  },
  {
    "ename": "Houndoom",
    "id": "229",
    "type": ["dark", "fire"]
  },
  {
    "ename": "Kingdra",
    "id": "230",
    "type": ["water", "dragon"]
  },
  {
    "ename": "Phanpy",
    "id": "231",
    "type": ["ground"]
  },
  {
    "ename": "Donphan",
    "id": "232",
    "type": ["ground"]
  },
  {
    "ename": "Porygon2",
    "id": "233",
    "type": ["normal"]
  },
  {
    "ename": "Stantler",
    "id": "234",
    "type": ["normal"]
  },
  {
    "ename": "Smeargle",
    "id": "235",
    "type": ["normal"]
  },
  {
    "ename": "Tyrogue",
    "id": "236",
    "type": ["fighting"]
  },
  {
    "ename": "Hitmontop",
    "id": "237",
    "type": ["fighting"]
  },
  {
    "ename": "Smoochum",
    "id": "238",
    "type": ["ice", "psychic"]
  },
  {
    "ename": "Elekid",
    "id": "239",
    "type": ["electric"]
  },
  {
    "ename": "Magby",
    "id": "240",
    "type": ["fire"]
  },
  {
    "ename": "Miltank",
    "id": "241",
    "type": ["normal"]
  },
  {
    "ename": "Blissey",
    "id": "242",
    "type": ["normal"]
  },
  {
    "ename": "Raikou",
    "id": "243",
    "type": ["electric"]
  },
  {
    "ename": "Entei",
    "id": "244",
    "type": ["fire"]
  },
  {
    "ename": "Suicune",
    "id": "245",
    "type": ["water"]
  },
  {
    "ename": "Larvitar",
    "id": "246",
    "type": ["rock", "ground"]
  },
  {
    "ename": "Pupitar",
    "id": "247",
    "type": ["rock", "ground"]
  },
  {
    "ename": "Tyranitar",
    "id": "248",
    "type": ["rock", "dark"]
  },
  {
    "ename": "Lugia",
    "id": "249",
    "type": ["psychic", "flying"]
  },
  {
    "ename": "Ho-Oh",
    "id": "250",
    "type": ["fire", "flying"]
  },
  {
    "ename": "Celebi",
    "id": "251",
    "type": ["psychic", "grass"]
  },
  // Gen 3
  {
    "ename": "Treecko",
    "id": "252",
    "type": ["grass"]
  },
  {
    "ename": "Grovyle",
    "id": "253",
    "type": ["grass"]
  },
  {
    "ename": "Sceptile",
    "id": "254",
    "type": ["grass"]
  },
  {
    "ename": "Torchic",
    "id": "255",
    "type": ["fire"]
  },
  {
    "ename": "Combusken",
    "id": "256",
    "type": ["fire", "fighting"]
  },
  {
    "ename": "Blaziken",
    "id": "257",
    "type": ["fire", "fighting"]
  },
  {
    "ename": "Mudkip",
    "id": "258",
    "type": ["water"]
  },
  {
    "ename": "Marshtomp",
    "id": "259",
    "type": ["water", "ground"]
  },
  {
    "ename": "Swampert",
    "id": "260",
    "type": ["water", "ground"]
  },
  {
    "ename": "Poochyena",
    "id": "261",
    "type": ["dark"]
  },
  {
    "ename": "Mightyena",
    "id": "262",
    "type": ["dark"]
  },
  {
    "ename": "Zigzagoon",
    "id": "263",
    "type": ["normal"]
  },
  {
    "ename": "Linoone",
    "id": "264",
    "type": ["normal"]
  },
  {
    "ename": "Wurmple",
    "id": "265",
    "type": ["bug"]
  },
  {
    "ename": "Silcoon",
    "id": "266",
    "type": ["bug"]
  },
  {
    "ename": "Beautifly",
    "id": "267",
    "type": ["bug", "flying"]
  },
  {
    "ename": "Cascoon",
    "id": "268",
    "type": ["bug"]
  },
  {
    "ename": "Dustox",
    "id": "269",
    "type": ["bug", "poison"]
  },
  {
    "ename": "Lotad",
    "id": "270",
    "type": ["water", "grass"]
  },
  {
    "ename": "Lombre",
    "id": "271",
    "type": ["water", "grass"]
  },
  {
    "ename": "Ludicolo",
    "id": "272",
    "type": ["water", "grass"]
  },
  {
    "ename": "Seedot",
    "id": "273",
    "type": ["grass"]
  },
  {
    "ename": "Nuzleaf",
    "id": "274",
    "type": ["grass", "dark"]
  },
  {
    "ename": "Shiftry",
    "id": "275",
    "type": ["grass", "dark"]
  },
  {
    "ename": "Taillow",
    "id": "276",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Swellow",
    "id": "277",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Wingull",
    "id": "278",
    "type": ["water", "flying"]
  },
  {
    "ename": "Pelipper",
    "id": "279",
    "type": ["water", "flying"]
  },
  {
    "ename": "Ralts",
    "id": "280",
    "type": ["psychic", "fairy"]
  },
  {
    "ename": "Kirlia",
    "id": "281",
    "type": ["psychic", "fairy"]
  },
  {
    "ename": "Gardevoir",
    "id": "282",
    "type": ["psychic", "fairy"]
  },
  {
    "ename": "Surskit",
    "id": "283",
    "type": ["bug", "water"]
  },
  {
    "ename": "Masquerain",
    "id": "284",
    "type": ["bug", "flying"]
  },
  {
    "ename": "Shroomish",
    "id": "285",
    "type": ["grass"]
  },
  {
    "ename": "Breloom",
    "id": "286",
    "type": ["grass", "fighting"]
  },
  {
    "ename": "Slakoth",
    "id": "287",
    "type": ["normal"]
  },
  {
    "ename": "Vigoroth",
    "id": "288",
    "type": ["normal"]
  },
  {
    "ename": "Slaking",
    "id": "289",
    "type": ["normal"]
  },
  {
    "ename": "Nincada",
    "id": "290",
    "type": ["bug", "ground"]
  },
  {
    "ename": "Ninjask",
    "id": "291",
    "type": ["bug", "flying"]
  },
  {
    "ename": "Shedinja",
    "id": "292",
    "type": ["bug", "ghost"]
  },
  {
    "ename": "Whismur",
    "id": "293",
    "type": ["normal"]
  },
  {
    "ename": "Loudred",
    "id": "294",
    "type": ["normal"]
  },
  {
    "ename": "Exploud",
    "id": "295",
    "type": ["normal"]
  },
  {
    "ename": "Makuhita",
    "id": "296",
    "type": ["fighting"]
  },
  {
    "ename": "Hariyama",
    "id": "297",
    "type": ["fighting"]
  },
  {
    "ename": "Azurill",
    "id": "298",
    "type": ["normal", "fairy"]
  },
  {
    "ename": "Nosepass",
    "id": "299",
    "type": ["rock"]
  },
  {
    "ename": "Skitty",
    "id": "300",
    "type": ["normal"]
  },
  {
    "ename": "Delcatty",
    "id": "301",
    "type": ["normal"]
  },
  {
    "ename": "Sableye",
    "id": "302",
    "type": ["dark", "ghost"]
  },
  {
    "ename": "Mawile",
    "id": "303",
    "type": ["steel", "fairy"]
  },
  {
    "ename": "Aron",
    "id": "304",
    "type": ["steel", "rock"]
  },
  {
    "ename": "Lairon",
    "id": "305",
    "type": ["steel", "rock"]
  },
  {
    "ename": "Aggron",
    "id": "306",
    "type": ["steel", "rock"]
  },
  {
    "ename": "Meditite",
    "id": "307",
    "type": ["fighting", "psychic"]
  },
  {
    "ename": "Medicham",
    "id": "308",
    "type": ["fighting", "psychic"]
  },
  {
    "ename": "Electrike",
    "id": "309",
    "type": ["electric"]
  },
  {
    "ename": "Manectric",
    "id": "310",
    "type": ["electric"]
  },
  {
    "ename": "Plusle",
    "id": "311",
    "type": ["electric"]
  },
  {
    "ename": "Minun",
    "id": "312",
    "type": ["electric"]
  },
  {
    "ename": "Volbeat",
    "id": "313",
    "type": ["bug"]
  },
  {
    "ename": "Illumise",
    "id": "314",
    "type": ["bug"]
  },
  {
    "ename": "Roselia",
    "id": "315",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Gulpin",
    "id": "316",
    "type": ["poison"]
  },
  {
    "ename": "Swalot",
    "id": "317",
    "type": ["poison"]
  },
  {
    "ename": "Carvanha",
    "id": "318",
    "type": ["water", "dark"]
  },
  {
    "ename": "Sharpedo",
    "id": "319",
    "type": ["water", "dark"]
  },
  {
    "ename": "Wailmer",
    "id": "320",
    "type": ["water"]
  },
  {
    "ename": "Wailord",
    "id": "321",
    "type": ["water"]
  },
  {
    "ename": "Numel",
    "id": "322",
    "type": ["fire", "ground"]
  },
  {
    "ename": "Camerupt",
    "id": "323",
    "type": ["fire", "ground"]
  },
  {
    "ename": "Torkoal",
    "id": "324",
    "type": ["fire"]
  },
  {
    "ename": "Spoink",
    "id": "325",
    "type": ["psychic"]
  },
  {
    "ename": "Grumpig",
    "id": "326",
    "type": ["psychic"]
  },
  {
    "ename": "Spinda",
    "id": "327",
    "type": ["normal"]
  },
  {
    "ename": "Trapinch",
    "id": "328",
    "type": ["ground"]
  },
  {
    "ename": "Vibrava",
    "id": "329",
    "type": ["ground", "dragon"]
  },
  {
    "ename": "Flygon",
    "id": "330",
    "type": ["ground", "dragon"]
  },
  {
    "ename": "Cacnea",
    "id": "331",
    "type": ["grass"]
  },
  {
    "ename": "Cacturne",
    "id": "332",
    "type": ["grass", "dark"]
  },
  {
    "ename": "Swablu",
    "id": "333",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Altaria",
    "id": "334",
    "type": ["dragon", "flying"]
  },
  {
    "ename": "Zangoose",
    "id": "335",
    "type": ["normal"]
  },
  {
    "ename": "Seviper",
    "id": "336",
    "type": ["poison"]
  },
  {
    "ename": "Lunatone",
    "id": "337",
    "type": ["rock", "psychic"]
  },
  {
    "ename": "Solrock",
    "id": "338",
    "type": ["rock", "psychic"]
  },
  {
    "ename": "Barboach",
    "id": "339",
    "type": ["water", "ground"]
  },
  {
    "ename": "Whiscash",
    "id": "340",
    "type": ["water", "ground"]
  },
  {
    "ename": "Corphish",
    "id": "341",
    "type": ["water"]
  },
  {
    "ename": "Crawdaunt",
    "id": "342",
    "type": ["water", "dark"]
  },
  {
    "ename": "Baltoy",
    "id": "343",
    "type": ["ground", "psychic"]
  },
  {
    "ename": "Claydol",
    "id": "344",
    "type": ["ground", "psychic"]
  },
  {
    "ename": "Lileep",
    "id": "345",
    "type": ["rock", "grass"]
  },
  {
    "ename": "Cradily",
    "id": "346",
    "type": ["rock", "grass"]
  },
  {
    "ename": "Anorith",
    "id": "347",
    "type": ["rock", "bug"]
  },
  {
    "ename": "Armaldo",
    "id": "348",
    "type": ["rock", "bug"]
  },
  {
    "ename": "Feebas",
    "id": "349",
    "type": ["water"]
  },
  {
    "ename": "Milotic",
    "id": "350",
    "type": ["water"]
  },
  {
    "ename": "Castform",
    "id": "351",
    "type": ["normal"]
  },
  {
    "ename": "Kecleon",
    "id": "352",
    "type": ["normal"]
  },
  {
    "ename": "Shuppet",
    "id": "353",
    "type": ["ghost"]
  },
  {
    "ename": "Banette",
    "id": "354",
    "type": ["ghost"]
  },
  {
    "ename": "Duskull",
    "id": "355",
    "type": ["ghost"]
  },
  {
    "ename": "Dusclops",
    "id": "356",
    "type": ["ghost"]
  },
  {
    "ename": "Tropius",
    "id": "357",
    "type": ["grass", "flying"]
  },
  {
    "ename": "Chimecho",
    "id": "358",
    "type": ["psychic"]
  },
  {
    "ename": "Absol",
    "id": "359",
    "type": ["dark"]
  },
  {
    "ename": "Wynaut",
    "id": "360",
    "type": ["psychic"]
  },
  {
    "ename": "Snorunt",
    "id": "361",
    "type": ["ice"]
  },
  {
    "ename": "Glalie",
    "id": "362",
    "type": ["ice"]
  },
  {
    "ename": "Spheal",
    "id": "363",
    "type": ["ice", "water"]
  },
  {
    "ename": "Sealeo",
    "id": "364",
    "type": ["ice", "water"]
  },
  {
    "ename": "Walrein",
    "id": "365",
    "type": ["ice", "water"]
  },
  {
    "ename": "Clamperl",
    "id": "366",
    "type": ["water"]
  },
  {
    "ename": "Huntail",
    "id": "367",
    "type": ["water"]
  },
  {
    "ename": "Gorebyss",
    "id": "368",
    "type": ["water"]
  },
  {
    "ename": "Relicanth",
    "id": "369",
    "type": ["water", "rock"]
  },
  {
    "ename": "Luvdisc",
    "id": "370",
    "type": ["water"]
  },
  {
    "ename": "Bagon",
    "id": "371",
    "type": ["dragon"]
  },
  {
    "ename": "Shelgon",
    "id": "372",
    "type": ["dragon"]
  },
  {
    "ename": "Salamence",
    "id": "373",
    "type": ["dragon", "flying"]
  },
  {
    "ename": "Beldum",
    "id": "374",
    "type": ["steel", "psychic"]
  },
  {
    "ename": "Metang",
    "id": "375",
    "type": ["steel", "psychic"]
  },
  {
    "ename": "Metagross",
    "id": "376",
    "type": ["steel", "psychic"]
  },
  {
    "ename": "Regirock",
    "id": "377",
    "type": ["rock"]
  },
  {
    "ename": "Regice",
    "id": "378",
    "type": ["ice"]
  },
  {
    "ename": "Registeel",
    "id": "379",
    "type": ["steel"]
  },
  {
    "ename": "Latias",
    "id": "380",
    "type": ["dragon", "psychic"]
  },
  {
    "ename": "Latios",
    "id": "381",
    "type": ["dragon", "psychic"]
  },
  {
    "ename": "Kyogre",
    "id": "382",
    "type": ["water"]
  },
  {
    "ename": "Groudon",
    "id": "383",
    "type": ["ground"]
  },
  {
    "ename": "Rayquaza",
    "id": "384",
    "type": ["dragon", "flying"]
  },
  {
    "ename": "Jirachi",
    "id": "385",
    "type": ["steel", "flying"]
  },
  {
    "ename": "Deoxys",
    "id": "386",
    "type": ["psychic"]
  },
  // Gen 4
  {
    "ename": "Turtwig",
    "id": "387",
    "type": ["grass"]
  },
  {
    "ename": "Grotle",
    "id": "388",
    "type": ["grass"]
  },
  {
    "ename": "Torterra",
    "id": "389",
    "type": ["grass", "ground"]
  },
  {
    "ename": "Chimchar",
    "id": "390",
    "type": ["fire"]
  },
  {
    "ename": "Monferno",
    "id": "391",
    "type": ["fire", "fighting"]
  },
  {
    "ename": "Infernape",
    "id": "392",
    "type": ["fire", "fighting"]
  },
  {
    "ename": "Piplup",
    "id": "393",
    "type": ["water"]
  },
  {
    "ename": "Prinplup",
    "id": "394",
    "type": ["water"]
  },
  {
    "ename": "Empoleon",
    "id": "395",
    "type": ["water", "steel"]
  },
  {
    "ename": "Starly",
    "id": "396",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Staravia",
    "id": "397",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Staraptor",
    "id": "398",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Bidoof",
    "id": "399",
    "type": ["normal"]
  },
  {
    "ename": "Bibarel",
    "id": "400",
    "type": ["normal", "water"]
  },
  {
    "ename": "Kricketot",
    "id": "401",
    "type": ["bug"]
  },
  {
    "ename": "Kricketune",
    "id": "402",
    "type": ["bug"]
  },
  {
    "ename": "Shinx",
    "id": "403",
    "type": ["electric"]
  },
  {
    "ename": "Luxio",
    "id": "404",
    "type": ["electric"]
  },
  {
    "ename": "Luxray",
    "id": "405",
    "type": ["electric"]
  },
  {
    "ename": "Budew",
    "id": "406",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Roserade",
    "id": "407",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Cranidos",
    "id": "408",
    "type": ["rock"]
  },
  {
    "ename": "Rampardos",
    "id": "409",
    "type": ["rock"]
  },
  {
    "ename": "Shieldon",
    "id": "410",
    "type": ["rock", "steel"]
  },
  {
    "ename": "Bastiodon",
    "id": "411",
    "type": ["rock", "steel"]
  },
  {
    "ename": "Burmy",
    "id": "412",
    "type": ["bug"]
  },
  {
    "ename": "Wormadam",
    "id": "413",
    "type": ["bug", "grass"]
  },
  {
    "ename": "Mothim",
    "id": "414",
    "type": ["bug", "flying"]
  },
  {
    "ename": "Combee",
    "id": "415",
    "type": ["bug", "flying"]
  },
  {
    "ename": "Vespiquen",
    "id": "416",
    "type": ["bug", "flying"]
  },
  {
    "ename": "Pachirisu",
    "id": "417",
    "type": ["electric"]
  },
  {
    "ename": "Buizel",
    "id": "418",
    "type": ["water"]
  },
  {
    "ename": "Floatzel",
    "id": "419",
    "type": ["water"]
  },
  {
    "ename": "Cherubi",
    "id": "420",
    "type": ["grass"]
  },
  {
    "ename": "Cherrim",
    "id": "421",
    "type": ["grass"]
  },
  {
    "ename": "Shellos",
    "id": "422",
    "type": ["water"]
  },
  {
    "ename": "Gastrodon",
    "id": "423",
    "type": ["water", "ground"]
  },
  {
    "ename": "Ambipom",
    "id": "424",
    "type": ["normal"]
  },
  {
    "ename": "Drifloon",
    "id": "425",
    "type": ["ghost", "flying"]
  },
  {
    "ename": "Drifblim",
    "id": "426",
    "type": ["ghost", "flying"]
  },
  "427": {
    "ename": "Buneary",
    "id": "427",
    "type": ["normal"]
  },
  "428": {
    "ename": "Lopunny",
    "id": "428",
    "type": ["normal"]
  },
  "429": {
    "ename": "Mismagius",
    "id": "429",
    "type": ["ghost"]
  },
  {
    "ename": "Honchkrow",
    "id": "430",
    "type": ["dark", "flying"]
  },
  {
    "ename": "Glameow",
    "id": "431",
    "type": ["normal"]
  },
  {
    "ename": "Purugly",
    "id": "432",
    "type": ["normal"]
  },
  {
    "ename": "Chingling",
    "id": "433",
    "type": ["psychic"]
  },
  {
    "ename": "Stunky",
    "id": "434",
    "type": ["poison", "dark"]
  },
  {
    "ename": "Skuntank",
    "id": "435",
    "type": ["poison", "dark"]
  },
  {
    "ename": "Bronzor",
    "id": "436",
    "type": ["steel", "psychic"]
  },
  {
    "ename": "Bronzong",
    "id": "437",
    "type": ["steel", "psychic"]
  },
  {
    "ename": "Bonsly",
    "id": "438",
    "type": ["rock"]
  },
  {
    "ename": "Mime Jr.",
    "flatName": "Mime_Jr",
    "id": "439",
    "type": ["psychic", "fairy"]
  },
  {
    "ename": "Happiny",
    "id": "440",
    "type": ["normal"]
  },
  {
    "ename": "Chatot",
    "id": "441",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Spiritomb",
    "id": "442",
    "type": ["ghost", "dark"]
  },
  {
    "ename": "Gible",
    "id": "443",
    "type": ["dragon", "ground"]
  },
  {
    "ename": "Gabite",
    "id": "444",
    "type": ["dragon", "ground"]
  },
  {
    "ename": "Garchomp",
    "id": "445",
    "type": ["dragon", "ground"]
  },
  {
    "ename": "Munchlax",
    "id": "446",
    "type": ["normal"]
  },
  {
    "ename": "Riolu",
    "id": "447",
    "type": ["fighting"]
  },
  {
    "ename": "Lucario",
    "id": "448",
    "type": ["fighting", "steel"]
  },
  {
    "ename": "Hippopotas",
    "id": "449",
    "type": ["ground"]
  },
  {
    "ename": "Hippowdon",
    "id": "450",
    "type": ["ground"]
  },
  {
    "ename": "Skorupi",
    "id": "451",
    "type": ["poison", "bug"]
  },
  {
    "ename": "Drapion",
    "id": "452",
    "type": ["poison", "dark"]
  },
  {
    "ename": "Croagunk",
    "id": "453",
    "type": ["poison", "fighting"]
  },
  {
    "ename": "Toxicroak",
    "id": "454",
    "type": ["poison", "fighting"]
  },
  {
    "ename": "Carnivine",
    "id": "455",
    "type": ["grass"]
  },
  {
    "ename": "Finneon",
    "id": "456",
    "type": ["water"]
  },
  {
    "ename": "Lumineon",
    "id": "457",
    "type": ["water"]
  },
  {
    "ename": "Mantyke",
    "id": "458",
    "type": ["water", "flying"]
  },
  {
    "ename": "Snover",
    "id": "459",
    "type": ["grass", "ice"]
  },
  {
    "ename": "Abomasnow",
    "id": "460",
    "type": ["grass", "ice"]
  },
  {
    "ename": "Weavile",
    "id": "461",
    "type": ["dark", "ice"]
  },
  {
    "ename": "Magnezone",
    "id": "462",
    "type": ["electric", "steel"]
  },
  {
    "ename": "Lickilicky",
    "id": "463",
    "type": ["normal"]
  },
  {
    "ename": "Rhyperior",
    "id": "464",
    "type": ["ground", "rock"]
  },
  {
    "ename": "Tangrowth",
    "id": "465",
    "type": ["grass"]
  },
  {
    "ename": "Electivire",
    "id": "466",
    "type": ["electric"]
  },
  {
    "ename": "Magmortar",
    "id": "467",
    "type": ["fire"]
  },
  {
    "ename": "Togekiss",
    "id": "468",
    "type": ["fairy", "flying"]
  },
  {
    "ename": "Yanmega",
    "id": "469",
    "type": ["bug", "flying"]
  },
  {
    "ename": "Leafeon",
    "id": "470",
    "type": ["grass"]
  },
  {
    "ename": "Glaceon",
    "id": "471",
    "type": ["ice"]
  },
  {
    "ename": "Gliscor",
    "id": "472",
    "type": ["ground", "flying"]
  },
  {
    "ename": "Mamoswine",
    "id": "473",
    "type": ["ice", "ground"]
  },
  {
    "ename": "Porygon-Z",
    "id": "474",
    "type": ["normal"]
  },
  {
    "ename": "Gallade",
    "id": "475",
    "type": ["psychic", "fighting"]
  },
  {
    "ename": "Probopass",
    "id": "476",
    "type": ["rock", "steel"]
  },
  {
    "ename": "Dusknoir",
    "id": "477",
    "type": ["ghost"]
  },
  {
    "ename": "Froslass",
    "id": "478",
    "type": ["ice", "ghost"]
  },
  {
    "ename": "Rotom",
    "id": "479",
    "type": ["electric", "ghost"]
  },
  {
    "ename": "Uxie",
    "id": "480",
    "type": ["psychic"]
  },
  {
    "ename": "Mesprit",
    "id": "481",
    "type": ["psychic"]
  },
  {
    "ename": "Azelf",
    "id": "482",
    "type": ["psychic"]
  },
  {
    "ename": "Dialga",
    "id": "483",
    "type": ["steel", "dragon"]
  },
  {
    "ename": "Palkia",
    "id": "484",
    "type": ["water", "dragon"]
  },
  {
    "ename": "Heatran",
    "id": "485",
    "type": ["fire", "steel"]
  },
  {
    "ename": "Regigigas",
    "id": "486",
    "type": ["normal"]
  },
  {
    "ename": "Giratina",
    "id": "487",
    "type": ["ghost", "dragon"]
  },
  {
    "ename": "Cresselia",
    "id": "488",
    "type": ["psychic"]
  },
  {
    "ename": "Phione",
    "id": "489",
    "type": ["water"]
  },
  {
    "ename": "Manaphy",
    "id": "490",
    "type": ["water"]
  },
  {
    "ename": "Darkrai",
    "id": "491",
    "type": ["dark"]
  },
  {
    "ename": "Shaymin",
    "id": "492",
    "type": ["grass", "flying"]
  },
  {
    "ename": "Arceus",
    "id": "493",
    "type": ["normal"]
  },
  {
    "ename": "Victini",
    "id": "494",
    "type": ["psychic", "fire"]
  },
  // Gen 5
  {
    "ename": "Snivy",
    "id": "495",
    "type": ["grass"]
  },
  {
    "ename": "Servine",
    "id": "496",
    "type": ["grass"]
  },
  {
    "ename": "Serperior",
    "id": "497",
    "type": ["grass"]
  },
  {
    "ename": "Tepig",
    "id": "498",
    "type": ["fire"]
  },
  {
    "ename": "Pignite",
    "id": "499",
    "type": ["fire", "fighting"]
  },
  {
    "ename": "Emboar",
    "id": "500",
    "type": ["fire", "fighting"]
  },
  {
    "ename": "Oshawott",
    "id": "501",
    "type": ["water"]
  },
  {
    "ename": "Dewott",
    "id": "502",
    "type": ["water"]
  },
  {
    "ename": "Samurott",
    "id": "503",
    "type": ["water"]
  },
  {
    "ename": "Patrat",
    "id": "504",
    "type": ["normal"]
  },
  {
    "ename": "Watchog",
    "id": "505",
    "type": ["normal"]
  },
  {
    "ename": "Lillipup",
    "id": "506",
    "type": ["normal"]
  },
  {
    "ename": "Herdier",
    "id": "507",
    "type": ["normal"]
  },
  {
    "ename": "Stoutland",
    "id": "508",
    "type": ["normal"]
  },
  {
    "ename": "Purrloin",
    "id": "509",
    "type": ["dark"]
  },
  {
    "ename": "Liepard",
    "id": "510",
    "type": ["dark"]
  },
  {
    "ename": "Pansage",
    "id": "511",
    "type": ["grass"]
  },
  {
    "ename": "Simisage",
    "id": "512",
    "type": ["grass"]
  },
  {
    "ename": "Pansear",
    "id": "513",
    "type": ["fire"]
  },
  {
    "ename": "Simisear",
    "id": "514",
    "type": ["fire"]
  },
  {
    "ename": "Panpour",
    "id": "515",
    "type": ["water"]
  },
  {
    "ename": "Simipour",
    "id": "516",
    "type": ["water"]
  },
  {
    "ename": "Munna",
    "id": "517",
    "type": ["psychic"]
  },
  {
    "ename": "Musharna",
    "id": "518",
    "type": ["psychic"]
  },
  {
    "ename": "Pidove",
    "id": "519",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Tranquill",
    "id": "520",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Unfezant",
    "id": "521",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Blitzle",
    "id": "522",
    "type": ["electric"]
  },
  {
    "ename": "Zebstrika",
    "id": "523",
    "type": ["electric"]
  },
  {
    "ename": "Roggenrola",
    "id": "524",
    "type": ["rock"]
  },
  {
    "ename": "Boldore",
    "id": "525",
    "type": ["rock"]
  },
  {
    "ename": "Gigalith",
    "id": "526",
    "type": ["rock"]
  },
  {
    "ename": "Woobat",
    "id": "527",
    "type": ["psychic", "flying"]
  },
  {
    "ename": "Swoobat",
    "id": "528",
    "type": ["psychic", "flying"]
  },
  {
    "ename": "Drilbur",
    "id": "529",
    "type": ["ground"]
  },
  {
    "ename": "Excadrill",
    "id": "530",
    "type": ["ground", "steel"]
  },
  {
    "ename": "Audino",
    "id": "531",
    "type": ["normal"]
  },
  {
    "ename": "Timburr",
    "id": "532",
    "type": ["fighting"]
  },
  {
    "ename": "Gurdurr",
    "id": "533",
    "type": ["fighting"]
  },
  {
    "ename": "Conkeldurr",
    "id": "534",
    "type": ["fighting"]
  },
  {
    "ename": "Tympole",
    "id": "535",
    "type": ["water"]
  },
  {
    "ename": "Palpitoad",
    "id": "536",
    "type": ["water", "ground"]
  },
  {
    "ename": "Seismitoad",
    "id": "537",
    "type": ["water", "ground"]
  },
  {
    "ename": "Throh",
    "id": "538",
    "type": ["fighting"]
  },
  {
    "ename": "Sawk",
    "id": "539",
    "type": ["fighting"]
  },
  {
    "ename": "Sewaddle",
    "id": "540",
    "type": ["bug", "grass"]
  },
  {
    "ename": "Swadloon",
    "id": "541",
    "type": ["bug", "grass"]
  },
  {
    "ename": "Leavanny",
    "id": "542",
    "type": ["bug", "grass"]
  },
  {
    "ename": "Venipede",
    "id": "543",
    "type": ["bug", "poison"]
  },
  {
    "ename": "Whirlipede",
    "id": "544",
    "type": ["bug", "poison"]
  },
  {
    "ename": "Scolipede",
    "id": "545",
    "type": ["bug", "poison"]
  },
  {
    "ename": "Cottonee",
    "id": "546",
    "type": ["grass", "fairy"]
  },
  {
    "ename": "Whimsicott",
    "id": "547",
    "type": ["grass", "fairy"]
  },
  {
    "ename": "Petilil",
    "id": "548",
    "type": ["grass"]
  },
  {
    "ename": "Lilligant",
    "id": "549",
    "type": ["grass"]
  },
  {
    "ename": "Basculin",
    "id": "550",
    "type": ["water"]
  },
  {
    "ename": "Sandile",
    "id": "551",
    "type": ["ground", "dark"]
  },
  {
    "ename": "Krokorok",
    "id": "552",
    "type": ["ground", "dark"]
  },
  {
    "ename": "Krookodile",
    "id": "553",
    "type": ["ground", "dark"]
  },
  {
    "ename": "Darumaka",
    "id": "554",
    "type": ["fire"]
  },
  {
    "ename": "Darmanitan",
    "id": "555",
    "type": ["fire", "psychic"]
  },
  {
    "ename": "Maractus",
    "id": "556",
    "type": ["grass"]
  },
  {
    "ename": "Dwebble",
    "id": "557",
    "type": ["bug", "rock"]
  },
  {
    "ename": "Crustle",
    "id": "558",
    "type": ["bug", "rock"]
  },
  {
    "ename": "Scraggy",
    "id": "559",
    "type": ["dark", "fighting"]
  },
  {
    "ename": "Scrafty",
    "id": "560",
    "type": ["dark", "fighting"]
  },
  {
    "ename": "Sigilyph",
    "id": "561",
    "type": ["psychic", "flying"]
  },
  {
    "ename": "Yamask",
    "id": "562",
    "type": ["ghost"]
  },
  {
    "ename": "Cofagrigus",
    "id": "563",
    "type": ["ghost"]
  },
  {
    "ename": "Tirtouga",
    "id": "564",
    "type": ["water", "rock"]
  },
  {
    "ename": "Carracosta",
    "id": "565",
    "type": ["water", "rock"]
  },
  {
    "ename": "Archen",
    "id": "566",
    "type": ["rock", "flying"]
  },
  {
    "ename": "Archeops",
    "id": "567",
    "type": ["rock", "flying"]
  },
  {
    "ename": "Trubbish",
    "id": "568",
    "type": ["poison"]
  },
  {
    "ename": "Garbodor",
    "id": "569",
    "type": ["poison"]
  },
  {
    "ename": "Zorua",
    "id": "570",
    "type": ["dark"]
  },
  {
    "ename": "Zoroark",
    "id": "571",
    "type": ["dark"]
  },
  {
    "ename": "Minccino",
    "id": "572",
    "type": ["normal"]
  },
  {
    "ename": "Cinccino",
    "id": "573",
    "type": ["normal"]
  },
  {
    "ename": "Gothita",
    "id": "574",
    "type": ["psychic"]
  },
  {
    "ename": "Gothorita",
    "id": "575",
    "type": ["psychic"]
  },
  {
    "ename": "Gothitelle",
    "id": "576",
    "type": ["psychic"]
  },
  {
    "ename": "Solosis",
    "id": "577",
    "type": ["psychic"]
  },
  {
    "ename": "Duosion",
    "id": "578",
    "type": ["psychic"]
  },
  {
    "ename": "Reuniclus",
    "id": "579",
    "type": ["psychic"]
  },
  {
    "ename": "Ducklett",
    "id": "580",
    "type": ["water", "flying"]
  },
  {
    "ename": "Swanna",
    "id": "581",
    "type": ["water", "flying"]
  },
  {
    "ename": "Vanillite",
    "id": "582",
    "type": ["ice"]
  },
  {
    "ename": "Vanillish",
    "id": "583",
    "type": ["ice"]
  },
  {
    "ename": "Vanilluxe",
    "id": "584",
    "type": ["ice"]
  },
  {
    "ename": "Deerling",
    "id": "585",
    "type": ["normal", "grass"]
  },
  {
    "ename": "Sawsbuck",
    "id": "586",
    "type": ["normal", "grass"]
  },
  {
    "ename": "Emolga",
    "id": "587",
    "type": ["electric", "flying"]
  },
  {
    "ename": "Karrablast",
    "id": "588",
    "type": ["bug"]
  },
  {
    "ename": "Escavalier",
    "id": "589",
    "type": ["bug", "steel"]
  },
  {
    "ename": "Foongus",
    "id": "590",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Amoonguss",
    "id": "591",
    "type": ["grass", "poison"]
  },
  {
    "ename": "Frillish",
    "id": "592",
    "type": ["water", "ghost"]
  },
  {
    "ename": "Jellicent",
    "id": "593",
    "type": ["water", "ghost"]
  },
  {
    "ename": "Alomomola",
    "id": "594",
    "type": ["water"]
  },
  {
    "ename": "Joltik",
    "id": "595",
    "type": ["bug", "electric"]
  },
  {
    "ename": "Galvantula",
    "id": "596",
    "type": ["bug", "electric"]
  },
  {
    "ename": "Ferroseed",
    "id": "597",
    "type": ["grass", "steel"]
  },
  {
    "ename": "Ferrothorn",
    "id": "598",
    "type": ["grass", "steel"]
  },
  {
    "ename": "Klink",
    "id": "599",
    "type": ["steel"]
  },
  {
    "ename": "Klang",
    "id": "600",
    "type": ["steel"]
  },
  {
    "ename": "Klinklang",
    "id": "601",
    "type": ["steel"]
  },
  {
    "ename": "Tynamo",
    "id": "602",
    "type": ["electric"]
  },
  {
    "ename": "Eelektrik",
    "id": "603",
    "type": ["electric"]
  },
  {
    "ename": "Eelektross",
    "id": "604",
    "type": ["electric"]
  },
  {
    "ename": "Elgyem",
    "id": "605",
    "type": ["psychic"]
  },
  {
    "ename": "Beheeyem",
    "id": "606",
    "type": ["psychic"]
  },
  {
    "ename": "Litwick",
    "id": "607",
    "type": ["ghost", "fire"]
  },
  {
    "ename": "Lampent",
    "id": "608",
    "type": ["ghost", "fire"]
  },
  {
    "ename": "Chandelure",
    "id": "609",
    "type": ["ghost", "fire"]
  },
  {
    "ename": "Axew",
    "id": "610",
    "type": ["dragon"]
  },
  {
    "ename": "Fraxure",
    "id": "611",
    "type": ["dragon"]
  },
  {
    "ename": "Haxorus",
    "id": "612",
    "type": ["dragon"]
  },
  {
    "ename": "Cubchoo",
    "id": "613",
    "type": ["ice"]
  },
  {
    "ename": "Beartic",
    "id": "614",
    "type": ["ice"]
  },
  {
    "ename": "Cryogonal",
    "id": "615",
    "type": ["ice"]
  },
  {
    "ename": "Shelmet",
    "id": "616",
    "type": ["bug"]
  },
  {
    "ename": "Accelgor",
    "id": "617",
    "type": ["bug"]
  },
  {
    "ename": "Stunfisk",
    "id": "618",
    "type": ["ground", "electric"]
  },
  {
    "ename": "Mienfoo",
    "id": "619",
    "type": ["fighting"]
  },
  {
    "ename": "Mienshao",
    "id": "620",
    "type": ["fighting"]
  },
  {
    "ename": "Druddigon",
    "id": "621",
    "type": ["dragon"]
  },
  {
    "ename": "Golett",
    "id": "622",
    "type": ["ground", "ghost"]
  },
  {
    "ename": "Golurk",
    "id": "623",
    "type": ["ground", "ghost"]
  },
  {
    "ename": "Pawniard",
    "id": "624",
    "type": ["dark", "steel"]
  },
  {
    "ename": "Bisharp",
    "id": "625",
    "type": ["dark", "steel"]
  },
  {
    "ename": "Bouffalant",
    "id": "626",
    "type": ["normal"]
  },
  {
    "ename": "Rufflet",
    "id": "627",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Braviary",
    "id": "628",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Vullaby",
    "id": "629",
    "type": ["dark", "flying"]
  },
  {
    "ename": "Mandibuzz",
    "id": "630",
    "type": ["dark", "flying"]
  },
  {
    "ename": "Heatmor",
    "id": "631",
    "type": ["fire"]
  },
  {
    "ename": "Durant",
    "id": "632",
    "type": ["bug", "steel"]
  },
  {
    "ename": "Deino",
    "id": "633",
    "type": ["dark", "dragon"]
  },
  {
    "ename": "Zweilous",
    "id": "634",
    "type": ["dark", "dragon"]
  },
  {
    "ename": "Hydreigon",
    "id": "635",
    "type": ["dark", "dragon"]
  },
  {
    "ename": "Larvesta",
    "id": "636",
    "type": ["bug", "fire"]
  },
  {
    "ename": "Volcarona",
    "id": "637",
    "type": ["bug", "fire"]
  },
  {
    "ename": "Cobalion",
    "id": "638",
    "type": ["steel", "fighting"]
  },
  {
    "ename": "Terrakion",
    "id": "639",
    "type": ["rock", "fighting"]
  },
  {
    "ename": "Virizion",
    "id": "640",
    "type": ["grass", "fighting"]
  },
  {
    "ename": "Tornadus",
    "id": "641",
    "type": ["flying"]
  },
  {
    "ename": "Thundurus",
    "id": "642",
    "type": ["electric", "flying"]
  },
  {
    "ename": "Reshiram",
    "id": "643",
    "type": ["dragon", "fire"]
  },
  {
    "ename": "Zekrom",
    "id": "644",
    "type": ["dragon", "electric"]
  },
  {
    "ename": "Landorus",
    "id": "645",
    "type": ["ground", "flying"]
  },
  {
    "ename": "Kyurem",
    "id": "646",
    "type": ["dragon", "ice"]
  },
  {
    "ename": "Keldeo",
    "id": "647",
    "type": ["water", "fighting"]
  },
  {
    "ename": "Meloetta",
    "id": "648",
    "type": ["normal", "psychic"]
  },
  {
    "ename": "Genesect",
    "id": "649",
    "type": ["bug", "steel"]
  },
  // Gen 6
  {
    "ename": "Chespin",
    "id": "650",
    "type": ["grass"]
  },
  {
    "ename": "Quilladin",
    "id": "651",
    "type": ["grass"]
  },
  {
    "ename": "Chesnaught",
    "id": "652",
    "type": ["grass", "fighting"]
  },
  {
    "ename": "Fennekin",
    "id": "653",
    "type": ["fire"]
  },
  {
    "ename": "Braixen",
    "id": "654",
    "type": ["fire"]
  },
  {
    "ename": "Delphox",
    "id": "655",
    "type": ["fire", "psychic"]
  },
  {
    "ename": "Froakie",
    "id": "656",
    "type": ["water"]
  },
  {
    "ename": "Frogadier",
    "id": "657",
    "type": ["water"]
  },
  {
    "ename": "Greninja",
    "id": "658",
    "type": ["water", "dark"]
  },
  {
    "ename": "Bunnelby",
    "id": "659",
    "type": ["normal"]
  },
  {
    "ename": "Diggersby",
    "id": "660",
    "type": ["normal", "ground"]
  },
  {
    "ename": "Fletchling",
    "id": "661",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Fletchinder",
    "id": "662",
    "type": ["fire", "flying"]
  },
  {
    "ename": "Talonflame",
    "id": "663",
    "type": ["fire", "flying"]
  },
  {
    "ename": "Scatterbug",
    "id": "664",
    "type": ["bug"]
  },
  {
    "ename": "Spewpa",
    "id": "665",
    "type": ["bug"]
  },
  {
    "ename": "Vivillon",
    "id": "666",
    "type": ["bug", "flying"]
  },
  {
    "ename": "Litleo",
    "id": "667",
    "type": ["fire", "normal"]
  },
  {
    "ename": "Pyroar",
    "id": "668",
    "type": ["fire", "normal"]
  },
  {
    "ename": "Flab\u00e9b\u00e9",
    "flatName": "Flabebe",
    "id": "669",
    "type": ["fairy"]
  },
  {
    "ename": "Floette",
    "id": "670",
    "type": ["fairy"]
  },
  {
    "ename": "Florges",
    "id": "671",
    "type": ["fairy"]
  },
  {
    "ename": "Skiddo",
    "id": "672",
    "type": ["grass"]
  },
  {
    "ename": "Gogoat",
    "id": "673",
    "type": ["grass"]
  },
  {
    "ename": "Pancham",
    "id": "674",
    "type": ["fighting"]
  },
  {
    "ename": "Pangoro",
    "id": "675",
    "type": ["fighting", "dark"]
  },
  {
    "ename": "Furfrou",
    "id": "676",
    "type": ["normal"]
  },
  {
    "ename": "Espurr",
    "id": "677",
    "type": ["psychic"]
  },
  {
    "ename": "Meowstic",
    "id": "678",
    "type": ["psychic"]
  },
  {
    "ename": "Honedge",
    "id": "679",
    "type": ["steel", "ghost"]
  },
  {
    "ename": "Doublade",
    "id": "680",
    "type": ["steel", "ghost"]
  },
  {
    "ename": "Aegislash",
    "id": "681",
    "type": ["steel", "ghost"]
  },
  {
    "ename": "Spritzee",
    "id": "682",
    "type": ["fairy"]
  },
  {
    "ename": "Aromatisse",
    "id": "683",
    "type": ["fairy"]
  },
  {
    "ename": "Swirlix",
    "id": "684",
    "type": ["fairy"]
  },
  {
    "ename": "Slurpuff",
    "id": "685",
    "type": ["fairy"]
  },
  {
    "ename": "Inkay",
    "id": "686",
    "type": ["dark", "psychic"]
  },
  {
    "ename": "Malamar",
    "id": "687",
    "type": ["dark", "psychic"]
  },
  {
    "ename": "Binacle",
    "id": "688",
    "type": ["rock", "water"]
  },
  {
    "ename": "Barbaracle",
    "id": "689",
    "type": ["rock", "water"]
  },
  {
    "ename": "Skrelp",
    "id": "690",
    "type": ["poison", "water"]
  },
  {
    "ename": "Dragalge",
    "id": "691",
    "type": ["poison", "dragon"]
  },
  {
    "ename": "Clauncher",
    "id": "692",
    "type": ["water"]
  },
  {
    "ename": "Clawitzer",
    "id": "693",
    "type": ["water"]
  },
  {
    "ename": "Helioptile",
    "id": "694",
    "type": ["electric", "normal"]
  },
  {
    "ename": "Heliolisk",
    "id": "695",
    "type": ["electric", "normal"]
  },
  {
    "ename": "Tyrunt",
    "id": "696",
    "type": ["rock", "dragon"]
  },
  {
    "ename": "Tyrantrum",
    "id": "697",
    "type": ["rock", "dragon"]
  },
  {
    "ename": "Amaura",
    "id": "698",
    "type": ["rock", "ice"]
  },
  {
    "ename": "Aurorus",
    "id": "699",
    "type": ["rock", "ice"]
  },
  {
    "ename": "Sylveon",
    "id": "700",
    "type": ["fairy"]
  },
  {
    "ename": "Hawlucha",
    "id": "701",
    "type": ["fighting", "flying"]
  },
  {
    "ename": "Dedenne",
    "id": "702",
    "type": ["electric", "fairy"]
  },
  {
    "ename": "Carbink",
    "id": "703",
    "type": ["rock", "fairy"]
  },
  {
    "ename": "Goomy",
    "id": "704",
    "type": ["dragon"]
  },
  {
    "ename": "Sliggoo",
    "id": "705",
    "type": ["dragon"]
  },
  {
    "ename": "Goodra",
    "id": "706",
    "type": ["dragon"]
  },
  {
    "ename": "Klefki",
    "id": "707",
    "type": ["steel", "fairy"]
  },
  {
    "ename": "Phantump",
    "id": "708",
    "type": ["ghost", "grass"]
  },
  {
    "ename": "Trevenant",
    "id": "709",
    "type": ["ghost", "grass"]
  },
  {
    "ename": "Pumpkaboo",
    "id": "710",
    "type": ["ghost", "grass"]
  },
  {
    "ename": "Gourgeist",
    "id": "711",
    "type": ["ghost", "grass"]
  },
  {
    "ename": "Bergmite",
    "id": "712",
    "type": ["ice"]
  },
  {
    "ename": "Avalugg",
    "id": "713",
    "type": ["ice"]
  },
  {
    "ename": "Noibat",
    "id": "714",
    "type": ["flying", "dragon"]
  },
  {
    "ename": "Noivern",
    "id": "715",
    "type": ["flying", "dragon"]
  },
  {
    "ename": "Xerneas",
    "id": "716",
    "type": ["fairy"]
  },
  {
    "ename": "Yveltal",
    "id": "717",
    "type": ["dark", "flying"]
  },
  {
    "ename": "Zygarde",
    "id": "718",
    "type": ["dragon", "ground"]
  },
  {
    "ename": "Diancie",
    "id": "719",
    "type": ["rock", "fairy"]
  },
  {
    "ename": "Hoopa",
    "id": "720",
    "type": ["psychic", "ghost"]
  },
  {
    "ename": "Volcanion",
    "id": "721",
    "type": ["fire", "water"]
  },
  // Gen 7
  {
    "ename": "Rowlet",
    "id": "722",
    "type": ["grass", "flying"]
  },
  {
    "ename": "Dartrix",
    "id": "723",
    "type": ["grass", "flying"]
  },
  {
    "ename": "Decidueye",
    "id": "724",
    "type": ["grass", "ghost"]
  },
  {
    "ename": "Litten",
    "id": "725",
    "type": ["fire"]
  },
  {
    "ename": "Torracat",
    "id": "726",
    "type": ["fire"]
  },
  {
    "ename": "Incineroar",
    "id": "727",
    "type": ["fire", "dark"]
  },
  {
    "ename": "Popplio",
    "id": "728",
    "type": ["water"]
  },
  {
    "ename": "Brionne",
    "id": "729",
    "type": ["water"]
  },
  {
    "ename": "Primarina",
    "id": "730",
    "type": ["water", "fairy"]
  },
  {
    "ename": "Pikipek",
    "id": "731",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Trumbeak",
    "id": "732",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Toucannon",
    "id": "733",
    "type": ["normal", "flying"]
  },
  {
    "ename": "Yungoos",
    "id": "734",
    "type": ["normal"]
  },
  {
    "ename": "Gumshoos",
    "id": "735",
    "type": ["normal"]
  },
  {
    "ename": "Grubbin",
    "id": "736",
    "type": ["bug"]
  },
  {
    "ename": "Charjabug",
    "id": "737",
    "type": ["bug", "electric"]
  },
  {
    "ename": "Vikavolt",
    "id": "738",
    "type": ["bug", "electric"]
  },
  {
    "ename": "Crabrawler",
    "id": "739",
    "type": ["fighting", "ice"]
  },
  {
    "ename": "Crabominable",
    "id": "740",
    "type": ["fighting", "ice"]
  },
  {
    "ename": "Oricorio",
    "id": "741",
    "type": ["flying", "fire", "electric", "psychic", "ghost"]
  },
  {
    "ename": "Cutiefly",
    "id": "742",
    "type": ["bug", "fairy"]
  },
  {
    "ename": "Ribombee",
    "id": "743",
    "type": ["bug", "fairy"]
  },
  {
    "ename": "Rockruff",
    "id": "744",
    "type": ["rock"]
  },
  {
    "ename": "Lycanroc",
    "id": "745",
    "type": ["rock"]
  },
  {
    "ename": "Wishiwashi",
    "id": "746",
    "type": ["water"]
  },
  {
    "ename": "Mareanie",
    "id": "747",
    "type": ["poison", "water"]
  },
  {
    "ename": "Toxapex",
    "id": "748",
    "type": ["poison", "water"]
  },
  {
    "ename": "Mudbray",
    "id": "749",
    "type": ["ground"]
  },
  {
    "ename": "Mudsdale",
    "id": "750",
    "type": ["ground"]
  },
  {
    "ename": "Dewpider",
    "id": "751",
    "type": ["water", "bug"]
  },
  {
    "ename": "Araquanid",
    "id": "752",
    "type": ["water", "bug"]
  },
  {
    "ename": "Fomantis",
    "id": "753",
    "type": ["grass"]
  },
  {
    "ename": "Lurantis",
    "id": "754",
    "type": ["grass"]
  },
  {
    "ename": "Morelull",
    "id": "755",
    "type": ["grass", "fairy"]
  },
  {
    "ename": "Shiinotic",
    "id": "756",
    "type": ["grass", "fairy"]
  },
  {
    "ename": "Salandit",
    "id": "757",
    "type": ["poison", "fire"]
  },
  {
    "ename": "Salazzle",
    "id": "758",
    "type": ["poison", "fire"]
  },
  {
    "ename": "Stufful",
    "id": "759",
    "type": ["normal", "fighting"]
  },
  {
    "ename": "Bewear",
    "id": "760",
    "type": ["normal", "fighting"]
  },
  {
    "ename": "Bounsweet",
    "id": "761",
    "type": ["grass"]
  },
  {
    "ename": "Steenee",
    "id": "762",
    "type": ["grass"]
  },
  {
    "ename": "Tsareena",
    "id": "763",
    "type": ["grass"]
  },
  {
    "ename": "Comfey",
    "id": "764",
    "type": ["fairy"]
  },
  {
    "ename": "Oranguru",
    "id": "765",
    "type": ["normal", "psychic"]
  },
  {
    "ename": "Passimian",
    "id": "766",
    "type": ["fighting"]
  },
  {
    "ename": "Wimpod",
    "id": "767",
    "type": ["bug", "water"]
  },
  {
    "ename": "Golisopod",
    "id": "768",
    "type": ["bug", "water"]
  },
  {
    "ename": "Sandygast",
    "id": "769",
    "type": ["ghost", "ground"]
  },
  {
    "ename": "Palossand",
    "id": "770",
    "type": ["ghost", "ground"]
  },
  {
    "ename": "Pyukumuku",
    "id": "771",
    "type": ["water"]
  },
  {
    "ename": "Type: Null",
    "id": "772",
    "type": ["normal"]
  },
  {
    "ename": "Silvally",
    "id": "773",
    "type": ["normal"]
  },
  {
    "ename": "Minior",
    "id": "774",
    "type": ["rock", "flying"]
  },
  {
    "ename": "Komala",
    "id": "775",
    "type": ["normal"]
  },
  {
    "ename": "Turtonator",
    "id": "776",
    "type": ["fire", "dragon"]
  },
  {
    "ename": "Togedemaru",
    "id": "777",
    "type": ["electric", "steel"]
  },
  {
    "ename": "Mimikyu",
    "id": "778",
    "type": ["ghost", "fairy"]
  },
  {
    "ename": "Bruxish",
    "id": "779",
    "type": ["water", "psychic"]
  },
  {
    "ename": "Drampa",
    "id": "780",
    "type": ["normal", "dragon"]
  },
  {
    "ename": "Dhelmise",
    "id": "781",
    "type": ["ghost", "grass"]
  },
  {
    "ename": "Jangmo-o",
    "id": "782",
    "type": ["dragon"]
  },
  {
    "ename": "Hakamo-o",
    "id": "783",
    "type": ["dragon", "fighting"]
  },
  {
    "ename": "Kommo-o",
    "id": "784",
    "type": ["dragon", "fighting"]
  },
  {
    "ename": "Tapu Koko",
    "id": "785",
    "type": ["electric", "fairy"]
  },
  {
    "ename": "Tapu Lele",
    "id": "786",
    "type": ["psychic", "fairy"]
  },
  {
    "ename": "Tapu Bulu",
    "id": "787",
    "type": ["grass", "fairy"]
  },
  {
    "ename": "Tapu Fini",
    "id": "788",
    "type": ["water", "fairy"]
  },
  {
    "ename": "Cosmog",
    "id": "789",
    "type": ["psychic"]
  },
  {
    "ename": "Cosmoem",
    "id": "790",
    "type": ["psychic"]
  },
  {
    "ename": "Solgaleo",
    "id": "791",
    "type": ["psychic", "steel"]
  },
  {
    "ename": "Lunala",
    "id": "792",
    "type": ["psychic", "ghost"]
  },
  {
    "ename": "Nihilego",
    "id": "793",
    "type": ["rock", "poison"]
  },
  {
    "ename": "Buzzwole",
    "id": "794",
    "type": ["bug", "fighting"]
  },
  {
    "ename": "Pheromosa",
    "id": "795",
    "type": ["bug", "fighting"]
  },
  {
    "ename": "Xurkitree",
    "id": "796",
    "type": ["electric"]
  },
  {
    "ename": "Celesteela",
    "id": "797",
    "type": ["steel", "flying"]
  },
  {
    "ename": "Kartana",
    "id": "798",
    "type": ["grass", "steel"]
  },
  {
    "ename": "Guzzlord",
    "id": "799",
    "type": ["dark", "dragon"]
  },
  {
    "ename": "Necrozma",
    "id": "800",
    "type": ["psychic", "steel", "ghost", "dragon"]
  },
  {
    "ename": "Magearna",
    "id": "801",
    "type": ["steel", "fairy"]
  },
  {
    "ename": "Marshadow",
    "id": "802",
    "type": ["fighting", "ghost"]
  },
  {
    "ename": "Poipole",
    "id": "803",
    "type": ["poison"]
  },
  {
    "ename": "Naganadel",
    "id": "804",
    "type": ["poison", "dragon"]
  },
  {
    "ename": "Stakataka",
    "id": "805",
    "type": ["rock", "steel"]
  },
  {
    "ename": "Blacephalon",
    "id": "806",
    "type": ["fire", "ghost"]
  },
  {
    "ename": "Zeraora",
    "id": "807",
    "type": ["electric"]
  }
];

export default pokemon;
