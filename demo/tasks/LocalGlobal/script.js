const ds = new lab.data.Store();
const trialDuration = 120000;
var isLocal = true;
const localParam = [];
for(let i = 0; i < 500; i++)
  localParam.push({local: Math.floor(Math.random() * 4) + 1, global: Math.floor(Math.random() * 4) + 1, correctShape: 'local'});
const globalParam = [];
for(let i = 0; i < 500; i++)
  globalParam.push({local: Math.floor(Math.random() * 4) + 1, global: Math.floor(Math.random() * 4) + 1, correctShape: 'global'});
const lgParam = [];
for(let i = 0; i < 500; i++) {
  lgParam.push({local: Math.floor(Math.random() * 4) + 1, global: Math.floor(Math.random() * 4) + 1, correctShape: (isLocal ? 'local' : 'global')});
  isLocal = !isLocal;
}

const square = [
  [200, 200],
  [200, 100],
  [200, 0],
  [200, -100],
  [200, -200],
  [100, -200],
  [0, -200],
  [-100, -200],
  [-200, -200],
  [-200, -100],
  [-200, 0],
  [-200, 100],
  [-200, 200],
  [-100, 200],
  [0, 200],
  [100, 200]
];

const tri = [
  [0, -200],
  [87, -50],
  [173, 100],
  [-87, -50],
  [-173, 100],
  [0, 100]
];

const cross = [
  [200, 200],
  [100, 100],
  [0, 0],
  [-100, 100],
  [-200, 200],
  [200, -200],
  [100, -100],
  [-100, -100],
  [-200, -200],
];

const circle = [
  [200, 0],
  [-200, 0],
  [0, 200],
  [0, -200],
  [141.5, 141.5],
  [-141.5, 141.5],
  [141.5, -141.5],
  [-141.5, -141.5],
];

const rf = (ts, canvas, ctx, obj) => {
  ctx.fillStyle = '#000000'
  ctx.lineWidth = 15;
  let p = obj.aggregateParameters;
  var l, g;
  switch(p.local) {
    case 1:
      l = drawCircle;
    break;
    case 2:
      l = drawCross;
    break;
    case 3:
      l = drawTri;
    break;
    case 4:
     l = drawSquare;
    break;
  }
  switch (p.global) {
    case 1:
      g = circle;
    break;
    case 2:
      g = cross;
    break;
    case 3:
      g = tri;
    break;
    case 4:
      g = square;
    break;
  }
  for (let i = 0; i < g.length; i++)
    l(ctx, g[i][0], g[i][1]);
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.fillText(p.correctShape, 0, 270);
};

function drawSquare(ctx, x, y) {
  ctx.fillRect(
    x - 25,  // x coordinate
    y - 25, // y coordinate
    50, // width
    50  // height
  )
}

function drawTri(ctx, x, y) {
  let r = 32 // radius

  ctx.beginPath()

  // Move to the apex
  ctx.moveTo(
    x + r * Math.cos((0/3 - 0.5) * Math.PI), // center + displacement
    y + r * Math.sin((0/3 - 0.5) * Math.PI)
  )
  // First edge
  ctx.lineTo(
    x + r * Math.cos((2/3 - 0.5) * Math.PI),
    y + r * Math.sin((2/3 - 0.5) * Math.PI)
  )
  // Second edge
  ctx.lineTo(
    x + r * Math.cos((4/3 - 0.5) * Math.PI),
    y + r * Math.sin((4/3 - 0.5) * Math.PI)
  )
  // Fill the shape
  ctx.fill()
}

function drawCross(ctx, x, y) {
  ctx.beginPath();
  ctx.moveTo(x - 25, y - 25);
  ctx.lineTo(x + 25, y + 25);
  ctx.moveTo(x + 25, y - 25);
  ctx.lineTo(x - 25, y + 25);
  ctx.stroke();
}

function drawCircle(ctx, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 32, 0, 2 * Math.PI);
  ctx.fill();
}

const lgCanvas = new lab.canvas.Screen({
  renderFunction: rf,
  responses: {
    'keypress(1)': '1',
    'keypress(2)': '2',
    'keypress(3)': '3',
    'keypress(4)': '4',
  },
  correctResponse: "${parameters.correctShape == 'local' ? parameters.local : parameters.global}"
});

