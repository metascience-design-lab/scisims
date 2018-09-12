$("document").ready(function(){
    var origGrid;    // Represents original grid
    var shape = new Array(5);       // Represents shape
    var round = 0;                  //  Current round
    var trial = 0;          // Current trial
    var roundLim = 2;       // Current round limit (list length)
    var answers = [];       // Stores correct orientation
    var curAnswer = 0;
    var score = 0;
    var timeoutID;
    var n;
    var timeout = true;
    var transformations = ["normal", "rotate45", "rotate90", "rotate135",
    "rotate180", "rotate225", "rotate270", "rotate315", "flip", "fliprotate45",
    "fliprotate90", "fliprotate135", "fliprotate180", "fliprotate225",
    "fliprotate270", "fliprotate315"];

    flag = 0;

    const ds = new lab.data.Store();



    $("#original").hide();
    $("#test").hide();
    $("#controls").hide();
    $("#round-end").hide();
    $("#score-div").hide();
    $("#interval").hide();


    $("#footer-text").text("");

    $("#modal-content").click(function(){
        ds.show();
        ds.download(filetype='csv', filename='data.csv');
    })

    $("#btn-normal").click(function(){
        timeout = false;
        ds.commit({
            'section': 'test',
            'response': 'normal',
            'duration': Date.now() - n,
        });
        clearTimeout(timeoutID);
        nextGrid();
    });
    $("#btn-mirror").click(function(){
        timeout = false;
        ds.commit({
            'section': 'test',
            'response': 'mirror',
            'duration': Date.now() - n,
        });
        clearTimeout(timeoutID);
        nextGrid();
    });

    $(".btn-continue").click(function(){
        $("#original").show();
        $("#test").show();
        $("#controls").show();
        $("#instructions").hide();
        $("#title").hide();
        $("#footer").show();
        $(".btn-continue").hide();
        start();
    })

    $(".btn-download").click(function(){
        ds.show();
        ds.download(filetype='csv', filename='data.csv')
    })

    $(".btn-download-footer").click(function(){
        ds.show();
        ds.download(filetype='csv', filename='data.csv')
    })

    /**
      * @desc Resets all the variables as required and displays the necessary
      * divs to start the trial.
      */
    function start() {
        if (flag == -1) { //Flag is set to -1 when the task is over and the score screen is displayed
            return;
        }
        origGrid = new Array(5);
        answers = [];
        curAnswer = 0;
        flag = 0;
        round = 0;
        n = Date.now()
        timeout = true;

        $("#original").show();
        $("#test").show();
        $("#controls").hide();
        $("#round-end").hide();
        $("#score-div").hide();
        //$("#interval").hide();


        createShape();
        createGrid(origGrid);
        displayShape("#orig-grid-div", origGrid);
        displayShape("#test-grid-div", origGrid);
        transform("#test-grid-div");
        $("#footer-text").text("Choose whether the shape on the right is a rotated or a mirror image of the shape on the left");
        timeoutID = setTimeout(displayInterval, 3000);
    }

    /**
      * @desc Displays shape according to square matrix grid by coloring in the
      * respective inner divs in the div with ID gridID.
      * @param gridID is the ID of div in which the shape is displayed.
      * @param grid is the square matrix that represents the shape.
      */
    function displayShape(gridID, grid) {
        $(gridID).empty();
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    //console.log("i: " + i + " j: " + j + " index: " + shape.indexOf(3*(i-1) + (j-1)));
                    $(gridID).append('<div class="block black"></div>');
                } else if (grid[i][j] == 2 && gridID != "#orig-grid-div") {
                    $(gridID).append('<div class="block red"></div>');
                }
                else {
                    $(gridID).append('<div class="block"></div>');
                }
            }
        }
    }

    /**
      * @desc Displays shape with eight different red circles which represent
      * eight different orientations of test shape.
      * @param gridID is the ID of div in which the shape is displayed.
      */
    function displayAnswerShape(gridID) {
        $(gridID).empty();
        idNo = [7, 0, 1, 6, 2, 5, 4, 3]; //id numbers for each circle; used to check answer
        k = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                if (i == 0 || i == 4) {
                    if (j == 0 || j == 2 || j == 4) {
                        $(gridID).append('<div id="' + idNo[k++] + '" class="block red ans"></div>');
                    } else {
                        $(gridID).append('<div class="block"></div>');
                    }
                } else if (i == 2) {
                    if (j == 0 || j == 4) {
                        $(gridID).append('<div id="' + idNo[k++] + '" class="block red ans"></div>');
                    } else {
                        $(gridID).append('<div class="block"></div>');
                    }
                } else {
                    $(gridID).append('<div class="block"></div>');
                }
            }
        }
    }

    /**
      * @desc Creates a shape by choosing 5 random blocks out of 9 to fill in.
      */
    function createShape() {
        for (var i = 0; i < shape.length; i++) {
            var randomNo = Math.floor((Math.random()*8)+1);
            //console.log(randomNo);
            if (!(shape.indexOf(randomNo) > -1)) {
                shape[i] = randomNo;
            } else {
                i--;
            }
        }
        shape.sort();
        //console.log(shape)
    }

    /**
      * Creates an NxN 2D array of 0s, 1s, and 2s. N is the size of parameter
      * grid. 0 represents a white block, 1 represents a black block and 2
      * represents a red circle.
      * @param grid is the 2D array in which to create the grid.
    */
    function createGrid(grid) {
        for (var i = 0; i < grid.length; i++) {
            grid[i] = new Array(grid.length);
        }
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[0].length; j++) {
                if (i >= 1 && i <= 3 && j >= 1 && j <= 3 && (shape.indexOf(3*(i-1) + (j-1)) > -1)) {
                    //console.log("i: " + i + " j: " + j + " index: " + shape.indexOf(3*(i-1) + (j-1)));
                    grid[i][j] = 1;
                } else if (i == 0 && j == 2) {
                    grid[i][j] = 2;
                }
                else {
                    grid[i][j] = 0;
                }
            }
        }
    }

    /**
      * @desc Transforms the div containing the shape in eight different ways.
      * @param gridID is the ID of div in which the shape is displayed.
      * @param type is the type of transformation to be applied to the div. If
      * no type is given then it is randomly chosen.
      */
    function transform(gridID, type = -1) {

        if (type < 0) {
            type = Math.floor((Math.random() * 16));
        }
        //console.log(type);
        var transformClass = transformations[type];
        $(gridID).addClass(transformClass);
        answers.push(type);
    }

    /**
      * @desc Displays the next random test grid or ends round if round limit is
      * reached.
      */
    function nextGrid() {
        if (timeout) {
            ds.commit({
                'section': 'test',
                'duration': Date.now() - n,
            });
        }
        timeout = true;
        round++;
        if (round == roundLim) {
            endRound();
            return;
        }
        $("#original").show();
        $("#test").show();
        $("#controls").hide();
        //$("#interval").hide();

        n = Date.now()
        $("#test-grid-div").empty().removeClass().addClass("grid-div");
        displayShape("#test-grid-div", origGrid);
        transform("#test-grid-div");
        timeoutID = setTimeout(displayInterval, 3000);
    }

    function displayInterval() {
        $("#original").hide();
        $("#test").hide();
        $("#controls").show();
        //$("#interval").show();
        //setTimeout(nextGrid, 2000);

    }

    /**
      * @desc Displays the round end div and hides other divs.Then creates and
      * shows the eight different options for the orientation of the test shape.
      */
    function endRound() {
        $("#original").hide();
        $("#test").hide();
        $("#controls").hide();
        var type = 1;
        var n = Date.now();
        curAnswer++;
        $("#round-end").append('<h2>Choose the correct orientation of test shape ' + curAnswer + '</h2>')
        $("#footer-text").text("Choose the correct orientation of test shape " + curAnswer);
        $("#round-end").append('<div id="ans-grid-div" class="grid-div ans-div"></div>');
        displayAnswerShape("#ans-grid-div");
        for (var i = 0; i < 8; i++) {
            $("#" + i).click(checkAnswer);
        }
        // for (var i = 0; i < 8; i++) {
        //     $("#round-end").append('<div id="ans-grid-div-' + (i+1) + '" class="grid-div ans-div"></div>');
        //     displayShape("#ans-grid-div-" + (i+1), origGrid);
        //     transform("#ans-grid-div-" + (i+1), type++);
        //     $("#ans-grid-div-" + (i+1)).click(checkAnswer);
        // }

        $("#round-end").show();
    }

    /**
      * @desc Checks if the orientation clicked was the correct answer. Then
      * calls endRound to show the next set of options or calls start to
      * go to the next trial.
      */
    function checkAnswer() {

        var ans = $(this).attr("id");
        console.log("ANS: " + ans + " " + answers[curAnswer-1]);
        if (ans != (answers[curAnswer-1]%8)) { // Mod with 8 as we do not care
            //if the shape is flipped or not, we only need to know the deg rotation.
            console.log("wrong");
            flag = 1;
            ds.commit({
                'section': 'check-answer',
                'shape_answer': transformations[answers[curAnswer-1]%8],
                'shape_response': transformations[ans],
                'duration': Date.now() - n,
                'ended_on': 'response',
                'result': 'wrong'
            });
        } else {
            console.log("correct");
            ds.commit({
                'section': 'check-answer',
                'shape_answer': transformations[answers[curAnswer-1]%8],
                'shape_response': transformations[ans],
                'duration': Date.now() - n,
                'ended_on': 'response',
                'result': 'correct'
            });
        }
        $("#round-end").empty();
        console.log(curAnswer);
        if (curAnswer == roundLim) {
            console.log("start");
            calcScore();
            start();
        } else {
            endRound();
        }
    }

    /**
      * @desc Calculates the current score according to research paper and calls
      * displayScore() to end task
      * and display the score div if needed.
      */
    function calcScore() {
        if (flag != 1) {
            score++;
        }
        console.log("score: " + score);
        trial++;
        if (trial%3 == 0) {
            console.log("endscore: " + score);
            if (score == 1) {                   // If 1 trial at current list length is correct, then score is = (previous list length + 0.5)
                displayScore(roundLim - 0.5);
            } else if (score < 1) {             // If less than 1 trial at current list length is correct, then score is = (previous list length)
                displayScore(roundLim - 1);
            }                                   // If more than 1 trial at current list length is correct, then continue to next trial
            score = 0;
            roundLim++;
        }

    }

    /**
      * @desc Displays the score div and sets flag to -1 so that start does not
      * run and the task ends.
      */
    function displayScore(score) {
        $("#modal").css({"display": "block"});
        $("#round-end").hide();
        $("#score-div").show();
        $("#footer-text").text("");
        flag = -1;
    }
});
