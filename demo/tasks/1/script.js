
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

const digitRecall = new lab.html.Form({
  content: '<h1 id="text">Trial #${dIndex + 1}: ${parameters.numbers.length} digits${sayDigits(parameters.numbers)}</h1>'
  + "<form id='form'>"
    + "<input type='text' id='response' name='response' autofocus=true/>"
    + "<button type='submit'>Submit</button>"
  + "</form>",
  "messageHandlers": {
    "run": function anonymous() {
      if (incorrect >= 2)
        this.end();
      const form = document.getElementById('form');
      const response = document.getElementById('response');
      const correct = digits[dIndex]['numbers'];
      dIndex++;
      form.onsubmit = () => {
        this.correctVar = isCorrectResponse(correct, response.value);
        if (!this.correctVar)
          incorrect++;
        else
          incorrect = 0;
        alert(this.correctVar ? "Correct" : "Incorrect");
      };
    }
  },
  tardy: true
});

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
  if (incorrect < 2)
    for (var i = 0; i < digits.length; i++)
      sayLine(digits[i]);
}

function sayLine(strLine){
   var msg = new SpeechSynthesisUtterance(strLine);
   window.speechSynthesis.speak(msg);
}

const digitLoop = new lab.flow.Loop({
  datastore: ds,
  template: digitRecall,
  templateParameters: digits,
});

const study = new lab.flow.Sequence({
  content: [
    new lab.html.Screen({content: "<h1>Welcome to the Backwards Digit Recall Test!</h1><h2>Please be sure to turn on audio.</h2><p>In this task, you will hear a sequence of digits. You will start with a sequence of two digits. Your job is to type them in reverse order. For every three responses you get right, the number of digits will increase by one.</p><h2>Please press the SPACEBAR to continue</h2>", "responses": {'keypress(Space)': 'Continue'},}),
    new lab.html.Frame({context: "<main></main><footer>Listen to the digits spoken, then type them in reverse order</footer>", contextSelector: "main", content: digitLoop}),
    new lab.html.Screen({content: "<h2>Thank you for your participation<h2><button onclick='ds.download()'>Download</button>"})
  ]
});

study.run();
