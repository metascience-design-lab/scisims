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
      "type": "lab.plugins.Download",
      "filePrefix": "study"
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
      "responses": {
        "click button#continue": "continue"
      },
      "messageHandlers": {},
      "title": "Instructions",
      "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Ccenter\u003E\r\n    \u003Ch1\u003E Plus-Minus Task \u003C\u002Fh1\u003E\r\n\r\n    \u003Cp style = \"\r\n      text-align: justify;\r\n      width: 500px;\r\n      margin: auto;\r\n      font-size: 18px;\"\u003E\r\n       This task consists of three blocks. In each block, you will complete thirty problems. The first block will contain only addition, the second will contain subtraction, and the third will contain both addition and subtraction. Complete the task quickly and accurately. When you're ready, click Continue to start. \u003C\u002Fp\u003E\r\n \r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\u003Cfooter class=\"content-horizontal-right\"\u003E\r\n  \u003Cbutton id=\"continue\"\u003E\r\n    Continue &rarr;\r\n  \u003C\u002Fbutton\u003E\r\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {
        "keypress": "continue"
      },
      "messageHandlers": {},
      "title": "Plus Instructions",
      "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Ccenter\u003E\r\n    \u003Ch1\u003E Addition Block \u003C\u002Fh1\u003E\r\n    \u003Cp style = \"font-size: 110%; margin-left:250px; margin-right:250px; line-height:200%; text-align: left\"\u003E Prepare for the addition block. This block contains thirty addition problems. When ready press any key.\u003C\u002Fp\u003E\r\n\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fmain\u003E"
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
        "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cform\u003E\n    \u003Cdiv style = \"display: flex; height: 100px; align-items: center\"\u003E\n      \u003Clabel style = \" font-size: 300%; display:inline-block; float: left; clear: left; width: 210px\"\u003E${this.parameters.rand} + 3 = \u003C\u002Flabel\u003E\n      \u003Cinput style = \"height: 50px\" type = \"text\" name=\"answer\" maxlength=\"4\" size=\"4\"\u003E\n      \u003Cbutton style = \"height: 50px\" type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
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
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {
        "keypress": "continue"
      },
      "messageHandlers": {},
      "title": "Minus Instructions",
      "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Ccenter\u003E\r\n    \u003Ch1\u003E Subtraction Block \u003C\u002Fh1\u003E\r\n    \u003Cp style = \"font-size: 110%; margin-left:250px; margin-right:250px; line-height:200%; text-align: left\"\u003E Prepare for the subtraction block. This block contains thirty subtraction problems. When ready press any key.\u003C\u002Fp\u003E\r\n\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fmain\u003E"
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
        "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cform\u003E\n    \u003Cdiv style = \"display: flex; height: 100px; align-items: center\"\u003E\n      \u003Clabel style = \" font-size: 300%; display:inline-block; float: left; clear: left; width: 210px\"\u003E${this.parameters.rand} - 3 = \u003C\u002Flabel\u003E\n      \u003Cinput style = \"height: 50px\" type = \"text\" name=\"answer\" maxlength=\"4\" size=\"4\"\u003E\n      \u003Cbutton style = \"height: 50px\" type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
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
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {
        "keypress": "continue"
      },
      "messageHandlers": {},
      "title": "Both Instructions",
      "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Ccenter\u003E\r\n\r\n    \u003Ch1\u003E Addition and Subtraction Block \u003C\u002Fh1\u003E\r\n    \r\n    \u003Cp style = \"font-size: 110%; margin-left:250px; margin-right:250px; line-height:200%; text-align: left\"\u003E Prepare for the block containing both addition and subtraction, when ready press any key.\u003C\u002Fp\u003E\r\n\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fmain\u003E"
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
            "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cform\u003E\n    \u003Cdiv style = \"display: flex; height: 100px; align-items: center\"\u003E\n      \u003Clabel style = \" font-size: 300%; display:inline-block; float: left; clear: left; width: 210px\"\u003E${this.parameters.rand} + 3 = \u003C\u002Flabel\u003E\n      \u003Cinput style = \"height: 50px\" type = \"text\" name=\"answer\" maxlength=\"4\" size=\"4\"\u003E\n      \u003Cbutton style = \"height: 50px\" type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
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
          },
          {
            "type": "lab.html.Form",
            "content": "\u003Cmain class = \"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cform\u003E\n    \u003Cdiv style = \"display: flex; height: 100px; align-items: center\"\u003E\n      \u003Clabel style = \" font-size: 300%; display:inline-block; float: left; clear: left; width: 210px\"\u003E${this.parameters.rand} - 3 = \u003C\u002Flabel\u003E\n      \u003Cinput style = \"height: 50px\" type = \"text\" name=\"answer\" maxlength=\"4\" size=\"4\"\u003E\n      \u003Cbutton style = \"height: 50px\" type=\"submit\"\u003ESubmit\u003C\u002Fbutton\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
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
    },
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "End Screen",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ccenter\u003E\r\n  \u003Ch1\u003E Congrats, you have completed the Plus-Minus Task! \u003C\u002Fh1\u003E\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fmain\u003E",
      "timeout": "500"
    }
  ]
})

// Add data storage support
study.options.datastore = new lab.data.Store()

// Let's go!
study.run()