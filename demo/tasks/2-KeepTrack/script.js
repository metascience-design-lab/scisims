// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "plugins": [
    {
      "type": "lab.plugins.Metadata"
    },
    {
      "type": "lab.plugins.Download"
    }
  ],
  "metadata": {
    "title": "Digit span",
    "description": "This study implements a short-term memory test. Participants are asked to recall a series of digits in sequence.",
    "repository": "",
    "contributors": "Felix Henninger \u003Cmailbox@felixhenninger.com\u003E (http:\u002F\u002Ffelixhenninger.com)"
  },
  "parameters": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "span_length": "15"
        },
        {
          "span_length": "15"
        },
        {
          "span_length": "15"
        },
        {
          "span_length": "15"
        },
        {
          "span_length": "15"
        }
      ],
      "responses": {},
      "messageHandlers": {},
      "title": "Keep Track Task Part 1",
      "parameters": {},
      "template": {
        "type": "lab.flow.Sequence",
        "responses": {},
        "messageHandlers": {},
        "title": "Trial sequence",
        "parameters": {},
        "content": [
          {
            "type": "lab.html.Screen",
            "responses": {
              "click button#continue": "continue"
            },
            "messageHandlers": {},
            "title": "Get-set-go",
            "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-s text-justify\"\u003E\n    \u003Ch2 class=\"text-center\"\u003EReady?\u003C\u002Fh2\u003E\n    \u003Cp\u003EThere are five runs in this part. You will see a sequence of words on the center of the screen. All words belong to five chosen categories: animals, colors, clothes, countries, and sports. Exactly \u003Cstrong\u003Ethree\u003C\u002Fstrong\u003E of these categories will be present in each run, but the words' categories vary from run to run. At the end of each run, you will be asked to type the \u003Cstrong\u003Elast\u003C\u002Fstrong\u003E word in each of those three categories. The category of every word will be hinted at the bottom of the screen. Please do your best.\u003C\u002Fp\u003E\n    \u003Cp\u003EWhen you're ready, please press \u003Ckbd\u003EContinue\u003C\u002Fkbd\u003E below.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003E\n    Continue &rarr;\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
            "parameters": {}
          },
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "word": "alligator",
                "category": "animals"
              },
              {
                "word": "ant",
                "category": "animals"
              },
              {
                "word": "bear",
                "category": "animals"
              },
              {
                "word": "bee",
                "category": "animals"
              },
              {
                "word": "bird",
                "category": "animals"
              },
              {
                "word": "camel",
                "category": "animals"
              },
              {
                "word": "cat",
                "category": "animals"
              },
              {
                "word": "cheetah",
                "category": "animals"
              },
              {
                "word": "chicken",
                "category": "animals"
              },
              {
                "word": "chimpanzee",
                "category": "animals"
              },
              {
                "word": "cow",
                "category": "animals"
              },
              {
                "word": "crocodile",
                "category": "animals"
              },
              {
                "word": "deer",
                "category": "animals"
              },
              {
                "word": "dog",
                "category": "animals"
              },
              {
                "word": "dolphin",
                "category": "animals"
              },
              {
                "word": "duck",
                "category": "animals"
              },
              {
                "word": "eagle",
                "category": "animals"
              },
              {
                "word": "elephant",
                "category": "animals"
              },
              {
                "word": "fish",
                "category": "animals"
              },
              {
                "word": "fly",
                "category": "animals"
              },
              {
                "word": "fox",
                "category": "animals"
              },
              {
                "word": "frog",
                "category": "animals"
              },
              {
                "word": "giraffe",
                "category": "animals"
              },
              {
                "word": "goat",
                "category": "animals"
              },
              {
                "word": "goldfish",
                "category": "animals"
              },
              {
                "word": "hamster",
                "category": "animals"
              },
              {
                "word": "hippopotamus",
                "category": "animals"
              },
              {
                "word": "horse",
                "category": "animals"
              },
              {
                "word": "kangaroo",
                "category": "animals"
              },
              {
                "word": "kitten",
                "category": "animals"
              },
              {
                "word": "lion",
                "category": "animals"
              },
              {
                "word": "lobster",
                "category": "animals"
              },
              {
                "word": "monkey",
                "category": "animals"
              },
              {
                "word": "octopus",
                "category": "animals"
              },
              {
                "word": "owl",
                "category": "animals"
              },
              {
                "word": "panda",
                "category": "animals"
              },
              {
                "word": "pig",
                "category": "animals"
              },
              {
                "word": "puppy",
                "category": "animals"
              },
              {
                "word": "rabbit",
                "category": "animals"
              },
              {
                "word": "rat",
                "category": "animals"
              },
              {
                "word": "scorpion",
                "category": "animals"
              },
              {
                "word": "seal",
                "category": "animals"
              },
              {
                "word": "shark",
                "category": "animals"
              },
              {
                "word": "sheep",
                "category": "animals"
              },
              {
                "word": "snail",
                "category": "animals"
              },
              {
                "word": "snake",
                "category": "animals"
              },
              {
                "word": "spider",
                "category": "animals"
              },
              {
                "word": "squirrel",
                "category": "animals"
              },
              {
                "word": "tiger",
                "category": "animals"
              },
              {
                "word": "turtle",
                "category": "animals"
              },
              {
                "word": "wolf",
                "category": "animals"
              },
              {
                "word": "zebra",
                "category": "animals"
              },
              {
                "word": "",
                "category": "animals"
              },
              {
                "word": "color list:",
                "category": "animals"
              },
              {
                "word": "",
                "category": "animals"
              },
              {
                "word": "white",
                "category": "animals"
              },
              {
                "word": "silver",
                "category": "animals"
              },
              {
                "word": "gray",
                "category": "animals"
              },
              {
                "word": "black",
                "category": "animals"
              },
              {
                "word": "red",
                "category": "animals"
              },
              {
                "word": "maroon",
                "category": "animals"
              },
              {
                "word": "yellow",
                "category": "animals"
              },
              {
                "word": "olive",
                "category": "animals"
              },
              {
                "word": "lime",
                "category": "animals"
              },
              {
                "word": "green",
                "category": "animals"
              },
              {
                "word": "aqua",
                "category": "animals"
              },
              {
                "word": "teal",
                "category": "animals"
              },
              {
                "word": "blue",
                "category": "animals"
              },
              {
                "word": "navy",
                "category": "animals"
              },
              {
                "word": "purple",
                "category": "animals"
              },
              {
                "word": "belt",
                "category": "clothes"
              },
              {
                "word": "boots",
                "category": "clothes"
              },
              {
                "word": "cap",
                "category": "clothes"
              },
              {
                "word": "coat",
                "category": "clothes"
              },
              {
                "word": "dress",
                "category": "clothes"
              },
              {
                "word": "gloves",
                "category": "clothes"
              },
              {
                "word": "hat",
                "category": "clothes"
              },
              {
                "word": "jacket",
                "category": "clothes"
              },
              {
                "word": "jeans",
                "category": "clothes"
              },
              {
                "word": "pajamas",
                "category": "clothes"
              },
              {
                "word": "pants",
                "category": "clothes"
              },
              {
                "word": "raincoat",
                "category": "clothes"
              },
              {
                "word": "scarf",
                "category": "clothes"
              },
              {
                "word": "shirt",
                "category": "clothes"
              },
              {
                "word": "shoes",
                "category": "clothes"
              },
              {
                "word": "skirt",
                "category": "clothes"
              },
              {
                "word": "slacks",
                "category": "clothes"
              },
              {
                "word": "slippers",
                "category": "clothes"
              },
              {
                "word": "socks",
                "category": "clothes"
              },
              {
                "word": "stockings",
                "category": "clothes"
              },
              {
                "word": "suit",
                "category": "clothes"
              },
              {
                "word": "sweater",
                "category": "clothes"
              },
              {
                "word": "sweatshirt",
                "category": "clothes"
              },
              {
                "word": "t-shirt",
                "category": "clothes"
              },
              {
                "word": "tie",
                "category": "clothes"
              },
              {
                "word": "trousers",
                "category": "clothes"
              },
              {
                "word": "underclothes",
                "category": "clothes"
              },
              {
                "word": "underpants",
                "category": "clothes"
              },
              {
                "word": "undershirt",
                "category": "clothes"
              },
              {
                "word": "white",
                "category": "colors"
              },
              {
                "word": "silver",
                "category": "colors"
              },
              {
                "word": "gray",
                "category": "colors"
              },
              {
                "word": "black",
                "category": "colors"
              },
              {
                "word": "red",
                "category": "colors"
              },
              {
                "word": "yellow",
                "category": "colors"
              },
              {
                "word": "olive",
                "category": "colors"
              },
              {
                "word": "lime",
                "category": "colors"
              },
              {
                "word": "green",
                "category": "colors"
              },
              {
                "word": "aqua",
                "category": "colors"
              },
              {
                "word": "teal",
                "category": "colors"
              },
              {
                "word": "blue",
                "category": "colors"
              },
              {
                "word": "purple",
                "category": "colors"
              },
              {
                "word": "Afghanistan",
                "category": "countries"
              },
              {
                "word": "Albania",
                "category": "countries"
              },
              {
                "word": "Algeria",
                "category": "countries"
              },
              {
                "word": "Andorra",
                "category": "countries"
              },
              {
                "word": "Angola",
                "category": "countries"
              },
              {
                "word": "Anguilla",
                "category": "countries"
              },
              {
                "word": "Antigua & Barbuda",
                "category": "countries"
              },
              {
                "word": "Argentina",
                "category": "countries"
              },
              {
                "word": "Armenia",
                "category": "countries"
              },
              {
                "word": "Australia",
                "category": "countries"
              },
              {
                "word": "Austria",
                "category": "countries"
              },
              {
                "word": "Azerbaijan",
                "category": "countries"
              },
              {
                "word": "Bahamas",
                "category": "countries"
              },
              {
                "word": "Bahrain",
                "category": "countries"
              },
              {
                "word": "Bangladesh",
                "category": "countries"
              },
              {
                "word": "Barbados",
                "category": "countries"
              },
              {
                "word": "Belarus",
                "category": "countries"
              },
              {
                "word": "Belgium",
                "category": "countries"
              },
              {
                "word": "Belize",
                "category": "countries"
              },
              {
                "word": "Benin",
                "category": "countries"
              },
              {
                "word": "Bermuda",
                "category": "countries"
              },
              {
                "word": "Bhutan",
                "category": "countries"
              },
              {
                "word": "Bolivia",
                "category": "countries"
              },
              {
                "word": "Bosnia & Herzegovina",
                "category": "countries"
              },
              {
                "word": "Botswana",
                "category": "countries"
              },
              {
                "word": "Brazil",
                "category": "countries"
              },
              {
                "word": "Brunei Darussalam",
                "category": "countries"
              },
              {
                "word": "Bulgaria",
                "category": "countries"
              },
              {
                "word": "Burkina Faso",
                "category": "countries"
              },
              {
                "word": "Myanmar\u002FBurma",
                "category": "countries"
              },
              {
                "word": "Burundi",
                "category": "countries"
              },
              {
                "word": "Cambodia",
                "category": "countries"
              },
              {
                "word": "Cameroon",
                "category": "countries"
              },
              {
                "word": "Canada",
                "category": "countries"
              },
              {
                "word": "Cape Verde",
                "category": "countries"
              },
              {
                "word": "Cayman Islands",
                "category": "countries"
              },
              {
                "word": "Central African Republic",
                "category": "countries"
              },
              {
                "word": "Chad",
                "category": "countries"
              },
              {
                "word": "Chile",
                "category": "countries"
              },
              {
                "word": "China",
                "category": "countries"
              },
              {
                "word": "Colombia",
                "category": "countries"
              },
              {
                "word": "Comoros",
                "category": "countries"
              },
              {
                "word": "Congo",
                "category": "countries"
              },
              {
                "word": "Costa Rica",
                "category": "countries"
              },
              {
                "word": "Croatia",
                "category": "countries"
              },
              {
                "word": "Cuba",
                "category": "countries"
              },
              {
                "word": "Cyprus",
                "category": "countries"
              },
              {
                "word": "Czech Republic",
                "category": "countries"
              },
              {
                "word": "Democratic Republic of the Congo",
                "category": "countries"
              },
              {
                "word": "Denmark",
                "category": "countries"
              },
              {
                "word": "Djibouti",
                "category": "countries"
              },
              {
                "word": "Dominican Republic",
                "category": "countries"
              },
              {
                "word": "Dominica",
                "category": "countries"
              },
              {
                "word": "Ecuador",
                "category": "countries"
              },
              {
                "word": "Egypt",
                "category": "countries"
              },
              {
                "word": "El Salvador",
                "category": "countries"
              },
              {
                "word": "Equatorial Guinea",
                "category": "countries"
              },
              {
                "word": "Eritrea",
                "category": "countries"
              },
              {
                "word": "Estonia",
                "category": "countries"
              },
              {
                "word": "Ethiopia",
                "category": "countries"
              },
              {
                "word": "Fiji",
                "category": "countries"
              },
              {
                "word": "Finland",
                "category": "countries"
              },
              {
                "word": "France",
                "category": "countries"
              },
              {
                "word": "French Guiana",
                "category": "countries"
              },
              {
                "word": "Gabon",
                "category": "countries"
              },
              {
                "word": "Gambia",
                "category": "countries"
              },
              {
                "word": "Georgia",
                "category": "countries"
              },
              {
                "word": "Germany",
                "category": "countries"
              },
              {
                "word": "Ghana",
                "category": "countries"
              },
              {
                "word": "Great Britain",
                "category": "countries"
              },
              {
                "word": "Greece",
                "category": "countries"
              },
              {
                "word": "Grenada",
                "category": "countries"
              },
              {
                "word": "Guadeloupe",
                "category": "countries"
              },
              {
                "word": "Guatemala",
                "category": "countries"
              },
              {
                "word": "Guinea",
                "category": "countries"
              },
              {
                "word": "Guinea-Bissau",
                "category": "countries"
              },
              {
                "word": "Guyana",
                "category": "countries"
              },
              {
                "word": "Haiti",
                "category": "countries"
              },
              {
                "word": "Honduras",
                "category": "countries"
              },
              {
                "word": "Hungary",
                "category": "countries"
              },
              {
                "word": "Iceland",
                "category": "countries"
              },
              {
                "word": "India",
                "category": "countries"
              },
              {
                "word": "Indonesia",
                "category": "countries"
              },
              {
                "word": "Iran",
                "category": "countries"
              },
              {
                "word": "Iraq",
                "category": "countries"
              },
              {
                "word": "Israel and the Occupied Territories",
                "category": "countries"
              },
              {
                "word": "Italy",
                "category": "countries"
              },
              {
                "word": "Ivory Coast (Cote d'Ivoire)",
                "category": "countries"
              },
              {
                "word": "Jamaica",
                "category": "countries"
              },
              {
                "word": "Japan",
                "category": "countries"
              },
              {
                "word": "Jordan",
                "category": "countries"
              },
              {
                "word": "Kazakhstan",
                "category": "countries"
              },
              {
                "word": "Kenya",
                "category": "countries"
              },
              {
                "word": "Kosovo",
                "category": "countries"
              },
              {
                "word": "Kuwait",
                "category": "countries"
              },
              {
                "word": "Kyrgyz Republic (Kyrgyzstan)",
                "category": "countries"
              },
              {
                "word": "Laos",
                "category": "countries"
              },
              {
                "word": "Latvia",
                "category": "countries"
              },
              {
                "word": "Lebanon",
                "category": "countries"
              },
              {
                "word": "Lesotho",
                "category": "countries"
              },
              {
                "word": "Liberia",
                "category": "countries"
              },
              {
                "word": "Libya",
                "category": "countries"
              },
              {
                "word": "Liechtenstein",
                "category": "countries"
              },
              {
                "word": "Lithuania",
                "category": "countries"
              },
              {
                "word": "Luxembourg",
                "category": "countries"
              },
              {
                "word": "Republic of Macedonia",
                "category": "countries"
              },
              {
                "word": "Madagascar",
                "category": "countries"
              },
              {
                "word": "Malawi",
                "category": "countries"
              },
              {
                "word": "Malaysia",
                "category": "countries"
              },
              {
                "word": "Maldives",
                "category": "countries"
              },
              {
                "word": "Mali",
                "category": "countries"
              },
              {
                "word": "Malta",
                "category": "countries"
              },
              {
                "word": "Martinique",
                "category": "countries"
              },
              {
                "word": "Mauritania",
                "category": "countries"
              },
              {
                "word": "Mauritius",
                "category": "countries"
              },
              {
                "word": "Mayotte",
                "category": "countries"
              },
              {
                "word": "Mexico",
                "category": "countries"
              },
              {
                "word": "Moldova, Republic of",
                "category": "countries"
              },
              {
                "word": "Monaco",
                "category": "countries"
              },
              {
                "word": "Mongolia",
                "category": "countries"
              },
              {
                "word": "Montenegro",
                "category": "countries"
              },
              {
                "word": "Montserrat",
                "category": "countries"
              },
              {
                "word": "Morocco",
                "category": "countries"
              },
              {
                "word": "Mozambique",
                "category": "countries"
              },
              {
                "word": "Namibia",
                "category": "countries"
              },
              {
                "word": "Nepal",
                "category": "countries"
              },
              {
                "word": "Netherlands",
                "category": "countries"
              },
              {
                "word": "New Zealand",
                "category": "countries"
              },
              {
                "word": "Nicaragua",
                "category": "countries"
              },
              {
                "word": "Niger",
                "category": "countries"
              },
              {
                "word": "Nigeria",
                "category": "countries"
              },
              {
                "word": "Korea, Democratic Republic of (North Korea)",
                "category": "countries"
              },
              {
                "word": "Norway",
                "category": "countries"
              },
              {
                "word": "Oman",
                "category": "countries"
              },
              {
                "word": "Pacific Islands",
                "category": "countries"
              },
              {
                "word": "Pakistan",
                "category": "countries"
              },
              {
                "word": "Panama",
                "category": "countries"
              },
              {
                "word": "Papua New Guinea",
                "category": "countries"
              },
              {
                "word": "Paraguay",
                "category": "countries"
              },
              {
                "word": "Peru",
                "category": "countries"
              },
              {
                "word": "Philippines",
                "category": "countries"
              },
              {
                "word": "Poland",
                "category": "countries"
              },
              {
                "word": "Portugal",
                "category": "countries"
              },
              {
                "word": "Puerto Rico",
                "category": "countries"
              },
              {
                "word": "Qatar",
                "category": "countries"
              },
              {
                "word": "Reunion",
                "category": "countries"
              },
              {
                "word": "Romania",
                "category": "countries"
              },
              {
                "word": "Russian Federation",
                "category": "countries"
              },
              {
                "word": "Rwanda",
                "category": "countries"
              },
              {
                "word": "Saint Kitts and Nevis",
                "category": "countries"
              },
              {
                "word": "Saint Lucia",
                "category": "countries"
              },
              {
                "word": "Saint Vincent's & Grenadines",
                "category": "countries"
              },
              {
                "word": "Samoa",
                "category": "countries"
              },
              {
                "word": "Sao Tome and Principe",
                "category": "countries"
              },
              {
                "word": "Saudi Arabia",
                "category": "countries"
              },
              {
                "word": "Senegal",
                "category": "countries"
              },
              {
                "word": "Serbia",
                "category": "countries"
              },
              {
                "word": "Seychelles",
                "category": "countries"
              },
              {
                "word": "Sierra Leone",
                "category": "countries"
              },
              {
                "word": "Singapore",
                "category": "countries"
              },
              {
                "word": "Slovak Republic (Slovakia)",
                "category": "countries"
              },
              {
                "word": "Slovenia",
                "category": "countries"
              },
              {
                "word": "Solomon Islands",
                "category": "countries"
              },
              {
                "word": "Somalia",
                "category": "countries"
              },
              {
                "word": "South Africa",
                "category": "countries"
              },
              {
                "word": "Korea, Republic of (South Korea)",
                "category": "countries"
              },
              {
                "word": "South Sudan",
                "category": "countries"
              },
              {
                "word": "Spain",
                "category": "countries"
              },
              {
                "word": "Sri Lanka",
                "category": "countries"
              },
              {
                "word": "Sudan",
                "category": "countries"
              },
              {
                "word": "Suriname",
                "category": "countries"
              },
              {
                "word": "Swaziland",
                "category": "countries"
              },
              {
                "word": "Sweden",
                "category": "countries"
              },
              {
                "word": "Switzerland",
                "category": "countries"
              },
              {
                "word": "Syria",
                "category": "countries"
              },
              {
                "word": "Tajikistan",
                "category": "countries"
              },
              {
                "word": "Tanzania",
                "category": "countries"
              },
              {
                "word": "Thailand",
                "category": "countries"
              },
              {
                "word": "Timor Leste",
                "category": "countries"
              },
              {
                "word": "Togo",
                "category": "countries"
              },
              {
                "word": "Trinidad & Tobago",
                "category": "countries"
              },
              {
                "word": "Tunisia",
                "category": "countries"
              },
              {
                "word": "Turkey",
                "category": "countries"
              },
              {
                "word": "Turkmenistan",
                "category": "countries"
              },
              {
                "word": "Turks & Caicos Islands",
                "category": "countries"
              },
              {
                "word": "Uganda",
                "category": "countries"
              },
              {
                "word": "Ukraine",
                "category": "countries"
              },
              {
                "word": "United Arab Emirates",
                "category": "countries"
              },
              {
                "word": "United States of America (USA)",
                "category": "countries"
              },
              {
                "word": "Uruguay",
                "category": "countries"
              },
              {
                "word": "Uzbekistan",
                "category": "countries"
              },
              {
                "word": "Venezuela",
                "category": "countries"
              },
              {
                "word": "Vietnam",
                "category": "countries"
              },
              {
                "word": "Virgin Islands (UK)",
                "category": "countries"
              },
              {
                "word": "Virgin Islands (US)",
                "category": "countries"
              },
              {
                "word": "Yemen",
                "category": "countries"
              },
              {
                "word": "Zambia",
                "category": "countries"
              },
              {
                "word": "Zimbabwe",
                "category": "countries"
              },
              {
                "word": "wrestling",
                "category": "sports"
              },
              {
                "word": "water polo",
                "category": "sports"
              },
              {
                "word": "table tennis",
                "category": "sports"
              },
              {
                "word": "hurling",
                "category": "sports"
              },
              {
                "word": "skiing",
                "category": "sports"
              },
              {
                "word": "badminton",
                "category": "sports"
              },
              {
                "word": "field hockey",
                "category": "sports"
              },
              {
                "word": "mixed martial arts",
                "category": "sports"
              },
              {
                "word": "bowling",
                "category": "sports"
              },
              {
                "word": "handball",
                "category": "sports"
              },
              {
                "word": "track and field",
                "category": "sports"
              },
              {
                "word": "lacrosse",
                "category": "sports"
              },
              {
                "word": "cycling",
                "category": "sports"
              },
              {
                "word": "american football",
                "category": "sports"
              },
              {
                "word": "car racing",
                "category": "sports"
              },
              {
                "word": "baseball",
                "category": "sports"
              },
              {
                "word": "boxing",
                "category": "sports"
              },
              {
                "word": "rugby",
                "category": "sports"
              },
              {
                "word": "volleyball",
                "category": "sports"
              },
              {
                "word": "ice hockey",
                "category": "sports"
              },
              {
                "word": "tennis",
                "category": "sports"
              },
              {
                "word": "golf",
                "category": "sports"
              },
              {
                "word": "cricket",
                "category": "sports"
              },
              {
                "word": "basketball",
                "category": "sports"
              },
              {
                "word": "soccer",
                "category": "sports"
              }
            ],
            "responses": {},
            "messageHandlers": {
              "before:prepare": function anonymous() {
/*
  This code generates the stimulus sequence manually
  from the stimuli specified in the loop content.
  This wouldn't usually be necessary: The loop
  can sample and shuffle stimuli itself; however,
  doing it ourselves gives us a bit more control.
  Specifically, it's (slightly) easier to capture 
  and store the sequence of digits (see below).
*/
//three tasks
//select categories
var possibleCategories = 
  ["animals", "colors", "clothes", "countries", "sports"];
var category1 = 
  possibleCategories
    [Math.floor(Math.random()*possibleCategories.length)];
var index = possibleCategories.indexOf(category1);
possibleCategories.splice(index,1);
var category2 = 
  possibleCategories
    [Math.floor(Math.random()*possibleCategories.length)];
index = possibleCategories.indexOf(category2);
possibleCategories.splice(index,1);
var category3 = 
  possibleCategories
    [Math.floor(Math.random()*possibleCategories.length)];
//define lists
var list1 = [];
var list2 = [];
var list3 = [];
for(i = 0; i < this.options.templateParameters.length; ++i){
  var e = this.options.templateParameters[i];
  if(e.category === category1){
    list1.push(e);
  }
  else if(e.category === category2){
    list2.push(e);
  }
  else if(e.category === category3){
    list3.push(e);
  }
}
var list= 
  this.random.sample(
    list1,
    this.aggregateParameters.span_length / 3
).concat(this.random.sample(
    list2,
    this.aggregateParameters.span_length / 3
)).concat(this.random.sample(
    list3,
    this.aggregateParameters.span_length / 3
)).concat(this.random.sample(
    this.options.templateParameters,
    this.aggregateParameters.span_length % 3
));
this.options.templateParameters = this.random.sample(
  list,
  list.length
)

// Extract the presented stimuli and store them seperately,
// as a feature of the overall trial sequence.
this.parent.options.parameters.span = 
  this.options.templateParameters.map(
    function(repetition) { return repetition }
  )
}
            },
            "title": "Learning phase",
            "shuffle": false,
            "parameters": {},
            "template": {
              "type": "lab.html.Screen",
              "responses": {},
              "messageHandlers": {
                "before:prepare": function anonymous() {
// We don't need screen-by-screen data for
// the stimulus presentation
this.options.datacommit = false
}
              },
              "title": "Word presentation",
              "content": "\u003Cmain\n  class=\"content-horizontal-center content-vertical-center\"\n  style=\"font-size: 5rem; font-weight: bold\"\n\u003E\n  ${ parameters.word }\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  You will be asked to keep track of the last words in each category.\u003Cbr\u003E\n  This word is of category: ${ parameters.category}\n  \u003C!-- alternatively, we can give a fixed list of categories across each run.--\u003E\n  \u003C!-- but idk how to...--\u003E\n\u003C\u002Ffooter\u003E",
              "timeout": "2000",
              "parameters": {}
            }
          },
          {
            "type": "lab.html.Screen",
            "responses": {},
            "messageHandlers": {
              "before:prepare": function anonymous() {
// Setup handler for button clicks
this.options.events['click button'] = function(event) {
  // Which button was clicked?
  const button = event.currentTarget.attributes.name.value

  // Terminate screen if participant is done,
  // otherwise log response, deactivate button,
  // and continue.
  if (button === 'done') {
    this.end('done')
  }
}
},
              "after:end": function anonymous() {
  var correctResponse = [];
  var testList = this.parent.options.parameters.span;
  var correctCategory1Index = testList.length - 1;
  var correctCategory2Index;
  for(i = testList.length - 1; 
    i>=0 && testList[correctCategory1Index].category === testList[i].category;
    --i)
    ;
  correctCategory2Index = i;
  var correctCategory3Index;
  for(i = testList.length - 1; 
    i>=0 
      && (testList[correctCategory1Index].category === testList[i].category
      || testList[correctCategory2Index].category === testList[i].category);
    --i)
    ;
  correctCategory3Index = i;
  correctResponse.push(testList[correctCategory1Index].word);
  correctResponse.push(testList[correctCategory2Index].word);
  correctResponse.push(testList[correctCategory3Index].word);
  correctResponse.sort();

  const r0 = document.getElementsByTagName('input')[0].value;
  const r1 = document.getElementsByTagName('input')[1].value;
  const r2 = document.getElementsByTagName('input')[2].value;
  this.data.responses = [r0, r1, r2];
  this.data.responses.sort();
  
  this.data.correct = correctResponse.every(
    (word, index) => word === this.data.responses[index]
  )
}
            },
            "title": "Recall",
            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cp\u003EWhat's the three words from the three categories in this trial?\u003C\u002Fp\u003E\n  \u003Cp\u003EType them in the boxes below.\u003C\u002Fp\u003E\n  \u003Cform\u003E\n    Word 1:\u003Cbr\u003E\n    \u003Cinput type=\"text\" name=\"category1Answer\"\u003E\u003Cbr\u003E\n    Word 2:\u003Cbr\u003E\n    \u003Cinput type=\"text\" name=\"category2Answer\"\u003E\u003Cbr\u003E\n    Word 3:\u003Cbr\u003E\n    \u003Cinput type=\"text\" name=\"category3Answer\"\u003E\u003Cbr\u003E\n  \u003C\u002Fform\u003E\n  \u003Ctd colspan=\"2\"\u003E\n        \u003Cbutton name=\"done\"\u003EDone &rarr;\u003C\u002Fbutton\u003E\n  \u003C\u002Ftd\u003E\n\u003C\u002Fmain\u003E",
            "parameters": {}
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "span_length": "15"
        },
        {
          "span_length": "15"
        },
        {
          "span_length": "15"
        },
        {
          "span_length": "15"
        },
        {
          "span_length": "15"
        }
      ],
      "responses": {},
      "messageHandlers": {},
      "title": "Keep Track Task Part 2",
      "parameters": {},
      "template": {
        "type": "lab.flow.Sequence",
        "responses": {},
        "messageHandlers": {},
        "title": "Trial sequence",
        "parameters": {},
        "content": [
          {
            "type": "lab.html.Screen",
            "responses": {
              "click button#continue": "continue"
            },
            "messageHandlers": {},
            "title": "Get-set-go",
            "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-s text-justify\"\u003E\n    \u003Ch2 class=\"text-center\"\u003EReady?\u003C\u002Fh2\u003E\n    \u003Cp\u003EThere are \u003Cstrong\u003Ealso\u003C\u002Fstrong\u003E runs in this part. You will see a sequence of words on the center of the screen. All words belong to five chosen categories: animals, colors, clothes, countries, and sports. Exactly \u003Cstrong\u003Efour\u003C\u002Fstrong\u003E of these categories will be present in each run, but the words' categories vary from run to run. At the end of each run, you will be asked to type the \u003Cstrong\u003Elast\u003C\u002Fstrong\u003E word in each of those three categories. The category of every word will be hinted at the bottom of the screen. Please do your best.\u003C\u002Fp\u003E\n    \u003Cp\u003EWhen you're ready, please press \u003Ckbd\u003EContinue\u003C\u002Fkbd\u003E below.\u003C\u002Fp\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003E\n    Continue &rarr;\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
            "parameters": {}
          },
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "word": "alligator",
                "category": "animals"
              },
              {
                "word": "ant",
                "category": "animals"
              },
              {
                "word": "bear",
                "category": "animals"
              },
              {
                "word": "bee",
                "category": "animals"
              },
              {
                "word": "bird",
                "category": "animals"
              },
              {
                "word": "camel",
                "category": "animals"
              },
              {
                "word": "cat",
                "category": "animals"
              },
              {
                "word": "cheetah",
                "category": "animals"
              },
              {
                "word": "chicken",
                "category": "animals"
              },
              {
                "word": "chimpanzee",
                "category": "animals"
              },
              {
                "word": "cow",
                "category": "animals"
              },
              {
                "word": "crocodile",
                "category": "animals"
              },
              {
                "word": "deer",
                "category": "animals"
              },
              {
                "word": "dog",
                "category": "animals"
              },
              {
                "word": "dolphin",
                "category": "animals"
              },
              {
                "word": "duck",
                "category": "animals"
              },
              {
                "word": "eagle",
                "category": "animals"
              },
              {
                "word": "elephant",
                "category": "animals"
              },
              {
                "word": "fish",
                "category": "animals"
              },
              {
                "word": "fly",
                "category": "animals"
              },
              {
                "word": "fox",
                "category": "animals"
              },
              {
                "word": "frog",
                "category": "animals"
              },
              {
                "word": "giraffe",
                "category": "animals"
              },
              {
                "word": "goat",
                "category": "animals"
              },
              {
                "word": "goldfish",
                "category": "animals"
              },
              {
                "word": "hamster",
                "category": "animals"
              },
              {
                "word": "hippopotamus",
                "category": "animals"
              },
              {
                "word": "horse",
                "category": "animals"
              },
              {
                "word": "kangaroo",
                "category": "animals"
              },
              {
                "word": "kitten",
                "category": "animals"
              },
              {
                "word": "lion",
                "category": "animals"
              },
              {
                "word": "lobster",
                "category": "animals"
              },
              {
                "word": "monkey",
                "category": "animals"
              },
              {
                "word": "octopus",
                "category": "animals"
              },
              {
                "word": "owl",
                "category": "animals"
              },
              {
                "word": "panda",
                "category": "animals"
              },
              {
                "word": "pig",
                "category": "animals"
              },
              {
                "word": "puppy",
                "category": "animals"
              },
              {
                "word": "rabbit",
                "category": "animals"
              },
              {
                "word": "rat",
                "category": "animals"
              },
              {
                "word": "scorpion",
                "category": "animals"
              },
              {
                "word": "seal",
                "category": "animals"
              },
              {
                "word": "shark",
                "category": "animals"
              },
              {
                "word": "sheep",
                "category": "animals"
              },
              {
                "word": "snail",
                "category": "animals"
              },
              {
                "word": "snake",
                "category": "animals"
              },
              {
                "word": "spider",
                "category": "animals"
              },
              {
                "word": "squirrel",
                "category": "animals"
              },
              {
                "word": "tiger",
                "category": "animals"
              },
              {
                "word": "turtle",
                "category": "animals"
              },
              {
                "word": "wolf",
                "category": "animals"
              },
              {
                "word": "zebra",
                "category": "animals"
              },
              {
                "word": "",
                "category": "animals"
              },
              {
                "word": "color list:",
                "category": "animals"
              },
              {
                "word": "",
                "category": "animals"
              },
              {
                "word": "white",
                "category": "animals"
              },
              {
                "word": "silver",
                "category": "animals"
              },
              {
                "word": "gray",
                "category": "animals"
              },
              {
                "word": "black",
                "category": "animals"
              },
              {
                "word": "red",
                "category": "animals"
              },
              {
                "word": "maroon",
                "category": "animals"
              },
              {
                "word": "yellow",
                "category": "animals"
              },
              {
                "word": "olive",
                "category": "animals"
              },
              {
                "word": "lime",
                "category": "animals"
              },
              {
                "word": "green",
                "category": "animals"
              },
              {
                "word": "aqua",
                "category": "animals"
              },
              {
                "word": "teal",
                "category": "animals"
              },
              {
                "word": "blue",
                "category": "animals"
              },
              {
                "word": "navy",
                "category": "animals"
              },
              {
                "word": "purple",
                "category": "animals"
              },
              {
                "word": "belt",
                "category": "clothes"
              },
              {
                "word": "boots",
                "category": "clothes"
              },
              {
                "word": "cap",
                "category": "clothes"
              },
              {
                "word": "coat",
                "category": "clothes"
              },
              {
                "word": "dress",
                "category": "clothes"
              },
              {
                "word": "gloves",
                "category": "clothes"
              },
              {
                "word": "hat",
                "category": "clothes"
              },
              {
                "word": "jacket",
                "category": "clothes"
              },
              {
                "word": "jeans",
                "category": "clothes"
              },
              {
                "word": "pajamas",
                "category": "clothes"
              },
              {
                "word": "pants",
                "category": "clothes"
              },
              {
                "word": "raincoat",
                "category": "clothes"
              },
              {
                "word": "scarf",
                "category": "clothes"
              },
              {
                "word": "shirt",
                "category": "clothes"
              },
              {
                "word": "shoes",
                "category": "clothes"
              },
              {
                "word": "skirt",
                "category": "clothes"
              },
              {
                "word": "slacks",
                "category": "clothes"
              },
              {
                "word": "slippers",
                "category": "clothes"
              },
              {
                "word": "socks",
                "category": "clothes"
              },
              {
                "word": "stockings",
                "category": "clothes"
              },
              {
                "word": "suit",
                "category": "clothes"
              },
              {
                "word": "sweater",
                "category": "clothes"
              },
              {
                "word": "sweatshirt",
                "category": "clothes"
              },
              {
                "word": "t-shirt",
                "category": "clothes"
              },
              {
                "word": "tie",
                "category": "clothes"
              },
              {
                "word": "trousers",
                "category": "clothes"
              },
              {
                "word": "underclothes",
                "category": "clothes"
              },
              {
                "word": "underpants",
                "category": "clothes"
              },
              {
                "word": "undershirt",
                "category": "clothes"
              },
              {
                "word": "white",
                "category": "colors"
              },
              {
                "word": "silver",
                "category": "colors"
              },
              {
                "word": "gray",
                "category": "colors"
              },
              {
                "word": "black",
                "category": "colors"
              },
              {
                "word": "red",
                "category": "colors"
              },
              {
                "word": "yellow",
                "category": "colors"
              },
              {
                "word": "olive",
                "category": "colors"
              },
              {
                "word": "lime",
                "category": "colors"
              },
              {
                "word": "green",
                "category": "colors"
              },
              {
                "word": "aqua",
                "category": "colors"
              },
              {
                "word": "teal",
                "category": "colors"
              },
              {
                "word": "blue",
                "category": "colors"
              },
              {
                "word": "purple",
                "category": "colors"
              },
              {
                "word": "Afghanistan",
                "category": "countries"
              },
              {
                "word": "Albania",
                "category": "countries"
              },
              {
                "word": "Algeria",
                "category": "countries"
              },
              {
                "word": "Andorra",
                "category": "countries"
              },
              {
                "word": "Angola",
                "category": "countries"
              },
              {
                "word": "Anguilla",
                "category": "countries"
              },
              {
                "word": "Antigua & Barbuda",
                "category": "countries"
              },
              {
                "word": "Argentina",
                "category": "countries"
              },
              {
                "word": "Armenia",
                "category": "countries"
              },
              {
                "word": "Australia",
                "category": "countries"
              },
              {
                "word": "Austria",
                "category": "countries"
              },
              {
                "word": "Azerbaijan",
                "category": "countries"
              },
              {
                "word": "Bahamas",
                "category": "countries"
              },
              {
                "word": "Bahrain",
                "category": "countries"
              },
              {
                "word": "Bangladesh",
                "category": "countries"
              },
              {
                "word": "Barbados",
                "category": "countries"
              },
              {
                "word": "Belarus",
                "category": "countries"
              },
              {
                "word": "Belgium",
                "category": "countries"
              },
              {
                "word": "Belize",
                "category": "countries"
              },
              {
                "word": "Benin",
                "category": "countries"
              },
              {
                "word": "Bermuda",
                "category": "countries"
              },
              {
                "word": "Bhutan",
                "category": "countries"
              },
              {
                "word": "Bolivia",
                "category": "countries"
              },
              {
                "word": "Bosnia & Herzegovina",
                "category": "countries"
              },
              {
                "word": "Botswana",
                "category": "countries"
              },
              {
                "word": "Brazil",
                "category": "countries"
              },
              {
                "word": "Brunei Darussalam",
                "category": "countries"
              },
              {
                "word": "Bulgaria",
                "category": "countries"
              },
              {
                "word": "Burkina Faso",
                "category": "countries"
              },
              {
                "word": "Myanmar\u002FBurma",
                "category": "countries"
              },
              {
                "word": "Burundi",
                "category": "countries"
              },
              {
                "word": "Cambodia",
                "category": "countries"
              },
              {
                "word": "Cameroon",
                "category": "countries"
              },
              {
                "word": "Canada",
                "category": "countries"
              },
              {
                "word": "Cape Verde",
                "category": "countries"
              },
              {
                "word": "Cayman Islands",
                "category": "countries"
              },
              {
                "word": "Central African Republic",
                "category": "countries"
              },
              {
                "word": "Chad",
                "category": "countries"
              },
              {
                "word": "Chile",
                "category": "countries"
              },
              {
                "word": "China",
                "category": "countries"
              },
              {
                "word": "Colombia",
                "category": "countries"
              },
              {
                "word": "Comoros",
                "category": "countries"
              },
              {
                "word": "Congo",
                "category": "countries"
              },
              {
                "word": "Costa Rica",
                "category": "countries"
              },
              {
                "word": "Croatia",
                "category": "countries"
              },
              {
                "word": "Cuba",
                "category": "countries"
              },
              {
                "word": "Cyprus",
                "category": "countries"
              },
              {
                "word": "Czech Republic",
                "category": "countries"
              },
              {
                "word": "Democratic Republic of the Congo",
                "category": "countries"
              },
              {
                "word": "Denmark",
                "category": "countries"
              },
              {
                "word": "Djibouti",
                "category": "countries"
              },
              {
                "word": "Dominican Republic",
                "category": "countries"
              },
              {
                "word": "Dominica",
                "category": "countries"
              },
              {
                "word": "Ecuador",
                "category": "countries"
              },
              {
                "word": "Egypt",
                "category": "countries"
              },
              {
                "word": "El Salvador",
                "category": "countries"
              },
              {
                "word": "Equatorial Guinea",
                "category": "countries"
              },
              {
                "word": "Eritrea",
                "category": "countries"
              },
              {
                "word": "Estonia",
                "category": "countries"
              },
              {
                "word": "Ethiopia",
                "category": "countries"
              },
              {
                "word": "Fiji",
                "category": "countries"
              },
              {
                "word": "Finland",
                "category": "countries"
              },
              {
                "word": "France",
                "category": "countries"
              },
              {
                "word": "French Guiana",
                "category": "countries"
              },
              {
                "word": "Gabon",
                "category": "countries"
              },
              {
                "word": "Gambia",
                "category": "countries"
              },
              {
                "word": "Georgia",
                "category": "countries"
              },
              {
                "word": "Germany",
                "category": "countries"
              },
              {
                "word": "Ghana",
                "category": "countries"
              },
              {
                "word": "Great Britain",
                "category": "countries"
              },
              {
                "word": "Greece",
                "category": "countries"
              },
              {
                "word": "Grenada",
                "category": "countries"
              },
              {
                "word": "Guadeloupe",
                "category": "countries"
              },
              {
                "word": "Guatemala",
                "category": "countries"
              },
              {
                "word": "Guinea",
                "category": "countries"
              },
              {
                "word": "Guinea-Bissau",
                "category": "countries"
              },
              {
                "word": "Guyana",
                "category": "countries"
              },
              {
                "word": "Haiti",
                "category": "countries"
              },
              {
                "word": "Honduras",
                "category": "countries"
              },
              {
                "word": "Hungary",
                "category": "countries"
              },
              {
                "word": "Iceland",
                "category": "countries"
              },
              {
                "word": "India",
                "category": "countries"
              },
              {
                "word": "Indonesia",
                "category": "countries"
              },
              {
                "word": "Iran",
                "category": "countries"
              },
              {
                "word": "Iraq",
                "category": "countries"
              },
              {
                "word": "Israel and the Occupied Territories",
                "category": "countries"
              },
              {
                "word": "Italy",
                "category": "countries"
              },
              {
                "word": "Ivory Coast (Cote d'Ivoire)",
                "category": "countries"
              },
              {
                "word": "Jamaica",
                "category": "countries"
              },
              {
                "word": "Japan",
                "category": "countries"
              },
              {
                "word": "Jordan",
                "category": "countries"
              },
              {
                "word": "Kazakhstan",
                "category": "countries"
              },
              {
                "word": "Kenya",
                "category": "countries"
              },
              {
                "word": "Kosovo",
                "category": "countries"
              },
              {
                "word": "Kuwait",
                "category": "countries"
              },
              {
                "word": "Kyrgyz Republic (Kyrgyzstan)",
                "category": "countries"
              },
              {
                "word": "Laos",
                "category": "countries"
              },
              {
                "word": "Latvia",
                "category": "countries"
              },
              {
                "word": "Lebanon",
                "category": "countries"
              },
              {
                "word": "Lesotho",
                "category": "countries"
              },
              {
                "word": "Liberia",
                "category": "countries"
              },
              {
                "word": "Libya",
                "category": "countries"
              },
              {
                "word": "Liechtenstein",
                "category": "countries"
              },
              {
                "word": "Lithuania",
                "category": "countries"
              },
              {
                "word": "Luxembourg",
                "category": "countries"
              },
              {
                "word": "Republic of Macedonia",
                "category": "countries"
              },
              {
                "word": "Madagascar",
                "category": "countries"
              },
              {
                "word": "Malawi",
                "category": "countries"
              },
              {
                "word": "Malaysia",
                "category": "countries"
              },
              {
                "word": "Maldives",
                "category": "countries"
              },
              {
                "word": "Mali",
                "category": "countries"
              },
              {
                "word": "Malta",
                "category": "countries"
              },
              {
                "word": "Martinique",
                "category": "countries"
              },
              {
                "word": "Mauritania",
                "category": "countries"
              },
              {
                "word": "Mauritius",
                "category": "countries"
              },
              {
                "word": "Mayotte",
                "category": "countries"
              },
              {
                "word": "Mexico",
                "category": "countries"
              },
              {
                "word": "Moldova, Republic of",
                "category": "countries"
              },
              {
                "word": "Monaco",
                "category": "countries"
              },
              {
                "word": "Mongolia",
                "category": "countries"
              },
              {
                "word": "Montenegro",
                "category": "countries"
              },
              {
                "word": "Montserrat",
                "category": "countries"
              },
              {
                "word": "Morocco",
                "category": "countries"
              },
              {
                "word": "Mozambique",
                "category": "countries"
              },
              {
                "word": "Namibia",
                "category": "countries"
              },
              {
                "word": "Nepal",
                "category": "countries"
              },
              {
                "word": "Netherlands",
                "category": "countries"
              },
              {
                "word": "New Zealand",
                "category": "countries"
              },
              {
                "word": "Nicaragua",
                "category": "countries"
              },
              {
                "word": "Niger",
                "category": "countries"
              },
              {
                "word": "Nigeria",
                "category": "countries"
              },
              {
                "word": "Korea, Democratic Republic of (North Korea)",
                "category": "countries"
              },
              {
                "word": "Norway",
                "category": "countries"
              },
              {
                "word": "Oman",
                "category": "countries"
              },
              {
                "word": "Pacific Islands",
                "category": "countries"
              },
              {
                "word": "Pakistan",
                "category": "countries"
              },
              {
                "word": "Panama",
                "category": "countries"
              },
              {
                "word": "Papua New Guinea",
                "category": "countries"
              },
              {
                "word": "Paraguay",
                "category": "countries"
              },
              {
                "word": "Peru",
                "category": "countries"
              },
              {
                "word": "Philippines",
                "category": "countries"
              },
              {
                "word": "Poland",
                "category": "countries"
              },
              {
                "word": "Portugal",
                "category": "countries"
              },
              {
                "word": "Puerto Rico",
                "category": "countries"
              },
              {
                "word": "Qatar",
                "category": "countries"
              },
              {
                "word": "Reunion",
                "category": "countries"
              },
              {
                "word": "Romania",
                "category": "countries"
              },
              {
                "word": "Russian Federation",
                "category": "countries"
              },
              {
                "word": "Rwanda",
                "category": "countries"
              },
              {
                "word": "Saint Kitts and Nevis",
                "category": "countries"
              },
              {
                "word": "Saint Lucia",
                "category": "countries"
              },
              {
                "word": "Saint Vincent's & Grenadines",
                "category": "countries"
              },
              {
                "word": "Samoa",
                "category": "countries"
              },
              {
                "word": "Sao Tome and Principe",
                "category": "countries"
              },
              {
                "word": "Saudi Arabia",
                "category": "countries"
              },
              {
                "word": "Senegal",
                "category": "countries"
              },
              {
                "word": "Serbia",
                "category": "countries"
              },
              {
                "word": "Seychelles",
                "category": "countries"
              },
              {
                "word": "Sierra Leone",
                "category": "countries"
              },
              {
                "word": "Singapore",
                "category": "countries"
              },
              {
                "word": "Slovak Republic (Slovakia)",
                "category": "countries"
              },
              {
                "word": "Slovenia",
                "category": "countries"
              },
              {
                "word": "Solomon Islands",
                "category": "countries"
              },
              {
                "word": "Somalia",
                "category": "countries"
              },
              {
                "word": "South Africa",
                "category": "countries"
              },
              {
                "word": "Korea, Republic of (South Korea)",
                "category": "countries"
              },
              {
                "word": "South Sudan",
                "category": "countries"
              },
              {
                "word": "Spain",
                "category": "countries"
              },
              {
                "word": "Sri Lanka",
                "category": "countries"
              },
              {
                "word": "Sudan",
                "category": "countries"
              },
              {
                "word": "Suriname",
                "category": "countries"
              },
              {
                "word": "Swaziland",
                "category": "countries"
              },
              {
                "word": "Sweden",
                "category": "countries"
              },
              {
                "word": "Switzerland",
                "category": "countries"
              },
              {
                "word": "Syria",
                "category": "countries"
              },
              {
                "word": "Tajikistan",
                "category": "countries"
              },
              {
                "word": "Tanzania",
                "category": "countries"
              },
              {
                "word": "Thailand",
                "category": "countries"
              },
              {
                "word": "Timor Leste",
                "category": "countries"
              },
              {
                "word": "Togo",
                "category": "countries"
              },
              {
                "word": "Trinidad & Tobago",
                "category": "countries"
              },
              {
                "word": "Tunisia",
                "category": "countries"
              },
              {
                "word": "Turkey",
                "category": "countries"
              },
              {
                "word": "Turkmenistan",
                "category": "countries"
              },
              {
                "word": "Turks & Caicos Islands",
                "category": "countries"
              },
              {
                "word": "Uganda",
                "category": "countries"
              },
              {
                "word": "Ukraine",
                "category": "countries"
              },
              {
                "word": "United Arab Emirates",
                "category": "countries"
              },
              {
                "word": "United States of America (USA)",
                "category": "countries"
              },
              {
                "word": "Uruguay",
                "category": "countries"
              },
              {
                "word": "Uzbekistan",
                "category": "countries"
              },
              {
                "word": "Venezuela",
                "category": "countries"
              },
              {
                "word": "Vietnam",
                "category": "countries"
              },
              {
                "word": "Virgin Islands (UK)",
                "category": "countries"
              },
              {
                "word": "Virgin Islands (US)",
                "category": "countries"
              },
              {
                "word": "Yemen",
                "category": "countries"
              },
              {
                "word": "Zambia",
                "category": "countries"
              },
              {
                "word": "Zimbabwe",
                "category": "countries"
              },
              {
                "word": "wrestling",
                "category": "sports"
              },
              {
                "word": "water polo",
                "category": "sports"
              },
              {
                "word": "table tennis",
                "category": "sports"
              },
              {
                "word": "hurling",
                "category": "sports"
              },
              {
                "word": "skiing",
                "category": "sports"
              },
              {
                "word": "badminton",
                "category": "sports"
              },
              {
                "word": "field hockey",
                "category": "sports"
              },
              {
                "word": "mixed martial arts",
                "category": "sports"
              },
              {
                "word": "bowling",
                "category": "sports"
              },
              {
                "word": "handball",
                "category": "sports"
              },
              {
                "word": "track and field",
                "category": "sports"
              },
              {
                "word": "lacrosse",
                "category": "sports"
              },
              {
                "word": "cycling",
                "category": "sports"
              },
              {
                "word": "american football",
                "category": "sports"
              },
              {
                "word": "car racing",
                "category": "sports"
              },
              {
                "word": "baseball",
                "category": "sports"
              },
              {
                "word": "boxing",
                "category": "sports"
              },
              {
                "word": "rugby",
                "category": "sports"
              },
              {
                "word": "volleyball",
                "category": "sports"
              },
              {
                "word": "ice hockey",
                "category": "sports"
              },
              {
                "word": "tennis",
                "category": "sports"
              },
              {
                "word": "golf",
                "category": "sports"
              },
              {
                "word": "cricket",
                "category": "sports"
              },
              {
                "word": "basketball",
                "category": "sports"
              },
              {
                "word": "soccer",
                "category": "sports"
              }
            ],
            "responses": {},
            "messageHandlers": {
              "before:prepare": function anonymous() {
/*
  This code generates the stimulus sequence manually
  from the stimuli specified in the loop content.
  This wouldn't usually be necessary: The loop
  can sample and shuffle stimuli itself; however,
  doing it ourselves gives us a bit more control.
  Specifically, it's (slightly) easier to capture 
  and store the sequence of digits (see below).
*/
//three tasks
//select categories

var possibleCategories = 
  ["animals", "colors", "clothes", "countries", "sports"];
var category1 = 
  possibleCategories
    [Math.floor(Math.random()*possibleCategories.length)];
var index = possibleCategories.indexOf(category1);
possibleCategories.splice(index,1);
var category2 = 
  possibleCategories
    [Math.floor(Math.random()*possibleCategories.length)];
index = possibleCategories.indexOf(category2);
possibleCategories.splice(index,1);
var category3 = 
  possibleCategories
    [Math.floor(Math.random()*possibleCategories.length)];
var category4 = 
  possibleCategories
    [Math.floor(Math.random()*possibleCategories.length)];
//define lists
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
for(i = 0; i < this.options.templateParameters.length; ++i){
  var e = this.options.templateParameters[i];
  if(e.category === category1){
    list1.push(e);
  }
  else if(e.category === category2){
    list2.push(e);
  }
  else if(e.category === category3){
    list3.push(e);
  }
  else if(e.category === category4){
    list4.push(e);
  }
}
var list= 
  this.random.sample(
    list1,
    this.aggregateParameters.span_length / 4
).concat(this.random.sample(
    list2,
    this.aggregateParameters.span_length / 4
)).concat(this.random.sample(
    list3,
    this.aggregateParameters.span_length / 4
)).concat(this.random.sample(
    list4,
    this.aggregateParameters.span_length / 4
)).concat(this.random.sample(
    this.options.templateParameters,
    this.aggregateParameters.span_length % 4
));
this.options.templateParameters = this.random.sample(
  list,
  list.length
)

// Extract the presented stimuli and store them seperately,
// as a feature of the overall trial sequence.
this.parent.options.parameters.span = 
  this.options.templateParameters.map(
    function(repetition) { return repetition }
  )
}
            },
            "title": "Learning phase",
            "shuffle": false,
            "parameters": {},
            "template": {
              "type": "lab.html.Screen",
              "responses": {},
              "messageHandlers": {
                "before:prepare": function anonymous() {
// We don't need screen-by-screen data for
// the stimulus presentation
this.options.datacommit = false
}
              },
              "title": "Word presentation",
              "content": "\u003Cmain\n  class=\"content-horizontal-center content-vertical-center\"\n  style=\"font-size: 5rem; font-weight: bold\"\n\u003E\n  ${ parameters.word }\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  You will be asked to keep track of the last words in each category.\u003Cbr\u003E\n  This word is of category: ${ parameters.category}\n  \u003C!-- alternatively, we can give a fixed list of categories across each run.--\u003E\n  \u003C!-- but idk how to...--\u003E\n\u003C\u002Ffooter\u003E",
              "timeout": "2000",
              "parameters": {}
            }
          },
          {
            "type": "lab.html.Screen",
            "responses": {},
            "messageHandlers": {
              "before:prepare": function anonymous() {
// Setup handler for button clicks
this.options.events['click button'] = function(event) {
  // Which button was clicked?
  const button = event.currentTarget.attributes.name.value

  // Terminate screen if participant is done,
  // otherwise log response, deactivate button,
  // and continue.
  if (button === 'done') {
    this.end('done')
  }
}
},
              "after:end": function anonymous() {
  var correctResponse = [];
  var testList = this.parent.options.parameters.span;
  var correctCategory1Index = testList.length - 1;
  var correctCategory2Index;
  for(i = testList.length - 1; 
    i>=0 && testList[correctCategory1Index].category === testList[i].category;
    --i)
    ;
  correctCategory2Index = i;
  var correctCategory3Index;
  for(i = testList.length - 1; 
    i>=0 
      && (testList[correctCategory1Index].category === testList[i].category
      || testList[correctCategory2Index].category === testList[i].category);
    --i)
    ;
  correctCategory3Index = i;
  var correctCategory4Index;
  for(i = testList.length - 1; 
    i>=0 
      && (testList[correctCategory1Index].category === testList[i].category
          || testList[correctCategory2Index].category === testList[i].category
          || testList[correctCategory3Index].category === testList[i].category);
    --i)
    ;
  correctCategory4Index = i;
  correctResponse.push(testList[correctCategory1Index].word);
  correctResponse.push(testList[correctCategory2Index].word);
  correctResponse.push(testList[correctCategory3Index].word);
  correctResponse.push(testList[correctCategory4Index].word);
  correctResponse.sort();

  const r0 = document.getElementsByTagName('input')[0].value;
  const r1 = document.getElementsByTagName('input')[1].value;
  const r2 = document.getElementsByTagName('input')[2].value;
  const r3 = document.getElementsByTagName('input')[3].value;
  this.data.responses = [r0, r1, r2, r3];
  this.data.responses.sort();
  
  this.data.correct = correctResponse.every(
    (word, index) => word === this.data.responses[index]
  )
}
            },
            "title": "Recall",
            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cp\u003EWhat's the three words from the three categories in this trial?\u003C\u002Fp\u003E\n  \u003Cp\u003EType them in the boxes below.\u003C\u002Fp\u003E\n  \u003Cform\u003E\n    Word 1:\u003Cbr\u003E\n    \u003Cinput type=\"text\" name=\"category1Answer\"\u003E\u003Cbr\u003E\n    Word 2:\u003Cbr\u003E\n    \u003Cinput type=\"text\" name=\"category2Answer\"\u003E\u003Cbr\u003E\n    Word 3:\u003Cbr\u003E\n    \u003Cinput type=\"text\" name=\"category3Answer\"\u003E\u003Cbr\u003E\n    Word 4:\u003Cbr\u003E\n    \u003Cinput type=\"text\" name=\"category4Answer\"\u003E\u003Cbr\u003E\n  \u003C\u002Fform\u003E\n  \u003Ctd colspan=\"2\"\u003E\n        \u003Cbutton name=\"done\"\u003EDone &rarr;\u003C\u002Fbutton\u003E\n  \u003C\u002Ftd\u003E\n\u003C\u002Fmain\u003E",
            "parameters": {}
          }
        ]
      }
    }
  ]
})

// Add data storage support
study.options.datastore = new lab.data.Store()

// Let's go!
study.run()