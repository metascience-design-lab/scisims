// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata"
    },
    {
      "type": "lab.plugins.PostMessage"
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "responses": {},
  "content": [
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "Instructions",
      "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Ccenter\u003E\r\n    \u003Ch1\u003E Plus-Minus Task \u003C\u002Fh1\u003E\r\n\r\n    \u003Cp style = \"font-size: 110%; margin-left:250px; margin-right:250px; line-height:200%\"\u003E This task consists of three trials. In each trial you will complete thirty equations. The first will contain only addition, the second subtraction, and the third both. Complete the task as fast as possible and download your results to review your answers.\u003C\u002Fp\u003E\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fmain\u003E"
    },
    {
      "type": "lab.flow.Loop",
      "parameters": {},
      "templateParameters": [
        {
          "iterations": "1"
        },
        {
          "iterations": "2"
        },
        {
          "iterations": "3"
        },
        {
          "iterations": "4"
        },
        {
          "iterations": "5"
        },
        {
          "iterations": "6"
        },
        {
          "iterations": "7"
        },
        {
          "iterations": "8"
        },
        {
          "iterations": "9"
        },
        {
          "iterations": "10"
        },
        {
          "iterations": "11"
        },
        {
          "iterations": "12"
        },
        {
          "iterations": "13"
        },
        {
          "iterations": "14"
        },
        {
          "iterations": "15"
        },
        {
          "iterations": "16"
        },
        {
          "iterations": "17"
        },
        {
          "iterations": "18"
        },
        {
          "iterations": "19"
        },
        {
          "iterations": "20"
        },
        {
          "iterations": "21"
        },
        {
          "iterations": "22"
        },
        {
          "iterations": "23"
        },
        {
          "iterations": "24"
        },
        {
          "iterations": "25"
        },
        {
          "iterations": "26"
        },
        {
          "iterations": "27"
        },
        {
          "iterations": "28"
        },
        {
          "iterations": "29"
        },
        {
          "iterations": "30"
        }
      ],
      "responses": {},
      "messageHandlers": {},
      "shuffle": false,
      "title": "Plus Trial",
      "sample": {
        "n": ""
      },
      "template": {
        "type": "lab.html.Form",
        "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cform\u003E\n    \u003Ch1 style = \"display:inline\"\u003E${this.parameters.rand} + 3 = \u003C\u002Fh1\u003E\n    \u003Cinput type = \"text\" name=\"answer\" maxlength=\"4\" size=\"4\"\u003E\n    \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
        "parameters": {},
        "responses": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
 function getRand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
this.parameters.rand = getRand(100)
},
          "end": function anonymous(
) {
if (this.data.answer == this.parameters.rand + 3)
{
  this.data.correct = true
}
else
{
  this.data.correct = false
}
}
        },
        "title": "Plus"
      }
    },
    {
      "type": "lab.flow.Loop",
      "parameters": {},
      "templateParameters": [
        {
          "iterations": "1"
        },
        {
          "iterations": "2"
        },
        {
          "iterations": "3"
        },
        {
          "iterations": "4"
        },
        {
          "iterations": "5"
        },
        {
          "iterations": "6"
        },
        {
          "iterations": "7"
        },
        {
          "iterations": "8"
        },
        {
          "iterations": "9"
        },
        {
          "iterations": "10"
        },
        {
          "iterations": "11"
        },
        {
          "iterations": "12"
        },
        {
          "iterations": "13"
        },
        {
          "iterations": "14"
        },
        {
          "iterations": "15"
        },
        {
          "iterations": "16"
        },
        {
          "iterations": "17"
        },
        {
          "iterations": "18"
        },
        {
          "iterations": "19"
        },
        {
          "iterations": "20"
        },
        {
          "iterations": "21"
        },
        {
          "iterations": "22"
        },
        {
          "iterations": "23"
        },
        {
          "iterations": "24"
        },
        {
          "iterations": "25"
        },
        {
          "iterations": "26"
        },
        {
          "iterations": "27"
        },
        {
          "iterations": "28"
        },
        {
          "iterations": "29"
        },
        {
          "iterations": "30"
        }
      ],
      "responses": {},
      "messageHandlers": {},
      "shuffle": false,
      "title": "Minus Trial",
      "sample": {
        "n": ""
      },
      "template": {
        "type": "lab.html.Form",
        "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cform\u003E\n    \u003Ch1 style = \"display:inline\"\u003E${this.parameters.rand} - 3 = \u003C\u002Fh1\u003E\n    \u003Cinput type = \"text\" name=\"answer\" maxlength=\"4\" size=\"4\"\u003E\n    \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
        "parameters": {},
        "responses": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
 function getRand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
this.parameters.rand = getRand(100)
},
          "end": function anonymous(
) {
if (this.data.answer == this.parameters.rand - 3)
{
  this.data.correct = true
}
else
{
  this.data.correct = false
}
}
        },
        "title": "Minus"
      }
    },
    {
      "type": "lab.flow.Loop",
      "parameters": {},
      "templateParameters": [
        {
          "iterations": "1"
        },
        {
          "iterations": "2"
        },
        {
          "iterations": "3"
        },
        {
          "iterations": "4"
        },
        {
          "iterations": "5"
        },
        {
          "iterations": "6"
        },
        {
          "iterations": "7"
        },
        {
          "iterations": "8"
        },
        {
          "iterations": "9"
        },
        {
          "iterations": "10"
        },
        {
          "iterations": "11"
        },
        {
          "iterations": "12"
        },
        {
          "iterations": "13"
        },
        {
          "iterations": "14"
        },
        {
          "iterations": "15"
        },
        {
          "iterations": "16"
        },
        {
          "iterations": "17"
        },
        {
          "iterations": "18"
        },
        {
          "iterations": "19"
        },
        {
          "iterations": "20"
        },
        {
          "iterations": "21"
        },
        {
          "iterations": "22"
        },
        {
          "iterations": "23"
        },
        {
          "iterations": "24"
        },
        {
          "iterations": "25"
        },
        {
          "iterations": "26"
        },
        {
          "iterations": "27"
        },
        {
          "iterations": "28"
        },
        {
          "iterations": "29"
        },
        {
          "iterations": "30"
        }
      ],
      "responses": {},
      "messageHandlers": {},
      "shuffle": false,
      "title": "Both",
      "sample": {
        "n": ""
      },
      "template": {
        "type": "lab.flow.Sequence",
        "parameters": {},
        "responses": {},
        "messageHandlers": {},
        "title": "Sequence",
        "shuffle": true,
        "content": [
          {
            "type": "lab.html.Form",
            "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cform\u003E\n    \u003Ch1 style = \"display:inline\"\u003E${this.parameters.rand} + 3 = \u003C\u002Fh1\u003E\n    \u003Cinput type = \"text\" name=\"answer\" maxlength=\"4\" size=\"4\"\u003E\n    \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
            "parameters": {},
            "responses": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
 function getRand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
this.parameters.rand = getRand(100)
},
              "end": function anonymous(
) {
if (this.data.answer == this.parameters.rand - 3)
{
  this.data.correct = true
}
else
{
  this.data.correct = false
}
}
            },
            "title": "Plus"
          },
          {
            "type": "lab.html.Form",
            "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cform\u003E\n    \u003Ch1 style = \"display:inline\"\u003E${this.parameters.rand} - 3 = \u003C\u002Fh1\u003E\n    \u003Cinput type = \"text\" name=\"answer\" maxlength=\"4\" size=\"4\"\u003E\n    \u003Cbutton type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
            "parameters": {},
            "responses": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
 function getRand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
this.parameters.rand = getRand(100)
},
              "end": function anonymous(
) {
if (this.data.answer == this.parameters.rand - 3)
{
  this.data.correct = true
}
else
{
  this.data.correct = false
}
}
            },
            "title": "Minus"
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