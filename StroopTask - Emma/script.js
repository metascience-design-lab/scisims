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
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "originX": "center",
          "originY": "center",
          "left": 0,
          "top": 0,
          "width": 785.97,
          "height": 581.45,
          "fill": "#000000",
          "stroke": "#000000",
          "strokeWidth": 1,
          "strokeDashArray": null,
          "strokeLineCap": "butt",
          "strokeLineJoin": "round",
          "strokeMiterLimit": 10,
          "scaleX": 1,
          "scaleY": 1,
          "angle": 0,
          "flipX": false,
          "flipY": false,
          "opacity": 1,
          "shadow": null,
          "visible": true,
          "clipTo": null,
          "backgroundColor": "",
          "fillRule": "nonzero",
          "globalCompositeOperation": "source-over",
          "transformMatrix": null,
          "skewX": 0,
          "skewY": 0,
          "text": "Welcome to the Stroop Task!\n\nIn this task, there are two blocks. \n\nIn the first block will be \npresented with strings of asterisks. Each string will be\nprinted in 1 of 5 colors (red, green, blue, orange, yellow).\n\nFor example, you might see *****\n\nYour job is to name the colors of these asterisks. Complete as\nmany in two minutes as possible.\n\nPress the SPACEBAR key to continue.",
          "fontSize": 32,
          "fontWeight": "normal",
          "fontFamily": "Times New Roman",
          "fontStyle": "normal",
          "lineHeight": 1.16,
          "underline": false,
          "overline": false,
          "linethrough": false,
          "textAlign": "center",
          "textBackgroundColor": "",
          "charSpacing": 0,
          "id": "36",
          "styles": {}
        }
      ],
      "responses": {
        "keypress(Space)": "Space"
      },
      "messageHandlers": {},
      "viewport": [
        800,
        600
      ],
      "title": "Instructions - Stroop Block 1",
      "correctResponse": "Space",
      "parameters": {}
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
        "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv style=\"\n    font-size: 3.5rem;\n    font-weight: bold;\n    color: ${ parameters.color };\n  \"\u003E\n    ${ parameters.word }\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cp\u003E\n    What's the \u003Cem\u003Ecolor\u003C\u002Fem\u003E of \n    the word shown above? \u003Cbr\u003E\n    Please press \u003Ckbd\u003Er\u003C\u002Fkbd\u003E for red,\n    \u003Ckbd\u003Eg\u003C\u002Fkbd\u003E for green,\n    \u003Ckbd\u003Eb\u003C\u002Fkbd\u003E for blue, \u003Ckbd\u003Ey\u003C\u002Fkbd\u003E for yellow,\n    and \u003Ckbd\u003Eo\u003C\u002Fkbd\u003E for orange.\n  \u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E",
        "timeout": "120000",
        "correctResponse": "${ parameters.color }"
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "originX": "center",
          "originY": "center",
          "left": 0,
          "top": 0,
          "width": 753.98,
          "height": 539.51,
          "fill": "#000000",
          "stroke": "#000000",
          "strokeWidth": 1,
          "strokeDashArray": null,
          "strokeLineCap": "butt",
          "strokeLineJoin": "round",
          "strokeMiterLimit": 10,
          "scaleX": 1,
          "scaleY": 1,
          "angle": 0,
          "flipX": false,
          "flipY": false,
          "opacity": 1,
          "shadow": null,
          "visible": true,
          "clipTo": null,
          "backgroundColor": "",
          "fillRule": "nonzero",
          "globalCompositeOperation": "source-over",
          "transformMatrix": null,
          "skewX": 0,
          "skewY": 0,
          "text": "You completed the first block !\n\nIn the second block, you will be \npresented with words. Each word will be\nprinted in 1 of 5 colors (red, green, blue, orange, yellow).\n\nFor example, you might see RED (in green text).\n\nYour job is to name the colors of these words. Complete as\nmany trials in two minutes as possible.\n\nPress the SPACEBAR key to continue.\n",
          "fontSize": 32,
          "fontWeight": "normal",
          "fontFamily": "Times New Roman",
          "fontStyle": "normal",
          "lineHeight": 1.16,
          "underline": false,
          "overline": false,
          "linethrough": false,
          "textAlign": "center",
          "textBackgroundColor": "",
          "charSpacing": 0,
          "id": "36",
          "styles": {}
        }
      ],
      "responses": {
        "keypress(Space)": "Space"
      },
      "messageHandlers": {},
      "viewport": [
        800,
        600
      ],
      "title": "Instructions - Stroop Block 2",
      "correctResponse": "Space",
      "parameters": {}
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
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "originX": "center",
          "originY": "center",
          "left": 0,
          "top": 0,
          "width": 420.25,
          "height": 36.16,
          "fill": "black",
          "stroke": null,
          "strokeWidth": 1,
          "strokeDashArray": null,
          "strokeLineCap": "butt",
          "strokeLineJoin": "round",
          "strokeMiterLimit": 10,
          "scaleX": 1,
          "scaleY": 1,
          "angle": 0,
          "flipX": false,
          "flipY": false,
          "opacity": 1,
          "shadow": null,
          "visible": true,
          "clipTo": null,
          "backgroundColor": "",
          "fillRule": "nonzero",
          "globalCompositeOperation": "source-over",
          "transformMatrix": null,
          "skewX": 0,
          "skewY": 0,
          "text": "You completed the Stroop Task !",
          "fontSize": 32,
          "fontWeight": "normal",
          "fontFamily": "Times New Roman",
          "fontStyle": "normal",
          "lineHeight": 1.16,
          "underline": false,
          "overline": false,
          "linethrough": false,
          "textAlign": "center",
          "textBackgroundColor": "",
          "charSpacing": 0,
          "id": "719",
          "styles": {}
        }
      ],
      "responses": {},
      "messageHandlers": {},
      "viewport": [
        800,
        600
      ],
      "title": "Task Completed",
      "parameters": {}
    }
  ]
})

// Add data storage support
study.options.datastore = new lab.data.Store()

// Let's go!
study.run()