const ds = lab.data.Store();
const digits = [];
var dIndex = 0;
var correct = 0;
generateDigits();
console.log(digits);

const digitRecall = new lab.html.Form({
  content: '<h1 id="text">Trial #${dIndex + 1} of ${digits.length}${sayDigits(parameters.numbers)}</h1>'
  + "<form id='form'>"
    + "<input type='text' id='response' name='response' autofocus=true/>"
    + "<button type='submit'>Submit</button>"
  + "</form>",
  "responses": {},
  "messageHandlers": {
    "run": function anonymous() {
        const form = document.getElementById('form');
        const response = document.getElementById('response');
        const text = document.getElementById('text');
        const correct = digits[dIndex]['numbers'];
        dIndex++;
        form.onsubmit = () => {alert(isCorrectResponse(correct, response.value) ? "Correct" : "Incorrect");};
        //TODO Better alert of correctness
      }
  },
  tardy: true
});
//digitRecall.on('keypress(Space)', nextDigit());

function doNothing() {}

function isCorrectResponse(correct, response) {
  if (correct.length != response.length)
    return false;
  for (var i = 0; i < correct.length; i++)
    if (correct[i] != response.charAt(response.length - i - 1))
      return false;
  correct++;
  return true;
}

const digitLoop = new lab.flow.Loop({
  template: digitRecall,
  templateParameters: digits,
  responses: {
    'keypress(q)': 'end',
  }
});

function nextDigit() {
  var list = [];
  for (var j = 0; j < 2; j++)
    list.push(Math.floor(Math.random() * 10));
  digits.push({numbers: list});
}

function generateDigits() {
  for (var digitNum = 2; digitNum <= 5; digitNum++)
    for (var i = 1; i <= 3; i++) {
      var list = [];
      for (var j = 0; j < digitNum; j++)
        list.push(Math.floor(Math.random() * 10));
      digits.push({numbers: list});
    }
}

function sayDigits(digits) {
  for (var i = 0; i < digits.length; i++)
    sayLine(digits[i]);
}

function sayLine(strLine){
   var msg = new SpeechSynthesisUtterance(strLine);
   window.speechSynthesis.speak(msg);
}

const study = new lab.flow.Sequence({
  content: [
    new lab.html.Screen({content: "Instruction Placeholder", timeout: 1000}),
    digitLoop,
    new lab.html.Screen({content: "Debrief Placeholder ${correct} of ${digits.length} correct: ${correct / digits.length}%", timeout: 1000}),
  ]
});

study.on('end', () => ds.download());
study.run();
