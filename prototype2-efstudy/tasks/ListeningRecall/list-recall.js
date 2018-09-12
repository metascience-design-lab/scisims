$("document").ready(function(){


    const ds = new lab.data.Store();

    $("#controls").hide();
    $("#trial-end").hide();
    $("#score-div").hide();
    $("#error").hide();
    $("#footer-text").text("");

    var lines = ["the sky is blue", "the earth is flat", "1999 is the current year", "oranges are orange", "Europe is a continent", "pluto is a planet", "spiders are insects", "new delhi is the capital of india", "penguins can fly", "burj khalifa is the tallest building", "there are 50 states in america", "there are 75 countries in the world", "There are 12 months in a year", "macbook is an apple product", "clouds are made of cotton", "panda bears are not bears", "grass is purple", "humans stay on mars", "copper is a precious metal", "PLaystation is owned by Sony", "cows are mammals", "anteaters eat ants", "germany is in europe", "ice floats in water", "tom hardy is an actor", "there are aliens in roswell", "Katy Perry is a singer", "hawaii is part of the United States", "the earth revolves around the sun", "the study of plants is known as botany", "mount Kilimanjaro is the tallest mountain in the world", "herbivores eat meat", "spiders have six legs", "The human skeleton is made up of less than 100 bones", "elephants eat with their noses", "chimpanzees are nocturnal", "Bananas grow on trees", "an octopus has three hearts", "russia has a larger surface area than Pluto", "it rains diamonds on Saturn and Jupiter", "there are more fake flamingos in the world than real ones"]
    var index = 0;
    var trialNo = 1;
    var sentenceNo = 2;     // The current list length
    var curSentences = 0;   // The number of sentences displayed
    var wordCounter = 0;   // Counter of number of text inputs
    var arrWords = [];  // Contains the last words of each statement in current trial
    var score = 0;      // Counts the number of trials gotten correct
    var prevScore;      // Stores the previous score
    var n;              // Stores time

    $(".btn-continue").click(function(){
        $("#controls").show();
        $("#instructions").hide();
        $("#heading").hide();
        $("#footer").show();
        $(".btn-continue").hide();
        $("#footer-text").text("Click Play and decide whether the statement you hear is True or False");
        n = Date.now();

    })

    $(".btn-download").click(function(){
        ds.show();
        ds.download(filetype='csv', filename='data.csv');
    })

    $("#modal-content").click(function(){
        ds.show();
        ds.download(filetype='csv', filename='data.csv');
    })

    $(".btn-download-footer").click(function(){
        ds.show();
        ds.download(filetype='csv', filename='data.csv');
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

    $(".btn-true").click(function(){
        ds.commit({
            'section': 'statement',
            'line_index': index+1,
            'response': 'true',
            'duration': Date.now() - n
        });
        nextStatement();
    });
    $(".btn-false").click(function(){
        ds.commit({
            'section': 'statement',
            'line_index': index+1,
            'response': 'false',
            'duration': Date.now() - n
        });
        nextStatement();
    });

    /**
      *Pushes the last word of current statement to array and increments index.
     */
    function nextStatement() {
        var words = lines[index].split(" ");
        arrWords.push(words[words.length-1]);
        index++;
        curSentences++;
        if (curSentences == sentenceNo) {
            finishTrial();
            return;
        }
        $("#statement").text("Statement " + (curSentences + 1));
        n = Date.now();;
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
        for (var i = 0 ; i < wordCounter; i++) {
            if ($("#word" + (i+1)).val().trim().toLowerCase() == "") {
                $("#error").show();
                return;
            }
        }
        $("#error").hide();
        curSentences = 0;
        $("#controls").show();
        $("#trial-end").hide();
        score++;
        n = Date.now();

        for (var i = 0 ; i < wordCounter; i++) {
            if ($("#word" + (i+1)).val().trim().toLowerCase() == (arrWords[i])) {
                ds.commit({
                    'section': 'word-input',
                    'word_answer': arrWords[i],
                    'word_response': $("#word" + (i+1)).val().trim().toLowerCase(),
                    'result': 'correct'
                });
            } else {
                ds.commit({
                    'section': 'word-input',
                    'word_answer': arrWords[i],
                    'word_response': $("#word" + (i+1)).val().trim().toLowerCase(),
                    'result': 'wrong'
                });
            }
        }

        for (var i = 0 ; i < wordCounter; i++) {
            if ($("#word" + (i+1)).val().trim().toLowerCase() != (arrWords[i])) {
                score--;
                break;
            }
        }

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
        $("#modal").css({"display": "block"});
        $("#controls").hide();
        $("#score-div").show();
        $("#footer-text").text("");
    }


});
