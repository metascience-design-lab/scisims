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
      "filePrefix": "digit-span"
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
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {
        "click button#continue": "continue"
      },
      "messageHandlers": {},
      "title": "Get-set-go",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ccenter\u003E\r\n    \u003Ch1\u003ELetter Memory Task\u003C\u002Fh1\u003E\r\n    \u003Cp style = \"\r\n      text-align: justify;\r\n      width: 500px;\r\n      margin: auto;\r\n      font-size: 18px;\"\u003E You will see a sequence of letters one at a time. Please try to remember them as accurately as possible. You will need to recall the last \u003Cstrong\u003Elast four\u003C\u002Fstrong\u003E after the sequence is shown. You can enter those letter in any order you prefer. When you're ready, click Continue to start. \u003C\u002Fp\u003E\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-horizontal-right\"\u003E\r\n  \u003Cbutton id=\"continue\"\u003E\r\n    Continue &rarr;\r\n  \u003C\u002Fbutton\u003E\r\n\u003C\u002Ffooter\u003E"
    },
    {
      "type": "lab.flow.Loop",
      "parameters": {},
      "templateParameters": [
        {
          "Span_length": "11"
        },
        {
          "Span_length": "11"
        }
      ],
      "responses": {},
      "messageHandlers": {},
      "shuffle": false,
      "title": "Letter Memory Practice",
      "template": {
        "type": "lab.flow.Sequence",
        "parameters": {},
        "responses": {},
        "messageHandlers": {},
        "title": "Trial Sequence",
        "content": [
          {
            "type": "lab.flow.Loop",
            "parameters": {},
            "templateParameters": [
              {
                "stimulus1": "a"
              },
              {
                "stimulus1": "b"
              },
              {
                "stimulus1": "c"
              },
              {
                "stimulus1": "d"
              },
              {
                "stimulus1": "e"
              },
              {
                "stimulus1": "f"
              },
              {
                "stimulus1": "g"
              },
              {
                "stimulus1": "h"
              },
              {
                "stimulus1": "i"
              },
              {
                "stimulus1": "j"
              },
              {
                "stimulus1": "k"
              },
              {
                "stimulus1": "l"
              },
              {
                "stimulus1": "m"
              },
              {
                "stimulus1": "n"
              },
              {
                "stimulus1": "o"
              },
              {
                "stimulus1": "p"
              },
              {
                "stimulus1": "q"
              },
              {
                "stimulus1": "r"
              },
              {
                "stimulus1": "s"
              },
              {
                "stimulus1": "t"
              },
              {
                "stimulus1": "u"
              },
              {
                "stimulus1": "v"
              },
              {
                "stimulus1": "w"
              },
              {
                "stimulus1": "x"
              },
              {
                "stimulus1": "y"
              },
              {
                "stimulus1": "z"
              }
            ],
            "responses": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
/*
  This code generates the stimulus sequence manually
  from the stimuli specified in the loop content.
  This wouldn't usually be necessary: The loop
  can sample and shuffle stimuli itself; however,
  doing it ourselves gives us a bit more control.
  Specifically, it's (slightly) easier to capture 
  and store the sequence of digits (see below).
*/

// Subsample the loop parameters by drawing randomly
// from the loop contents
this.options.templateParameters = this.random.sample(
  this.options.templateParameters,
  this.aggregateParameters.Span_length
)

// Extract the presented stimuli and store them seperately,
// as a feature of the overall trial sequence.
this.parent.options.parameters.span = 
  this.options.templateParameters.map(
    function(repetition) { return repetition.stimulus1 }
  )
}
            },
            "shuffle": false,
            "title": "Learning phase",
            "template": {
              "type": "lab.html.Screen",
              "parameters": {},
              "responses": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
// We don't need screen-by-screen data for
// the stimulus presentation
this.options.datacommit = false
}
              },
              "title": "Digit Presentation",
              "content": "\u003Cmain\r\n  class=\"content-horizontal-center content-vertical-center\"\r\n  style=\"font-size: 5rem; font-weight: bold\"\r\n\u003E\r\n  ${ parameters.stimulus1 }\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter\u003E\r\n  Remember the last four letters in the sequence.\r\n\u003C\u002Ffooter\u003E",
              "timeout": "1500"
            }
          },
          {
            "type": "lab.html.Screen",
            "parameters": {},
            "responses": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
// Create an empty array that collects responses
this.data.responses = []

const updateButtons = () => {
  document
    .querySelectorAll('button')
    .forEach(
      button => button.disabled = 
        this.data.responses.includes(button.attributes.name.value)
    )
}

// Setup handler for button clicks
this.options.events['click button'] = function(event) {
  // Which button was clicked?
  const button = event.currentTarget.attributes.name.value

  // Terminate screen if participant is done,
  // otherwise log response, deactivate button,
  // and continue.
  if (button === 'done') {
    this.end('done')
  } else if (button === 'undo') {
    // Remove last response
    this.data.responses.pop()

    // Update buttons
    updateButtons()
  } else {
    // Add response to data
    this.data.responses.push(button)
    
    // Update buttons
    updateButtons()
  }
}
},
              "after:end": function anonymous(
) {
// check if the last four letters matched
var lastFour = this.aggregateParameters.span.slice(this.aggregateParameters.span_length-4);
lastFour.sort();
this.data.responses.sort();
this.data.correct = lastFour.every(
  (letter, index) => letter === this.data.responses[index]
)
}
            },
            "title": "Recall",
            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\r\n  \u003C!-- Table styles are specified in the overall study CSS,\r\n       please see study options. This screen also includes\r\n       a fair amount of logic, which is visible in the scripts\r\n       tab. Please be invited to ask the authors if you have\r\n       any questions!\r\n  --\u003E\r\n  \u003Ctable class=\"table-span-recall\"\u003E\r\n    \u003Ctr\u003E\r\n    \u003C\u002Ftr\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"a\"\u003Ea\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"b\"\u003Eb\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"c\"\u003Ec\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"d\"\u003Ed\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"e\"\u003Ee\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"f\"\u003Ef\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"g\"\u003Eg\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"h\"\u003Eh\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"i\"\u003Ei\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"j\"\u003Ej\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"k\"\u003Ek\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"l\"\u003El\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"m\"\u003Em\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"n\"\u003En\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"o\"\u003Eo\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"p\"\u003Ep\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"q\"\u003Eq\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"r\"\u003Er\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"s\"\u003Es\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"t\"\u003Et\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"u\"\u003Eu\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"v\"\u003Ev\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"w\"\u003Ew\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"x\"\u003Ex\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"y\"\u003Ey\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n      \u003Ctd\u003E\r\n        \u003Cbutton name=\"z\"\u003Ez\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n    \u003Ctr\u003E\r\n      \u003Ctd colspan=\"9\"\u003E\r\n        \u003Cbutton name=\"undo\"\u003EUndo ⤺\u003C\u002Fbutton\u003E\r\n        \u003Cbutton name=\"done\"\u003EDone &rarr;\u003C\u002Fbutton\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E\r\n\u003C\u002Fmain\u003E\r\n\u003Cfooter\u003E\r\n  \u003Cstrong\u003EPlease select the last four letters from the sequence that you just saw. \u003C\u002Fstrong\u003E\u003Cbr\u003E\r\n They can be in any order. Then, press the \u003Ckbd\u003EDone\u003C\u002Fkbd\u003E button.\r\n\u003C\u002Ffooter\u003E\r\n"
          }
        ]
      }
    },
    {
      "type": "lab.html.Screen",
      "responses": {
        "click button#continue": "continue"
      },
      "messageHandlers": {},
      "title": "Get-set-go",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"w-s text-justify\"\u003E\n    \u003Ch2 class=\"text-center\"\u003EReady?\u003C\u002Fh2\u003E\n    \u003Cp\u003EIn a moment, you will see a sequence of letters one at a time. Please try to remember them as accurately as possible. You will need to recall the last \u003Cstrong\u003Elast four\u003C\u002Fstrong\u003E after the sequence is shown. You can enter those letter in any order you prefer.\n      \n    \u003Cp\u003EWhen you're ready, please press \u003Ckbd\u003EContinue\u003C\u002Fkbd\u003E button below.\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-horizontal-right\"\u003E\n  \u003Cbutton id=\"continue\"\u003E\n    Continue &rarr;\n  \u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
      "parameters": {}
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        },
        {
          "span_length": "11"
        }
      ],
      "responses": {},
      "messageHandlers": {},
      "title": "Letter Memory Task",
      "parameters": {},
      "template": {
        "type": "lab.flow.Sequence",
        "responses": {},
        "messageHandlers": {},
        "title": "Trial sequence",
        "parameters": {},
        "content": [
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "stimulus": "a"
              },
              {
                "stimulus": "b"
              },
              {
                "stimulus": "c"
              },
              {
                "stimulus": "d"
              },
              {
                "stimulus": "e"
              },
              {
                "stimulus": "f"
              },
              {
                "stimulus": "g"
              },
              {
                "stimulus": "h"
              },
              {
                "stimulus": "i"
              },
              {
                "stimulus": "j"
              },
              {
                "stimulus": "k"
              },
              {
                "stimulus": "l"
              },
              {
                "stimulus": "m"
              },
              {
                "stimulus": "n"
              },
              {
                "stimulus": "o"
              },
              {
                "stimulus": "p"
              },
              {
                "stimulus": "q"
              },
              {
                "stimulus": "r"
              },
              {
                "stimulus": "s"
              },
              {
                "stimulus": "t"
              },
              {
                "stimulus": "u"
              },
              {
                "stimulus": "v"
              },
              {
                "stimulus": "w"
              },
              {
                "stimulus": "x"
              },
              {
                "stimulus": "y"
              },
              {
                "stimulus": "z"
              }
            ],
            "responses": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
