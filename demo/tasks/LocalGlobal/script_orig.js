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
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "parameters": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "version": "2.0.1",
          "originX": "center",
          "originY": "center",
          "left": 0,
          "top": 0,
          "width": 2,
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
          "paintFirst": "fill",
          "globalCompositeOperation": "source-over",
          "transformMatrix": null,
          "skewX": 0,
          "skewY": 0,
          "text": "",
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
          "id": "3",
          "styles": {}
        },
        {
          "type": "i-text",
          "version": "2.0.1",
          "originX": "center",
          "originY": "center",
          "left": 0,
          "top": 0,
          "width": 633.7,
          "height": 497.56,
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
          "paintFirst": "fill",
          "globalCompositeOperation": "source-over",
          "transformMatrix": null,
          "skewX": 0,
          "skewY": 0,
          "text": "Welcome to the Backwards Digit Recall Test!\n\nPlease be sure to turn on audio.\n\nIn this task, you will hear a sequence of digits.\n\nFirst, you will start with a sequence of two digits.\n\nIf you pass each level, the number of digits \nwill increase by one.\n\nPlease press the SPACEBAR to continue.",
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
          "id": "4",
          "styles": {}
        }
      ],
      "responses": {
        "keypress(Space)": "spacebar"
      },
      "messageHandlers": {
        "run": function anonymous() {
          var count = 99;
        }
      },
      "viewport": [
        800,
        600
      ],
      "title": "Introduction",
      "correctResponse": "Space",
      "parameters": {}
    },
    {
      "type": "lab.flow.Sequence",
      "responses": {},
      "messageHandlers": {},
      "title": "2 Digits",
      "shuffle": false,
      "parameters": {},
      "content": [
        {
          "type": "lab.html.Form",
          "responses": {},
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable
var t = document.getElementById('but').value;

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  //alert(t);
  if(num.value == 93){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "2 Digits - Trial 1",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849472&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\" id=\"but\" value=\"val\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "93",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {},
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 62){
    alert("correct");
  }
   else{
    alert("wrong");
  }
}

}
          },
          "title": "2 Digits - Trial 2",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849469&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n",
          "correctResponse": "26",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {},
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 72){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}


}
          },
          "title": "2 Digits - Trial 3",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849460&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\n\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n",
          "correctResponse": "27",
          "parameters": {}
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "responses": {},
      "messageHandlers": {},
      "title": "3 Digits",
      "shuffle": false,
      "parameters": {},
      "content": [
        {
          "type": "lab.html.Form",
          "responses": {},
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 316){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}


}
          },
          "title": "3 Digits - Trial 1",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849457&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n",
          "correctResponse": "613",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {},
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 762){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "3 Digits - Trial 2",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849451&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {},
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 286){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "3 Digits - Trial 3",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849439&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "responses": {},
      "messageHandlers": {},
      "title": "4 Digits",
      "parameters": {},
      "content": [
        {
          "type": "lab.html.Form",
          "responses": {},
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 7149){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "4 Digits - Trial 1",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849424&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 4625){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "4 Digits - Trial 2",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849415&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 7912){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "4 Digits - Trial 3",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849403&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "responses": {},
      "messageHandlers": {},
      "title": "5 Digits",
      "parameters": {},
      "content": [
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 19835){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "5 Digits - Trial 1",
          "content": "\u003Cmain\u003E\n \u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849397&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 68413){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "5 Digits - Trial 2",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849385&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\n\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 92871){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "5 Digits - Trial 3",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849382&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "responses": {},
      "messageHandlers": {},
      "title": "6 Digits",
      "parameters": {},
      "content": [
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 651327){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "6 Digits - Trial 1",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849373&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 954763){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "6 Digits - Trial 2",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849370&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 984726){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "6 Digits - Trial 3",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849361&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "responses": {},
      "messageHandlers": {},
      "title": "7 Digits",
      "parameters": {},
      "content": [
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 1658427){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "7 Digits - Trial 1",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849349&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 1635482){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "7 Digits - Trial 2",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849343&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\n\u003C\u002Fiframe\u003E\n\u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 2391768){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "7 Digits - Trial 3",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849337&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n\u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "responses": {},
      "messageHandlers": {},
      "title": "8 Digits",
      "parameters": {},
      "content": [
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 78691542){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "8 Digits - Trial 1",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849529&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 31654278){
    alert("correct");
  }
}

}
          },
          "title": "8 Digits - Trial 2",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849523&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {
            "click(Done!) button": "613"
          },
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 91472538){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "8 Digits - Trial 3",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849499&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E  \n \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "613",
          "parameters": {}
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "responses": {},
      "messageHandlers": {},
      "title": "9 Digits",
      "shuffle": false,
      "parameters": {},
      "content": [
        {
          "type": "lab.html.Form",
          "responses": {},
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable
var t = document.getElementById('but').value;

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  alert(t);
  if(num.value == 162958743){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "9 Digits - Trial 1",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849493&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\" id=\"but\" value=\"val\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E",
          "correctResponse": "93",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {},
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 147895326){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}

}
          },
          "title": "9 Digits - Trial 2",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849487&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n",
          "correctResponse": "26",
          "parameters": {}
        },
        {
          "type": "lab.html.Form",
          "responses": {},
          "messageHandlers": {
            "run": function anonymous() {
var form = document.getElementById('form');//make elements in form accessible
var num = document.getElementById('userInput');//store input by user in variable

form.onsubmit = function(){//actions to perform upon submission
  //userAns records the value that user enters
  if(num.value == 981764523){
    alert("correct");
  }
  else{
    alert("wrong");
  }
}


}
          },
          "title": "9 Digits - Trial 3",
          "content": "\u003Cmain\u003E\n\u003Ciframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002F428849478&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\n\u003C\u002Fiframe\u003E\n  \u003Cform id=\"form\"\u003E\n    \u003Ccenter\u003E\n      Answer: \u003Cbr\u003E\n      \u003Cinput type=\"number\" name=\"userAns\" id=\"userInput\"\u003E\n      \u003Cbutton type=\"submit\" name=\"submission\"\u003E\n        Done!\n      \u003C\u002Fbutton\u003E  \n    \u003C\u002Fcenter\u003E\n  \u003C\u002Fform\u003E\n\u003C\u002Fmain\u003E\n\n",
          "correctResponse": "27",
          "parameters": {}
        }
      ]
    }
  ]
})

// Add data storage support
study.options.datastore = new lab.data.Store()

// Let's go!
study.run()
