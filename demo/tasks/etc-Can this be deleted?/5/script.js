// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "plugins": [
    {
      "type": "lab.plugins.Metadata"
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "stroop-task"
    }
  ],
  "metadata": {
    "title": "Stroop Task",
    "description": "This version of the Stroop Task attempts to replicate the St Clair-Thompson and Gathercole (2006).",
    "repository": "",
    "contributors": "Metascience Design Lab\n* Purav Patel\n* Kelsey Wenzel"
  },
  "parameters": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {
        "keypress(Space)": "space"
      },
      "messageHandlers": {},
      "title": "Instructions - Stroop Block 1 HTML",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv style=\"\n    color: black;\n    text-align: center;\n    font-size: 2.2em;\n    font-family: Serif;\n  \"\u003E\n  \u003Ch5\u003E\n    \u003Cp\u003EWelcome to the Stroop Task! \u003C\u002Fp\u003E\n    \u003Cp\u003EIn this task, there are two blocks.\u003C\u002Fp\u003E\n    \u003Cp\u003EIn the first block will be presented with strings of asterisks. \u003C\u002Fp\u003E\n    \u003Cp\u003EEach string will be printed in 1 of 5 colors (red, green, blue, orange, yellow).\u003C\u002Fp\u003E\n    \u003Cp\u003EFor example, you might see ***** Your job is to name the colors of these asterisks. \u003C\u002Fp\u003E\n    \u003Cp\u003EComplete as many in two minutes as possible.\u003C\u002Fp\u003E\n    \u003Cp\u003EPress the SPACEBAR key to continue.\u003C\u002Fp\u003E\n    \u003C\u002Fh5\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
      "correctResponse": "Space"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word": "*****",
          "color": "red"
        },
        {
          "word": "*****",
          "color": "green"
        },
        {
          "word": "*****",
          "color": "blue"
        },
        {
          "word": "*****",
          "color": "orange"
        },
        {
          "word": "*****",
          "color": "yellow"
        }
      ],
      "responses": {},
      "messageHandlers": {},
      "title": "Block 1 - Loop",
      "shuffle": true,
      "timeout": "120000",
      "sample": {
        "replace": true,
        "n": "1000"
      },
      "parameters": {},
      "template": {
        "type": "lab.html.Screen",
        "parameters": {},
        "responses": {
          "keypress(r)": "red",
          "keypress(g)": "green",
          "keypress(b)": "blue",
          "keypress(o)": "orange",
          "keypress(y)": "yellow"
        },
        "messageHandlers": {},
        "title": "Astericks",
        "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv style=\"\n    font-size: 3.5rem;\n    font-weight: bold;\n    color: ${ parameters.color };\n  \"\u003E\n    ${ parameters.word }\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cp\u003E\n    What's the \u003Cem\u003Ecolor\u003C\u002Fem\u003E of \n    the asterisks shown above? \u003Cbr\u003E\n    Please press \u003Ckbd\u003Er\u003C\u002Fkbd\u003E for red,\n    \u003Ckbd\u003Eg\u003C\u002Fkbd\u003E for green,\n    \u003Ckbd\u003Eb\u003C\u002Fkbd\u003E for blue, \u003Ckbd\u003Ey\u003C\u002Fkbd\u003E for yellow,\n    and \u003Ckbd\u003Eo\u003C\u002Fkbd\u003E for orange.\n  \u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E",
        "timeout": "120000",
        "correctResponse": "${ parameters.color }"
      }
    },
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {
        "keypress(Space)": "Space"
      },
      "messageHandlers": {},
      "title": "Instructions - Stroop Block 2 HTML",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv style=\"\n    color: black;\n    text-align: center;\n    font-size: 2.2em;\n    font-family: Serif;\n  \"\u003E\n  \u003Ch5\u003E\n    \u003Cp\u003EYou completed the first block ! \u003C\u002Fp\u003E\n    \u003Cp\u003EIn the second block, you will be presented with words. Each word will be printed in 1 of 5 colors (red, green, blue, orange, yellow).\u003C\u002Fp\u003E\n    \u003Cp\u003EFor example, you might see RED (in green text). \u003C\u002Fp\u003E\n    \u003Cp\u003EYour job is to name the colors of these words. Complete as many trials in two minutes as possible. \u003C\u002Fp\u003E\n    \u003Cp\u003EPress the SPACEBAR key to continue.\u003C\u002Fp\u003E\n    \u003C\u002Fh5\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
      "correctResponse": "Space"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word": "red",
          "color": "green"
        },
        {
          "word": "red",
          "color": "yellow"
        },
        {
          "word": "red",
          "color": "orange"
        },
        {
          "word": "red",
          "color": "red"
        },
        {
          "word": "red",
          "color": "blue"
        },
        {
          "word": "green",
          "color": "green"
        },
        {
          "word": "green",
          "color": "yellow"
        },
        {
          "word": "green",
          "color": "orange"
        },
        {
          "word": "green",
          "color": "red"
        },
        {
          "word": "green",
          "color": "blue"
        },
        {
          "word": "yellow",
          "color": "green"
        },
        {
          "word": "yellow",
          "color": "yellow"
        },
        {
          "word": "yellow",
          "color": "orange"
        },
        {
          "word": "yellow",
          "color": "red"
        },
        {
          "word": "yellow",
          "color": "blue"
        },
        {
          "word": "orange",
          "color": "green"
        },
        {
          "word": "orange",
          "color": "yellow"
        },
        {
          "word": "orange",
          "color": "orange"
        },
        {
          "word": "orange",
          "color": "red"
        },
        {
          "word": "orange",
          "color": "blue"
        },
        {
          "word": "blue",
          "color": "green"
        },
        {
          "word": "blue",
          "color": "yellow"
        },
        {
          "word": "blue",
          "color": "orange"
        },
        {
          "word": "blue",
          "color": "red"
        },
        {
          "word": "blue",
          "color": "blue"
        }
      ],
      "responses": {},
      "messageHandlers": {},
      "title": "Block 2 - Loop",
      "shuffle": true,
      "timeout": "120000",
      "sample": {
        "replace": true,
        "n": "1000"
      },
      "parameters": {},
      "template": {
        "type": "lab.html.Screen",
        "parameters": {},
        "responses": {
          "keypress(r)": "red",
          "keypress(b)": "blue",
          "keypress(o)": "orange",
          "keypress(g)": "green",
          "keypress(y)": "yellow"
        },
        "messageHandlers": {},
        "title": "Words",
        "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv style=\"\n    font-size: 3.5rem;\n    font-weight: bold;\n    color: ${ parameters.color };\n  \"\u003E\n    ${ parameters.word }\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cp\u003E\n    What's the \u003Cem\u003Ecolor\u003C\u002Fem\u003E of \n    the word shown above? \u003Cbr\u003E\n    Please press \u003Ckbd\u003Er\u003C\u002Fkbd\u003E for red,\n    \u003Ckbd\u003Eg\u003C\u002Fkbd\u003E for green,\n    \u003Ckbd\u003Eb\u003C\u002Fkbd\u003E for blue, \u003Ckbd\u003Ey\u003C\u002Fkbd\u003E for yellow,\n    and \u003Ckbd\u003Eo\u003C\u002Fkbd\u003E for orange.\n  \u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E",
        "correctResponse": "${ parameters.color }"
      }
    },
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "Task Completed HTML",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv style=\"\n    color: black;\n    text-align: center;\n    font-size: 2.2em;\n    font-family: Serif;\n  \"\u003E\n  \u003Ch5\u003E\n  You completed the Stroop Task!\n    \u003C\u002Fh5\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E",
      "timeout": "1000"
    }
  ]
})

// Add data storage support
study.options.datastore = new lab.data.Store()

// Let's go!
study.run()