/*
  This code generates the stimulus sequence manually
  from the stimuli specified in the loop content.
  This wouldn't usually be necessary: The loop
  can sample and shuffle stimuli itself; however,
  doing it ourselves gives us a bit more control.
  Specifically, it's (slightly) easier to capture 
  and store the sequence of digits (see below).
*/

// Subsample the loop parameters by drawing randomly
// from the loop contents
this.options.templateParameters = this.random.sample(
  this.options.templateParameters,
  this.aggregateParameters.span_length
)

// Extract the presented stimuli and store them seperately,
// as a feature of the overall trial sequence.
this.parent.options.parameters.span = 
  this.options.templateParameters.map(
    function(repetition) { return repetition.stimulus }
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
                "before:prepare": function anonymous(
) {
// We don't need screen-by-screen data for
// the stimulus presentation
this.options.datacommit = false
}
              },
              "title": "Digit presentation",
              "content": "\u003Cmain\n  class=\"content-horizontal-center content-vertical-center\"\n  style=\"font-size: 5rem; font-weight: bold\"\n\u003E\n  ${ parameters.stimulus }\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  Remember the last four letters in the sequence.\n\u003C\u002Ffooter\u003E",
              "timeout": "1500",
              "parameters": {}
            }
          },
          {
            "type": "lab.html.Screen",
            "responses": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
// Create an empty array that collects responses
this.data.responses = []

const updateButtons = () => {
  document
    .querySelectorAll('button')
    .forEach(
      button => button.disabled = 
        this.data.responses.includes(button.attributes.name.value)
    )
}

// Setup handler for button clicks
this.options.events['click button'] = function(event) {
  // Which button was clicked?
  const button = event.currentTarget.attributes.name.value

  // Terminate screen if participant is done,
  // otherwise log response, deactivate button,
  // and continue.
  if (button === 'done') {
    this.end('done')
  } else if (button === 'undo') {
    // Remove last response
    this.data.responses.pop()

    // Update buttons
    updateButtons()
  } else {
    // Add response to data
    this.data.responses.push(button)
    
    // Update buttons
    updateButtons()
  }
}
},
              "after:end": function anonymous(
) {
// check if the last four letters matched
var lastFour = this.aggregateParameters.span.slice(this.aggregateParameters.span_length-4);
lastFour.sort();
this.data.responses.sort();
this.data.correct = lastFour.every(
  (letter, index) => letter === this.data.responses[index]
)
}
            },
            "title": "Recall",
            "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003C!-- Table styles are specified in the overall study CSS,\n       please see study options. This screen also includes\n       a fair amount of logic, which is visible in the scripts\n       tab. Please be invited to ask the authors if you have\n       any questions!\n  --\u003E\n  \u003Ctable class=\"table-span-recall\"\u003E\n    \u003Ctr\u003E\n    \u003C\u002Ftr\u003E\n    \u003Ctr\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"a\"\u003Ea\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"b\"\u003Eb\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"c\"\u003Ec\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"d\"\u003Ed\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"e\"\u003Ee\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"f\"\u003Ef\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"g\"\u003Eg\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"h\"\u003Eh\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"i\"\u003Ei\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n    \u003Ctr\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"j\"\u003Ej\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"k\"\u003Ek\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"l\"\u003El\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"m\"\u003Em\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"n\"\u003En\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"o\"\u003Eo\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"p\"\u003Ep\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"q\"\u003Eq\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"r\"\u003Er\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n    \u003Ctr\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"s\"\u003Es\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"t\"\u003Et\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"u\"\u003Eu\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"v\"\u003Ev\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"w\"\u003Ew\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"x\"\u003Ex\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"y\"\u003Ey\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n      \u003Ctd\u003E\n        \u003Cbutton name=\"z\"\u003Ez\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n    \u003Ctr\u003E\n      \u003Ctd colspan=\"9\"\u003E\n        \u003Cbutton name=\"undo\"\u003EUndo ⤺\u003C\u002Fbutton\u003E\n        \u003Cbutton name=\"done\"\u003EDone &rarr;\u003C\u002Fbutton\u003E\n      \u003C\u002Ftd\u003E\n    \u003C\u002Ftr\u003E\n  \u003C\u002Ftable\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter\u003E\n  \u003Cstrong\u003EPlease select the last four letters from the sequence that you just saw. \u003C\u002Fstrong\u003E\u003Cbr\u003E\n They can be in any order. Then, press the \u003Ckbd\u003EDone\u003C\u002Fkbd\u003E button.\n\u003C\u002Ffooter\u003E\n",
            "parameters": {}
          }
        ]
      }
    },
    {
      "type": "lab.html.Screen",
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "Task Done",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Ccenter\u003E\r\n  \u003Ch1\u003E Congrats, you have completed the Letter Memory Task! \u003C\u002Fh1\u003E\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fmain\u003E",
      "timeout": "0"
    }
  ]
})

// Add data storage support
study.options.datastore = new lab.data.Store()

// Let's go!
study.run()