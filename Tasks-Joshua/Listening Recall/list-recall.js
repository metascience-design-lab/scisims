$("document").ready(function(){

    $("#controls").hide();
    $("#trial-end").hide();
    $("#score-div").hide();

    $("#footer-text").text("Click Continue to start the task");

    var lines = ["the sky is blue", "the earth is flat", "2018 is the current year", "oranges are orange", "Europe is a continent", "pluto is a planet", "spiders are insects", "new delhi is the capital of india", "penguins can fly", "burj khalifa is the tallest building", "there are 50 states in america", "there are 75 countries in the world", "the moon landing was faked", "macbook is an apple product", "clouds are made of cotton", "panda bears are not bears", "grass is green", "humans stay on mars", "copper is a precious metal", "water is wet", "cows are mammals", "anteaters eat ants", "germany is in europe", "ice floats in water", "tom hardy is an actor", "there are aliens in roswell", "bigfoot is real"]

    var index = 0;
    var trialNo = 1;
    var sentenceNo = 2;     // The current list length
    var curSentences = 0;   // The number of sentences displayed
    var wordCounter = 0;   // Counter of number of text inputs
    var arrWords = [];  // Contains the last words of each statement in current trial
    var score = 0;      // Counts the number of trials gotten correct
    var prevScore;      // Stores the previous score

    $(".btn-continue").click(function(){
        $("#controls").show();
        $("#instructions").hide();
        $("#footer").show();
        $("#footer-text").text("Click Play and decide whether the statement you hear is True or False");

    })

    function playLine(strLine){
        var msg = new SpeechSynthesisUtterance(strLine);
        window.speechSynthesis.speak(msg);
    }

    $(".btn-play").click(function(){
        //console.log(curSentences);
        $("#statement").text("Statement " + (curSentences + 1));
        playLine(lines[index]);
    });

    $(".btn-true").click(nextStatement);
    $(".btn-false").click(nextStatement);

    /**
      *Pushes the last word of current statement to array and increments index.
     */
    function nextStatement() {
        var words = lines[index].split(" ");
        arrWords.push(words[words.length-1]);
        //console.log(arrWords[arrWords.length-1]);
        index++;
        curSentences++;
        if (curSentences == sentenceNo) {
            finishTrial();
            return;
        }
        $("#statement").text("Statement " + (curSentences + 1));
        //console.log(curSentences);
    }

    /**
      * Shows the trial end screen and appends the necessary number of text input elements.
      */
    function finishTrial() {
        console.log("Trial Finished " + curSentences + " " + sentenceNo);
        $("#controls").hide();
        $("#trial-end").show();
        $("#footer-text").text("Type in the last word of each statement");
        for ( ; wordCounter < sentenceNo; wordCounter++) {
            $(".btn-submit").before('Word ' + (wordCounter + 1) + '<input type="text" id="word' + (wordCounter+1) + '"><br>');
        }

    }

    /**
      * Checks if answers are correct and updates score accordingly. Also displays the controls for the next trial.
      */
    $(".btn-submit").click(function(){
        curSentences = 0;
        $("#controls").show();
        $("#trial-end").hide();
        score++;

        for (var i = 0 ; i < wordCounter; i++) {
            //console.log($("#word" + (i+1)).val().trim().toLowerCase());
            //console.log(arrWords[i]);
            if ($("#word" + (i+1)).val().trim().toLowerCase() != (arrWords[i])) {
                score--;
                break;
            }
        }
        //console.log(score);

        for (var i = 1 ; i <= wordCounter; i++) {
            $("#word" + i).val("");
        }
        arrWords = [];
        $("#statement").text("Statement " + (curSentences + 1));
        checkScore();
    });

    /**
      * Checks score and trial number to decide whether to end task or start next trial. Number of sentences are incremented every four trials.
      * Score is calulated according to research paper.
      */
    function checkScore() {
        $("#footer-text").text("Click Play and decide whether the statement you hear is True or False");
        if (trialNo%4 == 0 && trialNo != 0) {
            if (score == 2) {
                displayScore(sentenceNo - 0.5);  // If 2 trials at current list length are correct, then score is = (previous list length + 0.5)
            } else if (score < 2) {
                displayScore(sentenceNo - 1);   // If less than 2 trials at current list length are correct, then score is = (previous list length)
            }                                   // If more than 2 trials at current list length are correct, then continue to next trial
            score = 0;
            sentenceNo++;
        }
        trialNo++;
    }

    function displayScore(score) {
        $("#controls").hide();
        $("#score-div").show();
        $("#footer-text").text("The task is complete!");
        $("#score").text("Your score is: " + score);
    }


});
