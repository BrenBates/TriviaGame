$(document).ready(function () {

    //Global variables
    let questions = [];
    let questionIndex = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let questionAnswered = false;
    let timer = 0;
    let timeVar = '';
    let contentDiv = $('<div>');
    let msgSpace = $('<p>');
    let counterP = $('<p>');
    let ffHeader = $('<h1>');
    ffHeader.append('Final Fantasy Trivia');
    let gifSpace = $('<div>');
    counterP.attr('id', 'countDown');
    msgSpace.attr('id', 'msg');
    gifSpace.attr('id', 'gifSpace');
    contentDiv.append(ffHeader).append(counterP).append(msgSpace);


    //Main process

    $(document).on('click', '#startGame', function () {

        ffAudio = new Audio("assets/mp3/oneWingedAngel.mp3");
        ffAudio.play();
        $('.container').css('background-color', 'rgba(173, 216, 230, 0.8)');
        $('.container').empty();
        $('.container').append(contentDiv).append(gifSpace);

        initialize();
        nextQuestion();
    });


    //Functions

    function myTimer() {
        timer = timer - 1;
        $('#countDown').empty().append('Time Remaining: ' + timer);

        if (timer <= 0) {
            $('#msg').empty().append('Time is up!  The correct answer was ' + questions[questionIndex].answer + '.');
            $('#gifSpace').append(questions[questionIndex].gif);
            questionIndex += 1;
            clearInterval(timeVar);
            questionAnswered = true;

            if (questionIndex <= questions.length) {
                return setTimeout(nextQuestion, questions[questionIndex - 1].gifTime);
            } else {
                endGame();
            }
        }

    }

    function initialize() {
        questions =

            [{
                    text: "Which iconic villain aimed to become a god by merging with the lifestream of the planet?",
                    optionOne: "<br><button class = 'question'>Golbez</button>:",
                    optionTwo: "<br><button class = 'question'>Kefka</button>",
                    optionThree: "<br><button class = 'question correct'>Sephiroth</button>",
                    optionFour: "<br><button class = 'question'>Halicarnassus</button>",
                    answer: "Sephiroth",
                    gif: '<div class="tenor-gif-embed" data-postid="5802543" data-share-method="host" data-width="100%" data-aspect-ratio="1.3333333333333333"><a href="https://tenor.com/view/sephiroth-final-fantasy7-ff7-flames-burn-gif-5802543">Sephiroth Final Fantasy7 GIF</a> from <a href="https://tenor.com/search/sephiroth-gifs">Sephiroth GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
                    gifTime: 4000
                },

                {
                    text: "This playable character allows you to suplex a ghost train",
                    optionOne: "<br><button class = 'question'>Edgar Roni Figaro</button>",
                    optionTwo: "<br><button class = 'question'>Locke Cole</button>",
                    optionThree: "<br><button class = 'question'>Setzer Gabbiani</button>",
                    optionFour: "<br><button class = 'question  correct'>Sabin Rene Figaro</button>",
                    answer: "Sabin Rene Figaro",
                    gif: '<div class="tenor-gif-embed" data-postid="12127442" data-share-method="host" data-width="100%" data-aspect-ratio="1.1531531531531531"><a href="https://tenor.com/view/ffvi-suplex-sabin-train-phantom-train-gif-12127442">Ffvi Suplex GIF</a> from <a href="https://tenor.com/search/ffvi-gifs">Ffvi GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
                    gifTime: 5000
                },

                {
                    text: "Kill this monster quickly, lest ye be hit by its ultimate attack which contains 1000 blows",
                    optionOne: "<br><button class = 'question'>Moogle</button>",
                    optionTwo: "<br><button class = 'question'>Behemoth</button>",
                    optionThree: "<br><button class = 'question  correct'>Cactuar</button>",
                    optionFour: "<br><button class = 'question'>Tonberry</button>",
                    answer: "Cactuar",
                    gif: '<div class="tenor-gif-embed" data-postid="12386155" data-share-method="host" data-width="100%" data-aspect-ratio="1.0"><a href="https://tenor.com/view/cactuar-final-fantasy-ffs-gamer-gif-12386155">Cactuar Final Fantasy GIF</a> from <a href="https://tenor.com/search/cactuar-gifs">Cactuar GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
                    gifTime: 2000
                },

                {
                    text: "This summoner must go on a painfully long pilgrimmage ending in her demise",
                    optionOne: "<br><button class = 'question'>Rydia</button>",
                    optionTwo: "<br><button class = 'question  correct'>Yuna</button>",
                    optionThree: "<br><button class = 'question'>Cid</button>",
                    optionFour: "<br><button class = 'question'>Garnet</button>",
                    answer: "Yuna",
                    gif: '<div class="tenor-gif-embed" data-postid="14602022" data-share-method="host" data-width="100%" data-aspect-ratio="1.7785714285714287"><a href="https://tenor.com/view/ffx-yuna-final-fantasy-x-dance-gif-14602022">Ffx Yuna GIF</a> from <a href="https://tenor.com/search/ffx-gifs">Ffx GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
                    gifTime: 8000
                },

                {
                    text: "This male protagonist wields a gunblade and has a rival named Seifer",
                    optionOne: "<br><button class = 'question'>Cecil Harvey</button>",
                    optionTwo: "<br><button class = 'question'>Ramza Beoulve</button>",
                    optionThree: "<br><button class = 'question'>Zidane Tribal</button>",
                    optionFour: "<br><button class = 'question correct'>Squall Leonhart</button>",
                    answer: "Squall Leonhart",
                    gif: '<div class="tenor-gif-embed" data-postid="12309258" data-share-method="host" data-width="100%" data-aspect-ratio="1.2835051546391754"><a href="https://tenor.com/view/final-fantasy8-rinoa-squall-ff8-funny-gif-12309258">Final Fantasy8 Rinoa GIF</a> from <a href="https://tenor.com/search/finalfantasy8-gifs">Finalfantasy8 GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
                    gifTime: 2500
                },

                {
                    text: "In this medievil throwback, the main character comes equipped with a tail",
                    optionOne: "<br><button class = 'question'>Final Fantasy Tactics</button>",
                    optionTwo: "<br><button class = 'question correct'>Final Fantasy 9</button>",
                    optionThree: "<br><button class = 'question'>Final Fantasy Crystal Chronicles</button>",
                    optionFour: "<br><button class = 'question'>Final Fantasy 15</button>",
                    answer: "Final Fantasy 9",
                    gif: '<div class="tenor-gif-embed" data-postid="5548544" data-share-method="host" data-width="100%" data-aspect-ratio="1.326086956521739"><a href="https://tenor.com/view/alexandros-final-fantasy9-gif-5548544">Alexandros Final Fantasy9 GIF</a> from <a href="https://tenor.com/search/alexandros-gifs">Alexandros GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
                    gifTime: 5000
                },


                {
                    text: "Which class of mage frequently casts flare?",
                    optionOne: "<br><button class = 'question'>Summoner</button>",
                    optionTwo: "<br><button class = 'question'>Time Mage</button>",
                    optionThree: "<br><button class = 'question correct'>Black Mage</button>",
                    answer: "Black Mage",
                    optionFour: "<br><button class = 'question'>Geomancer</button>",
                    gif: '<div class="tenor-gif-embed" data-postid="11823290" data-share-method="host" data-width="100%" data-aspect-ratio="1.0"><a href="https://tenor.com/view/final-fantasy-wizard-magic-gif-11823290">Final Fantasy Wizard GIF</a> from <a href="https://tenor.com/search/finalfantasy-gifs">Finalfantasy GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
                    gifTime: 2500
                },

                {
                    text: "In Final Fantasy 13, the main character's name is?",
                    optionOne: "<br><button class = 'question'>Stormy</button>",
                    optionTwo: "<br><button class = 'question'>Thunder</button>",
                    optionThree: "<br><button class = 'question'>Halicarnassus</button>",
                    optionFour: "<br><button class = 'question  correct'>Lightning</button>",
                    answer: "Lightning",
                    gif: '<div class="tenor-gif-embed" data-postid="11068056" data-share-method="host" data-width="100%" data-aspect-ratio="1.711340206185567"><a href="https://tenor.com/view/final-fantasy-lightning-gif-11068056">Final Fantasy Lightning GIF</a> from <a href="https://tenor.com/search/finalfantasy-gifs">Finalfantasy GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
                    gifTime: 4500
                },

                {
                    text: "In the all female sequel to Final Fantasy X, the three protagonists names are Yuna, Paine and __?",
                    optionOne: "<br><button class = 'question'>Rydia</button>",
                    optionTwo: "<br><button class = 'question  correct'>Rikku</button>",
                    optionThree: "<br><button class = 'question'>Rian</button>",
                    optionFour: "<br><button class = 'question'>Rosa</button>",
                    answer: "Rikku",
                    gif: '<div class="tenor-gif-embed" data-postid="14806446" data-share-method="host" data-width="100%" data-aspect-ratio="1.693877551020408"><a href="https://tenor.com/view/rikku-how-you-doing-final-fantasy-x-gif-14806446">Rikku How You Doing GIF</a> from <a href="https://tenor.com/search/rikku-gifs">Rikku GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
                    gifTime: 2500
                },

                {
                    text: "This summon stems from Greek mythology.  An entity that lures sailors to their doom.",
                    optionOne: "<br><button class = 'question'>Shiva</button>",
                    optionTwo: "<br><button class = 'question'>Asura</button>",
                    optionThree: "<br><button class = 'question  correct'>Siren</button>",
                    optionFour: "<br><button class = 'question'>Brynhildr</button>",
                    answer: "Siren",
                    gif: '<div class="tenor-gif-embed" data-postid="7494654" data-share-method="host" data-width="100%" data-aspect-ratio="0.5763052208835341"><a href="https://tenor.com/view/finalfantasy-gif-7494654">Finalfantasy GIF</a> from <a href="https://tenor.com/search/finalfantasy-gifs">Finalfantasy GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
                    gifTime: 5000
                }
            ]

        questionIndex = 0;
        correctCount = 0;
        incorrectCount = 0;
        questionAnswered = false;
        $('#msg').empty();
        $('#gifSpace').empty().children().remove();
        $('#countDown').empty();
    }

    function nextQuestion() {

      

        if (questionIndex === questions.length) {
            endGame()
        } else {

            timer = 10;
            $('#countDown').empty().append('Time Remaining: ' + timer);
           
            console.log(questionIndex);
            questionAnswered = false;
            $('#msg').empty();
            $('#gifSpace').empty();

            $('#msg').append(questions[questionIndex].text);
            $('#msg').append(questions[questionIndex].optionOne);
            $('#msg').append(questions[questionIndex].optionTwo);
            $('#msg').append(questions[questionIndex].optionThree);
            $('#msg').append(questions[questionIndex].optionFour);


             timeVar = setInterval(myTimer, 1000);

            $(document).on('click', '.question', function () {

               

                if ($(this).hasClass('correct') === true && questionAnswered === false) {
                    $('#msg').empty().append('That is correct!');
                    correctCount += 1;
                    $('#gifSpace').append(questions[questionIndex].gif);
                    questionIndex += 1;
                    clearInterval(timeVar);
                    questionAnswered = true;

                    if (questionIndex <= questions.length) {
                        return setTimeout(nextQuestion, questions[questionIndex - 1].gifTime);
                    } else {
                        endGame();
                    }
                }

                if ($(this).hasClass('correct') === false && questionAnswered === false) {
                    $('#msg').empty().append('Incorrect! The correct answer is ' + questions[questionIndex].answer + '.');
                    incorrectCount += 1;
                    $('#gifSpace').append(questions[questionIndex].gif);
                    questionIndex += 1;
                    clearInterval(timeVar);
                    questionAnswered = true;

                    if (questionIndex <= questions.length) {
                        return setTimeout(nextQuestion, questions[questionIndex - 1].gifTime);
                    } else {
                        endGame();
                    }

                }



            });
        }

    }

    function endGame() {

        $('#gifSpace').empty();
        $('#countDown').append('<br>All done, here\'s how you did!')
        $('#msg').empty().append('Correct Answers: ' + correctCount);
        $('#msg').append('<br>Incorrect Answers: ' + incorrectCount);
        $('#msg').append('<br>Unanswered: ' + (questions.length - incorrectCount - correctCount));
        startOver = $('<button>');
        startOver.attr('id', 'restartGame');
        startOver.append('Start Over?');
        $('#msg').append('<br>', startOver);
        $(document).on('click', '#restartGame', function () {
            //reinitialize variables to clear old data, clear the time interval and then start nextQuestion again to restart the game.
            initialize();
            clearInterval(timeVar);
            nextQuestion();
        });

    }

});