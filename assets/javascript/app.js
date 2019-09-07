$(document).ready(function() {

////////////////////////
//Questions as Objects//
////////////////////////



//Sephiroth
var questionOne = {
    "text" : "Which iconic villain aimed to become a god by merging with the lifestream of the planet?",
    "optionOne" : '<br><button>Golbez</button>',
    "optionTwo" : "<br><button>Kefka</button>",
    "optionThree" : "<br><button class = 'correct'>Sephiroth</button>", 
    "optionFour" : "<br><button>Halicarnassus</button>",
    "answer" : "Sephiroth",
    "gif" : '<div class="tenor-gif-embed" data-postid="5802543" data-share-method="host" data-width="100%" data-aspect-ratio="1.3333333333333333"><a href="https://tenor.com/view/sephiroth-final-fantasy7-ff7-flames-burn-gif-5802543">Sephiroth Final Fantasy7 GIF</a> from <a href="https://tenor.com/search/sephiroth-gifs">Sephiroth GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    "gifTime" : 4000
};


//Sabin
var questionTwo = {
    "text" : "This playable character allows you to suplex a ghost train",
    "optionOne" : '<br><button>Edgar Roni Figaro</button>',
    "optionTwo" : "<br><button>Locke Cole</button>",
    "optionThree" : "<br><button>Setzer Gabbiani</button>", 
    "optionFour" : "<br><button class = 'correct'>Sabin Rene Figaro</button>",
    "answer" : "Sabin",
    "gif" : '<div class="tenor-gif-embed" data-postid="12127442" data-share-method="host" data-width="100%" data-aspect-ratio="1.1531531531531531"><a href="https://tenor.com/view/ffvi-suplex-sabin-train-phantom-train-gif-12127442">Ffvi Suplex GIF</a> from <a href="https://tenor.com/search/ffvi-gifs">Ffvi GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    "gifTime" : 5000
};

//Cactuar
var questionThree = {
    "text" : "Kill this monster quickly, lest ye be hit by its ultimate attack which contains 1000 blows",
    "optionOne" : '<br><button>Moogle</button>',
    "optionTwo" : "<br><button>Behemoth</button>",
    "optionThree" : "<br><button class='correct'>Cactuar</button>", 
    "optionFour" : "<br><button>Tonberry</button>",
    "answer" : "Cactuar",
    "gif" : '<div class="tenor-gif-embed" data-postid="12386155" data-share-method="host" data-width="100%" data-aspect-ratio="1.0"><a href="https://tenor.com/view/cactuar-final-fantasy-ffs-gamer-gif-12386155">Cactuar Final Fantasy GIF</a> from <a href="https://tenor.com/search/cactuar-gifs">Cactuar GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    "gifTime" : 2000
};

//Yuna 
var questionFour = {
    "text" : "This summoner must go on a painfully long pilgrimmage ending in her demise",
    "optionOne" : '<br><button>Rydia</button>',
    "optionTwo" : "<br><button class='correct'>Yuna</button>",
    "optionThree" : "<br><button>Cid</button>", 
    "optionFour" : "<br><button>Garnet</button>",
    "answer" : "Yuna",
    "gif" : '<div class="tenor-gif-embed" data-postid="14602022" data-share-method="host" data-width="100%" data-aspect-ratio="1.7785714285714287"><a href="https://tenor.com/view/ffx-yuna-final-fantasy-x-dance-gif-14602022">Ffx Yuna GIF</a> from <a href="https://tenor.com/search/ffx-gifs">Ffx GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    "gifTime" : 8000
};

//Squall 
var questionFive = {
    "text" : "This male protagonist wields a gunblade and has a rival named Seifer",
    "optionOne" : '<br><button>Cecil Harvey</button>',
    "optionTwo" : "<br><button>Ramza Beoulve</button>",
    "optionThree" : "<br><button>Zidane Tribal</button>", 
    "optionFour" : "<br><button class='correct'>Squall Leonhart</button>",
    "answer" : "Squall",
    "gif" : '<div class="tenor-gif-embed" data-postid="12309258" data-share-method="host" data-width="100%" data-aspect-ratio="1.2835051546391754"><a href="https://tenor.com/view/final-fantasy8-rinoa-squall-ff8-funny-gif-12309258">Final Fantasy8 Rinoa GIF</a> from <a href="https://tenor.com/search/finalfantasy8-gifs">Finalfantasy8 GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    "gifTime" : 2500
};

//Final Fantasy 9 
var questionSix = {
    "text" : "In this medievil throwback, the main character comes equipped with a tail",
    "optionOne" : '<br><button>Final Fantasy Tactics</button>',
    "optionTwo" : "<br><button class='correct'>Final Fantasy 9</button>",
    "optionThree" : "<br><button>Final Fantasy Crystal Chronicles</button>", 
    "optionFour" : "<br><button>Final Fantasy 15</button>",
    "answer" : "Final Fantasy 9",
    "gif" : '<div class="tenor-gif-embed" data-postid="5548544" data-share-method="host" data-width="100%" data-aspect-ratio="1.326086956521739"><a href="https://tenor.com/view/alexandros-final-fantasy9-gif-5548544">Alexandros Final Fantasy9 GIF</a> from <a href="https://tenor.com/search/alexandros-gifs">Alexandros GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    "gifTime" : 5000
};

//Black Mage 
var questionSeven = {
    "text" : "Which class of mage frequently casts flare?",
    "optionOne" : '<br><button>Summoner</button>',
    "optionTwo" : "<br><button>Time Mage</button>",
    "optionThree" : "<br><button class = 'correct'>Black Mage</button>", 
    "answer" : "Black Mage",
    "optionFour" : "<br><button>Geomancer</button>",
    "gif" : '<div class="tenor-gif-embed" data-postid="11823290" data-share-method="host" data-width="100%" data-aspect-ratio="1.0"><a href="https://tenor.com/view/final-fantasy-wizard-magic-gif-11823290">Final Fantasy Wizard GIF</a> from <a href="https://tenor.com/search/finalfantasy-gifs">Finalfantasy GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    "gifTime" : 2500
};

//Lightning
var questionEight = {
    "text" : "In Final Fantasy 13, the main character's name is?",
    "optionOne" : '<br><button>Stormy</button>',
    "optionTwo" : "<br><button>Thunder</button>",
    "optionThree" : "<br><button>Halicarnassus</button>", 
    "optionFour" : "<br><button class='correct'>Lightning</button>",
    "answer" : "Lightning",
    "gif" : '<div class="tenor-gif-embed" data-postid="11068056" data-share-method="host" data-width="100%" data-aspect-ratio="1.711340206185567"><a href="https://tenor.com/view/final-fantasy-lightning-gif-11068056">Final Fantasy Lightning GIF</a> from <a href="https://tenor.com/search/finalfantasy-gifs">Finalfantasy GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    "gifTime" : 4500
};

//Rikku
var questionNine = {
    "text" : "In the all female sequel to Final Fantasy X, the three protagonists names are Yuna, Paine and __?",
    "optionOne" : '<br><button>Rydia</button>',
    "optionTwo" : "<br><button class = 'correct'>Rikku</button>",
    "optionThree" : "<br><button>Rian</button>", 
    "optionFour" : "<br><button>Rosa</button>",
    "answer" : "Rikku",
    "gif" : '<div class="tenor-gif-embed" data-postid="14806446" data-share-method="host" data-width="100%" data-aspect-ratio="1.693877551020408"><a href="https://tenor.com/view/rikku-how-you-doing-final-fantasy-x-gif-14806446">Rikku How You Doing GIF</a> from <a href="https://tenor.com/search/rikku-gifs">Rikku GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    "gifTime" : 2500
};

//Siren
var questionTen = {
    "text" : "This summon stems from Greek mythology.  An entity that lures sailurs to their doom.",
    "optionOne" : '<br><button>Shiva</button>',
    "optionTwo" : "<br><button>Asura</button>",
    "optionThree" : "<br><button class = 'correct'>Siren</button>", 
    "optionFour" : "<br><button>Brynhildr</button>",
    "answer" : "Siren",
    "gif" : '<div class="tenor-gif-embed" data-postid="7494654" data-share-method="host" data-width="100%" data-aspect-ratio="0.5763052208835341"><a href="https://tenor.com/view/finalfantasy-gif-7494654">Finalfantasy GIF</a> from <a href="https://tenor.com/search/finalfantasy-gifs">Finalfantasy GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>',
    "gifTime" : 5000
};





//Global variables
questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];
let questionIndex = 0;
let correctCount = 0; 
let incorrectCount = 0;
let questionAnswered = false;
let timer = 10;
let contentDiv = $('<div>');
let msgSpace = $('<p>');
let counterP = $('<p>');
let ffHeader = $('<h1>');
ffHeader.append('Final Fantasy Trivia');
let gifSpace = $('<div>');
 counterP.attr('id','countDown');
 msgSpace.attr('id','msg');
 gifSpace.attr('id','gifSpace');
contentDiv.append(ffHeader).append(counterP).append(msgSpace);


//Main process

 $(document).on('click', '#startGame', function() {

    ffAudio = new Audio("assets/mp3/oneWingedAngel.mp3");
    ffAudio.play();
    $('.container').css('background-color','rgba(173, 216, 230, 0.8)');
    $('.container').empty();
    $('#msg').empty();
    $('#gifSpace').empty().children().remove();
    $('.container').append(contentDiv).append(gifSpace);
 
        nextQuestion();
    
    
 });
 

 //functions

 function nextQuestion() {


if(questionIndex === questions.length) {
    endGame()
} else {

timer=10;
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

 $(document).on('click', 'button', function() {

     

     if( $(this).hasClass('correct') === true && questionAnswered === false ) {
         $('#msg').empty().append('That is correct!');
         correctCount += 1;
         $('#gifSpace').append(questions[questionIndex].gif);
         questionIndex += 1;
         clearInterval(timeVar);
         questionAnswered = true;
        
         if(questionIndex <= questions.length) {
            return setTimeout(nextQuestion, questions[questionIndex-1].gifTime);
         } else { 
            endGame();
         }
     }

     if( $(this).hasClass('correct') === false  && questionAnswered === false ) {
        $('#msg').empty().append('Incorrect! The correct answer is ' + questions[questionIndex].answer + '.');
        incorrectCount += 1;
        $('#gifSpace').append(questions[questionIndex].gif);
        questionIndex += 1;
        clearInterval(timeVar);
        questionAnswered = true;

        if(questionIndex <= questions.length) {
            return setTimeout(nextQuestion, questions[questionIndex-1].gifTime);
         } else { 
            endGame();
         }
        
    }

  

 });
}

}


function myTimer() {
timer = timer-1;
 $('#countDown').empty().append('Time remaining: ' + timer);

 if (timer <= 0) {
     clearInterval(timeVar);
   }

  }

function endGame() { 
   
    $('#gifSpace').empty();
    $('#countDown').append('<br>All done, heres how you did!')
    $('#msg').empty().append('Correct Answers: ' + correctCount );
    $('#msg').append('<br>Incorrect Answers: ' + incorrectCount);
    $('#msg').append('<br>Unanswered: ' + (questions.length - incorrectCount - correctCount));
    startOver = $('<button>');
    startOver.attr('id','restartGame');
    startOver.append('Start Over?');
    $('#msg').append(StartOver);
    $(document).on('click', '#restartGame', function() { restartGame()
    });

}

//Final Fantasy opener
//<div class="tenor-gif-embed" data-postid="11029638" data-share-method="host" data-width="100%" data-aspect-ratio="2.083682008368201"><a href="https://tenor.com/view/final-fantasy-gif-11029638">Final Fantasy GIF</a> from <a href="https://tenor.com/search/finalfantasy-gifs">Finalfantasy GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//Sephiroth gif
// <div class="tenor-gif-embed" data-postid="5802543" data-share-method="host" data-width="100%" data-aspect-ratio="1.3333333333333333"><a href="https://tenor.com/view/sephiroth-final-fantasy7-ff7-flames-burn-gif-5802543">Sephiroth Final Fantasy7 GIF</a> from <a href="https://tenor.com/search/sephiroth-gifs">Sephiroth GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//Sabin train suplex 
// <div class="tenor-gif-embed" data-postid="12127442" data-share-method="host" data-width="100%" data-aspect-ratio="1.1531531531531531"><a href="https://tenor.com/view/ffvi-suplex-sabin-train-phantom-train-gif-12127442">Ffvi Suplex GIF</a> from <a href="https://tenor.com/search/ffvi-gifs">Ffvi GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//Cactuar 
//<div class="tenor-gif-embed" data-postid="12386155" data-share-method="host" data-width="100%" data-aspect-ratio="1.0"><a href="https://tenor.com/view/cactuar-final-fantasy-ffs-gamer-gif-12386155">Cactuar Final Fantasy GIF</a> from <a href="https://tenor.com/search/cactuar-gifs">Cactuar GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//Yuna 
//<div class="tenor-gif-embed" data-postid="14602022" data-share-method="host" data-width="100%" data-aspect-ratio="1.7785714285714287"><a href="https://tenor.com/view/ffx-yuna-final-fantasy-x-dance-gif-14602022">Ffx Yuna GIF</a> from <a href="https://tenor.com/search/ffx-gifs">Ffx GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//Squall
//<div class="tenor-gif-embed" data-postid="12309258" data-share-method="host" data-width="100%" data-aspect-ratio="1.2835051546391754"><a href="https://tenor.com/view/final-fantasy8-rinoa-squall-ff8-funny-gif-12309258">Final Fantasy8 Rinoa GIF</a> from <a href="https://tenor.com/search/finalfantasy8-gifs">Finalfantasy8 GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//Final Fantasy 9
//<div class="tenor-gif-embed" data-postid="5548544" data-share-method="host" data-width="100%" data-aspect-ratio="1.326086956521739"><a href="https://tenor.com/view/alexandros-final-fantasy9-gif-5548544">Alexandros Final Fantasy9 GIF</a> from <a href="https://tenor.com/search/alexandros-gifs">Alexandros GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//Black Mage
//<div class="tenor-gif-embed" data-postid="11823290" data-share-method="host" data-width="100%" data-aspect-ratio="1.0"><a href="https://tenor.com/view/final-fantasy-wizard-magic-gif-11823290">Final Fantasy Wizard GIF</a> from <a href="https://tenor.com/search/finalfantasy-gifs">Finalfantasy GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//Lightning 
//<div class="tenor-gif-embed" data-postid="11068056" data-share-method="host" data-width="100%" data-aspect-ratio="1.711340206185567"><a href="https://tenor.com/view/final-fantasy-lightning-gif-11068056">Final Fantasy Lightning GIF</a> from <a href="https://tenor.com/search/finalfantasy-gifs">Finalfantasy GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>


//Rikku
//<div class="tenor-gif-embed" data-postid="14806446" data-share-method="host" data-width="100%" data-aspect-ratio="1.693877551020408"><a href="https://tenor.com/view/rikku-how-you-doing-final-fantasy-x-gif-14806446">Rikku How You Doing GIF</a> from <a href="https://tenor.com/search/rikku-gifs">Rikku GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>


});
