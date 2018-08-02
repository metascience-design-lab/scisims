$("document").ready(function(){
    var typeOne = "";
    var typeTwo = "";
    var oddShape;
    var round = 0;          //  Current round
    var trial = 0;          // Current trial
    var roundLim = 2;       // Current round limit (list length)
    var answers = [];       // Stores correct position
    var curAnswer = 0;
    var score = 0;
    var timeoutID;
    var n;
    var timeout = true;
    var types = ["type1", "type2", "type3", "type4"];
    answerTypes = ["left", "middle", "right"];

    flag = 0;

    const ds = new lab.data.Store();



    $("#shape1").hide();
    $("#shape2").hide();
    $("#shape3").hide();
    $("#interval").hide();
    $("#round-end").hide();
    $("#score-div").hide();


    $("#footer-text").text("");

    $("#modal-content").click(function(){
        ds.show();
        ds.download(filetype='csv', filename='data.csv');
    })

    $("#shape1").click(function(){
        timeout = false;
        ds.commit({
            'section': 'test',
            'response': 'shape1',
            'ended_on': 'response',
            'duration': Date.now() - n,
        });
        clearTimeout(timeoutID);
        displayInterval();
    });
    $("#shape2").click(function(){
        timeout = false;
        ds.commit({
            'section': 'test',
            'response': 'shape2',
            'ended_on': 'response',
            'duration': Date.now() - n,
        });
        clearTimeout(timeoutID);
        displayInterval();
    });
    $("#shape3").click(function(){
        timeout = false;
        ds.commit({
            'section': 'test',
            'response': 'shape3',
            'ended_on': 'response',
            'duration': Date.now() - n,
        });
        clearTimeout(timeoutID);
        displayInterval();
    });

    $(".btn-continue").click(function(){
        $("#shape1").show();
        $("#shape2").show();
        $("#shape3").show();
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

    $("#1").click(checkAnswer);
    $("#2").click(checkAnswer);
    $("#3").click(checkAnswer);

    /**
      * @desc Resets all the variables as required and displays the necessary
      * divs to start the trial.
      */
    function start() {
        if (flag == -1) { //Flag is set to -1 when the task is over and the score screen is displayed
            return;
        }
        answers = [];
        curAnswer = 0;
        flag = 0;
        round = 0;
        n = Date.now()
        timeout = true;

        $("#shape1").show();
        $("#shape2").show();
        $("#shape3").show();
        $("#controls").hide();
        $("#round-end").hide();
        $("#score-div").hide();

        createShapes();
        for (var i = 1; i <= 3; i++) {
            if (i == oddShape) {
                displayShape("#shape" + i + "-grid-div", typeTwo);
            } else {
                displayShape("#shape" + i + "-grid-div", typeOne);
            }
        }
        $("#footer-text").text("Choose the odd shape");
        timeoutID = setTimeout(displayInterval, 2000);
    }

    /**
      * @desc Displays shape according to type in the div with ID gridID.
      * @param gridID is the ID of div in which the shape is displayed.
      * @param type is the type of shape.
      */
    function displayShape(gridID, type) {
        $(gridID).empty();
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                $(gridID).append('<div class="block ' + type + '"></div>');
            }
        }
    }

    /**
      * @desc Rnadomly generates two types and selects a shape as the odd shape.
      */
    function createShapes() {
        typeOne = types[Math.floor((Math.random() * types.length))];
        console.log(typeOne);
        typeTwo = "";
        do {
            typeTwo = types[Math.floor((Math.random() * types.length))];
        } while (typeOne === typeTwo);
        console.log(typeOne);
        console.log(typeTwo);

        oddShape = Math.floor((Math.random() * 3) + 1);
        console.log(oddShape);

        answers.push(oddShape);
    }

    /**
      * @desc Displays the next three shapes.
      */
    function nextGrid() {
        $("#interval").hide();


        n = Date.now()
        $("#shape1-grid-div").empty().removeClass().addClass("grid-div");
        $("#shape2-grid-div").empty().removeClass().addClass("grid-div");
        $("#shape3-grid-div").empty().removeClass().addClass("grid-div");
        createShapes();
        for (var i = 1; i <= 3; i++) {
            if (i == oddShape) {
                displayShape("#shape" + i + "-grid-div", typeTwo);
            } else {
                displayShape("#shape" + i + "-grid-div", typeOne);
            }
        }
        $("#shape1").show();
        $("#shape2").show();
        $("#shape3").show();
        $("#controls").hide();

        timeoutID = setTimeout(displayInterval, 2000);
    }

    /** @desc displays and interval and commits data to store.
      */
    function displayInterval() {
        if (timeout) {
            ds.commit({
                'section': 'test',
                'response': 'none',
                'ended_on': 'timeout',
                'duration': Date.now() - n,
            });
        }
        timeout = true;
        round++;
        if (round == roundLim) {
            endRound();
            return;
        }

        $("#shape1").hide();
        $("#shape2").hide();
        $("#shape3").hide();
        $("#interval").show();

        setTimeout(nextGrid, 1000);

    }

    /**
      * @desc Displays the round end div and hides other divs. Then creates and
      * shows the three options for the position of the odd shape.
      */
    function endRound() {
        $("#shape1").hide();
        $("#shape2").hide();
        $("#shape3").hide();
        var n = Date.now();
        curAnswer++;
        $("#footer-text").text("Choose the correct position of odd shape " + curAnswer);
        $("#round-end-heading").text("Choose the correct position of odd shape " + curAnswer);
        // for (var i = 0; i < 8; i++) {
        //     $("#round-end").append('<div id="ans-grid-div-' + (i+1) + '" class="grid-div ans-div"></div>');
        //     displayShape("#ans-grid-div-" + (i+1), origGrid);
        //     transform("#ans-grid-div-" + (i+1), type++);
        //     $("#ans-grid-div-" + (i+1)).click(checkAnswer);
        // }
        $("#round-end").show();
    }

    /**
      * @desc Checks if the position clicked was the correct answer. Then
      * calls endRound to show the next set of options or calls start to
      * go to the next trial.
      */
    function checkAnswer() {

        var ans = $(this).attr("id");
        console.log("ANS: " + ans + " " + answers[curAnswer-1]);
        if (ans != (answers[curAnswer-1])) { // Mod with 8 as we do not care
            //if the shape is flipped or not, we only need to know the deg rotation.
            console.log("wrong");
            flag = 1;
            ds.commit({
                'section': 'check-answer',
                'position_answer': answerTypes[answers[curAnswer-1]-1],
                'position_response': answerTypes[ans-1],
                'duration': Date.now() - n,
                'ended_on': 'response',
                'result': 'wrong'
            });
        } else {
            console.log("correct");
            ds.commit({
                'section': 'check-answer',
                'position_answer': answerTypes[answers[curAnswer-1]-1],
                'position_response': answerTypes[ans-1],
                'duration': Date.now() - n,
                'ended_on': 'response',
                'result': 'correct'
            });
        }
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
