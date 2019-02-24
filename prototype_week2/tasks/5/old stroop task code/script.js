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
        "replace": false
      },
      "parameters": {},
      "template": {
        "type": "lab.canvas.Screen",
        "content": [
          {
            "type": "i-text",
            "originX": "center",
            "originY": "center",
            "left": 0,
            "top": 0,
            "width": 562.34,
            "height": 73.45,
            "fill": "${ parameters.color }",
            "stroke": "",
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
            "text": "${ parameters.word }",
            "fontSize": "65",
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
            "id": "101",
            "styles": {}
          }
        ],
        "responses": {
          "keypress(r)": "red",
          "keypress(g)": "green",
          "keypress(b)": "blue",
          "keypress(o)": "orange",
          "keypress(y)": "yellow"
        },
        "messageHandlers": {},
        "viewport": [
          800,
          600
        ],
        "title": "Asterisks",
        "parameters": {}
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
          "word": "green",
          "color": "yellow"
        },
        {
          "word": "blue",
          "color": "orange"
        },
        {
          "word": "orange",
          "color": "red"
        },
        {
          "word": "yellow",
          "color": "blue"
        }
      ],
      "responses": {},
      "messageHandlers": {},
      "title": "Block 2 - Loop",
      "shuffle": true,
      "timeout": "120000",
      "sample": {
        "replace": false
      },
      "parameters": {},
      "template": {
        "type": "lab.canvas.Screen",
        "content": [
          {
            "type": "i-text",
            "originX": "center",
            "originY": "center",
            "left": 0,
            "top": 0,
            "width": 562.34,
            "height": 73.45,
            "fill": "${ parameters.color }",
            "stroke": "",
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
            "text": "${ parameters.word }",
            "fontSize": "65",
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
            "id": "101",
            "styles": {}
          }
        ],
        "responses": {
          "keypress(g)": "red",
          "keypress(y)": "green",
          "keypress(o)": "blue",
          "keypress(r)": "orange",
          "keypress(b)": "yellow"
        },
        "messageHandlers": {},
        "viewport": [
          800,
          600
        ],
        "title": "Words",
        "timeout": "120000",
        "parameters": {}
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