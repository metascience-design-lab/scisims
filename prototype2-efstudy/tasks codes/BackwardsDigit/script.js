
const ds = new lab.data.Store();
const digits = [];
for (var digitNum = 2; digitNum <= 10; digitNum++)
  for (var i = 1; i <= 3; i++) {
    var list = [];
    for (var j = 0; j < digitNum; j++)
      list.push(Math.floor(Math.random() * 10));
    digits.push({numbers: list});
  }
var dIndex = 0;
var totalCorrect = 0;
var incorrect = 0;
var done = false;

const digitRecall = new lab.flow.Sequence({
  content: [
    new lab.html.Screen({
      content: "<h1>Ready?</h1>",
      timeout: 1000,
      messageHandlers: {
        "run": function anonymous() {
          if (done)
            this.end();
          }
        }
      }),
    new lab.html.Form({
      content: '<h1 id="text">${buildTitle(parameters.numbers.length)}${sayDigits(parameters.numbers)}</h1>'
      + "<form id='form'>"
      + "<input type='text' id='response' name='response' autofocus=true/>"
      + "<button type='submit'>Submit</button>"
      + "</form>",
      messageHandlers: {
        "run": function anonymous() {
          if (done)
            this.end();
          const form = document.getElementById('form');
          const response = document.getElementById('response');
          const correct = digits[dIndex]['numbers'];
          dIndex++;
          form.onsubmit = () => {
            this.correctVar = isCorrectResponse(correct, response.value);
            if (!this.correctVar)
              incorrect++;
            if (dIndex % 3 == 0)
            if (incorrect >= 2)
              done = true;
            else
              incorrect = 0;
            alert(this.correctVar ? "Correct" : "Incorrect");
          };
        }
      },
    tardy: true
  }),]
});

function buildTitle(digitNum) {
  var title = "_"
  for (let i = 1; i < digitNum; i++)
    title += " _";
  return title;
}

function isCorrectResponse(correct, response) {
  if (correct.length != response.length)
    return false;
  for (var i = 0; i < correct.length; i++)
    if (correct[i] != response.charAt(response.length - i - 1))
      return false;
  totalCorrect++;
  return true;
}


function sayDigits(digits) {
  if (!done)
    for (var i = 0; i < digits.length; i++)
      sayLine(digits[i]);
}

function sayLine(strLine){
   var msg = new SpeechSynthesisUtterance(strLine);
   window.speechSynthesis.speak(msg);
}

const digitLoop = new lab.flow.Loop({
  template: digitRecall,
  templateParameters: digits,
});

const final = new lab.html.Screen({content: "<h2>Thank you for your participation<h2>", timeout: 100});
final.on('end', () => {
  $("#modal").css({"display": "block"});
});

const study = new lab.flow.Sequence({
  datastore: ds,
  content: [
    new lab.html.Frame({context: "<main></main><footer><button id='continue' style='float:right;'>Continue</button></footer>", contextSelector: "main", responses: {"click button#continue": "Continue"}, content:
      new lab.html.Screen({content: "<h1>Backwards Digit Recall Task</h1><p>Please be sure to turn on audio. In this task, you will hear a sequence of digits. You will start with a sequence of two digits. Your job is to type them in reverse order. For every three responses you get right, the number of digits will increase by one. Please press the button below to continue</p>"})}),
    new lab.html.Frame({context: "<main></main><footer>Listen to the digits spoken, then type them in reverse order</footer>", contextSelector: "main", content: digitLoop}),
    final
  ]
});

$("#modal-content").click(function(){
    ds.download();
})

study.run();
