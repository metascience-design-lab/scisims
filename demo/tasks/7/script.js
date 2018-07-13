const ds = new lab.data.Store();
const trialDuration = 15000;
var isLocal = true;
const localParam = [];
for(let i = 0; i < 50; i++)
  localParam.push({local: Math.floor(Math.random() * 4) + 1, global: Math.floor(Math.random() * 4) + 1, correctShape: 'local'});
const globalParam = [];
for(let i = 0; i < 50; i++)
  globalParam.push({local: Math.floor(Math.random() * 4) + 1, global: Math.floor(Math.random() * 4) + 1, correctShape: 'global'});
const lgParam = [];
for(let i = 0; i < 50; i++) {
  lgParam.push({local: Math.floor(Math.random() * 4) + 1, global: Math.floor(Math.random() * 4) + 1, correctShape: (isLocal ? 'local' : 'global')});
  isLocal = !isLocal;
}

const lgScreen = new lab.html.Screen({
  content: "<h1>Local: ${parameters.local}</h1><h1>Global: ${parameters.global}</h1><h1>Correct: ${parameters.correctShape}</h1>",
  responses: {
    'keypress(1)': '1',
    'keypress(2)': '2',
    'keypress(3)': '3',
    'keypress(4)': '4',
  },
  correctResponse: "${parameters.correctShape == 'local' ? parameters.local : parameters.global}"
});

const local = new lab.html.Frame({
  context: "<main></main><footer>Press the button on the keyboard corresponding to the local shape.<button onclick='ds.download()' style='float:right;'>Download</button></footer>",
  contextSelector: 'main',
  content: new lab.flow.Sequence({
    content: [
      new lab.html.Screen({content: "<h1>Local Task</h1><h2>Please press the SPACEBAR to continue</h2>", "responses": {'keypress(Space)': 'Continue'}}),
      new lab.flow.Loop({
        template: lgScreen,
        templateParameters: localParam,
        timeout: trialDuration
      })
    ]
  })
});

const global = new lab.html.Frame({
  context: "<main></main><footer>Press the button on the keyboard corresponding to the global shape.<button onclick='ds.download()' style='float:right;'>Download</button></footer>",
  contextSelector: 'main',
  content: new lab.flow.Sequence({
    content: [
      new lab.html.Screen({content: "<h1>Global Task</h1><h2>Please press the SPACEBAR to continue</h2>", "responses": {'keypress(Space)': 'Continue'}}),
      new lab.flow.Loop({
        template: lgScreen,
        templateParameters: globalParam,
        timeout: trialDuration
      })
    ]
  })
});

const lg = new lab.html.Frame({
  context: "<main></main><footer>Press the button on the keyboard corresponding to the local or global shape.<button onclick='ds.download()' style='float:right;'>Download</button></footer>",
  contextSelector: 'main',
  content: new lab.flow.Sequence({
    content: [
      new lab.html.Screen({content: "<h1>Alternating Task</h1><h2>Please press the SPACEBAR to continue</h2>", "responses": {'keypress(Space)': 'Continue'}}),
      new lab.flow.Loop({
        template: lgScreen,
        templateParameters: lgParam,
        timeout: trialDuration
      })
    ]
  })
});

const study = new lab.flow.Sequence({
  content: [
    new lab.html.Screen({content: "<h1>Welcome to the Local Global Test!</h1><p>This is placeholder text that will be replaced with actual instructions later</p><h2>Please press the SPACEBAR to continue</h2>", "responses": {'keypress(Space)': 'Continue'},}),
    global,
    local,
    lg,
    new lab.html.Screen({content: "<h2>Thank you for your participation<h2><button onclick='ds.download()' style='float:right;'>Download</button>"})
  ],
  datastore: ds
});

study.run();