const local  = new lab.flow.Sequence({
  content: [
    new lab.html.Frame({context: "<main></main><footer><button id='continue' style='float:right;'>Continue</button></footer>", contextSelector: "main", responses: {"click button#continue": "Continue"}, content:
      new lab.html.Screen({content: "<h1>Local Task</h1><h2>Please press the button below to continue</h2>"})}),
    new lab.html.Frame({context: "<main></main><footer>Press the button on the keyboard corresponding to the local shape.</footer>", contextSelector: 'main', content:
      new lab.flow.Loop({template: lgCanvas, templateParameters: localParam, timeout: trialDuration})
    })
  ]
});

const global  = new lab.flow.Sequence({
  content: [
    new lab.html.Frame({context: "<main></main><footer><button id='continue' style='float:right;'>Continue</button></footer>", contextSelector: "main", responses: {"click button#continue": "Continue"}, content:
      new lab.html.Screen({content: "<h1>Global Task</h1><h2>Please press the button below to continue</h2>"})}),
    new lab.html.Frame({context: "<main></main><footer>Press the button on the keyboard corresponding to the global shape.</footer>", contextSelector: 'main', content:
      new lab.flow.Loop({template: lgCanvas, templateParameters: globalParam, timeout: trialDuration})
    })
  ]
});

const lg  = new lab.flow.Sequence({
  content: [
    new lab.html.Frame({context: "<main></main><footer><button id='continue' style='float:right;'>Continue</button></footer>", contextSelector: "main", responses: {"click button#continue": "Continue"}, content:
      new lab.html.Screen({content: "<h1>Alternating Task</h1><h2>Please press the button below to continue</h2>"})}),
    new lab.html.Frame({context: "<main></main><footer>Press the button on the keyboard corresponding to the local or global shape, according to the prompt.</footer>", contextSelector: 'main', content:
      new lab.flow.Loop({template: lgCanvas, templateParameters: lgParam, timeout: trialDuration})
    })
  ]
});

const tutorial = (ts, canvas, ctx, obj) => {
  ctx.lineWidth = 15;
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  drawCircle(ctx, -300, -200);
  ctx.fillText("Circle = 1", -300, -100);
  drawCross(ctx, -100, -200);
  ctx.fillText("Cross = 2", -100, -100);
  drawTri(ctx, 100, -193);
  ctx.fillText("Triangle = 3", 100, -100);
  drawSquare(ctx, 300, -200);
  ctx.fillText("Square = 4", 300, -100);
  ctx.fillRect(-200, 0, 25, 25);
  ctx.fillRect(-250, 50, 25, 25);
  ctx.fillRect(-250, -50, 25, 25);
  ctx.fillRect(-150, 50, 25, 25);
  ctx.fillRect(-150, -50, 25, 25);
  ctx.fillText("Local: 4   Global: 2", -180, 120);
  drawCross(ctx, 200, 75);
  drawCross(ctx, 260, 75);
  drawCross(ctx, 140, 75);
  drawCross(ctx, 260, 15);
  drawCross(ctx, 140, 15);
  drawCross(ctx, 200, -45);
  drawCross(ctx, 260, -45);
  drawCross(ctx, 140, -45);
  ctx.fillText("Local: 2   Global: 4", 210, 133);
  ctx.font = "40px Arial";
  ctx.fillText("Press the button below to continue", 0, 200);
}

const final = new lab.html.Screen({content: "<h1>Congrats, you have completed the Local Global Task!</h1>", timeout: 100, });
final.on('end', () => {
  $("#modal").css({"display": "block"});
});

const study = new lab.flow.Sequence({
  content: [
    new lab.html.Frame({context: "<main></main><footer><button id='continue' style='float:right;'>Continue</button></footer>", contextSelector: "main", responses: {"click button#continue": "Continue"}, content:
      new lab.html.Screen({content: "<h1>Local Global Task</h1><p>The test will consist of three two-minute blocks. Use the buttons 1-4 to input your responses. <br></br> ◯ = 1, X = 2, Δ = 3, □ = 4 <br></br> The test will consist of a series of images comprised of a local and a global shape. The LOCAL shapes are the smaller, solidly shaded shapes. There will be several on each slide. The GLOBAL shape is the shape formed from the collection of local shapes. There is only one per slide. Press the button corresponding either the local or global shape, as prompted. Press the button below to continue.</p>",})}),
    new lab.html.Frame({context: "<main></main><footer><button id='continue' style='float:right;'>Continue</button></footer>", contextSelector: "main", responses: {"click button#continue": "Continue"}, content:
      new lab.canvas.Screen({renderFunction: tutorial})}),
    global,
    local,
    lg,
    final
  ],
  datastore: ds
});

$("#modal-content").click(function(){
    ds.download();
})

study.run();
