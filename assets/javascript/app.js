$(document).ready(function() {

////////////////////////
//Questions as Objects//
////////////////////////




var questionOne = {
    "text" : "Which iconic villain aimed to become a god by merging with the lifestream of the planet?",
    "optionOne" : '<br><button>Golbez</button>',
    "optionTwo" : "<br><button>Kefka</button>",
    "optionThree" : "<br><button class = 'correct'>Sephiroth</button>", 
    "optionFour" : "<br><button>Halicarnassus</button>",
    "answer" : "Sephiroth",
    "gif" : '<div class="tenor-gif-embed" data-postid="5802543" data-share-method="host" data-width="100%" data-aspect-ratio="1.3333333333333333"><a href="https://tenor.com/view/sephiroth-final-fantasy7-ff7-flames-burn-gif-5802543">Sephiroth Final Fantasy7 GIF</a> from <a href="https://tenor.com/search/sephiroth-gifs">Sephiroth GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>'
};



var questionTwo = {
    "text" : "This iconic villain aimed to become a god by merging with the lifestream of the planet.  One  minor detail this requires smashing a meteor into the planet",
    "optionOne" : '<button>1</button>',
    "optionTwo" : "<button>2</button>",
    "optionThree" : "<button class = 'correct'>3</button>", 
    "optionFour" : "<button>4</button>",
    "gif" : '<div class="tenor-gif-embed" data-postid="5802543" data-share-method="host" data-width="100%" data-aspect-ratio="1.3333333333333333"><a href="https://tenor.com/view/sephiroth-final-fantasy7-ff7-flames-burn-gif-5802543">Sephiroth Final Fantasy7 GIF</a> from <a href="https://tenor.com/search/sephiroth-gifs">Sephiroth GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>'
};


var questionThree = {
    "text" : "This iconic villain aimed to become a god by merging with the lifestream of the planet.  One  minor detail this requires smashing a meteor into the planet",
    "optionOne" : '<button>Golbez</button>',
    "optionTwo" : "<button>Kefka</button>",
    "optionThree" : "<button class = 'correct'>Sephiroth</button>", 
    "optionFour" : "<button>Halicarnassus</button>",
    "gif" : '<div class="tenor-gif-embed" data-postid="5802543" data-share-method="host" data-width="100%" data-aspect-ratio="1.3333333333333333"><a href="https://tenor.com/view/sephiroth-final-fantasy7-ff7-flames-burn-gif-5802543">Sephiroth Final Fantasy7 GIF</a> from <a href="https://tenor.com/search/sephiroth-gifs">Sephiroth GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>'
};

var questionFour = {
    "text" : "This iconic villain aimed to become a god by merging with the lifestream of the planet.  One  minor detail this requires smashing a meteor into the planet",
    "optionOne" : '<button>Golbez</button>',
    "optionTwo" : "<button>Kefka</button>",
    "optionThree" : "<button class = 'correct'>Sephiroth</button>", 
    "optionFour" : "<button>Halicarnassus</button>",
    "gif" : '<div class="tenor-gif-embed" data-postid="5802543" data-share-method="host" data-width="100%" data-aspect-ratio="1.3333333333333333"><a href="https://tenor.com/view/sephiroth-final-fantasy7-ff7-flames-burn-gif-5802543">Sephiroth Final Fantasy7 GIF</a> from <a href="https://tenor.com/search/sephiroth-gifs">Sephiroth GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>'
};




//Global variables
questions = [questionOne, questionTwo, questionThree, questionFour];
questionIndex = 0;
correctCount = 0; 
let questionAnswered = false;
let timer = 30;
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


    $('.container').css('background-color','lightblue');
    $('.container').empty();
    $('#msg').empty();
    $('#gifSpace').empty().children().remove();
    $('.container').append(contentDiv).append(gifSpace);
    x();
    
 });
 

 //functions

 let x = function nextQuestion() {

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
         questionIndex += 1;
         $('#gifSpace').append(questions[questionIndex].gif);
         clearInterval(timeVar);
         questionAnswered = true;
         
     }

     if( $(this).hasClass('correct') === false  && questionAnswered === false ) {
        $('#msg').empty().append('Incorrect! The correct answer is ' + questions[questionIndex].answer + '.');
        questionIndex += 1;
        $('#gifSpace').append(questions[questionIndex].gif);
        clearInterval(timeVar);
        questionAnswered = true;
        
    }

    if(questionAnswered === true && questionIndex < questions.length) {
        return setTimeout(x, 2000);
    }

 });

}



function myTimer() {
timer = timer-1;
 $('#countDown').empty().append('Time remaining: ' + timer);

 if (timer <= 0) {
     clearInterval(timeVar);
   }

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

//Rikku
//<div class="tenor-gif-embed" data-postid="14806446" data-share-method="host" data-width="100%" data-aspect-ratio="1.693877551020408"><a href="https://tenor.com/view/rikku-how-you-doing-final-fantasy-x-gif-14806446">Rikku How You Doing GIF</a> from <a href="https://tenor.com/search/rikku-gifs">Rikku GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//Squall
//<div class="tenor-gif-embed" data-postid="12309258" data-share-method="host" data-width="100%" data-aspect-ratio="1.2835051546391754"><a href="https://tenor.com/view/final-fantasy8-rinoa-squall-ff8-funny-gif-12309258">Final Fantasy8 Rinoa GIF</a> from <a href="https://tenor.com/search/finalfantasy8-gifs">Finalfantasy8 GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//Final Fantasy 9
//<div class="tenor-gif-embed" data-postid="5548544" data-share-method="host" data-width="100%" data-aspect-ratio="1.326086956521739"><a href="https://tenor.com/view/alexandros-final-fantasy9-gif-5548544">Alexandros Final Fantasy9 GIF</a> from <a href="https://tenor.com/search/alexandros-gifs">Alexandros GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//Black Mage
//<div class="tenor-gif-embed" data-postid="11823290" data-share-method="host" data-width="100%" data-aspect-ratio="1.0"><a href="https://tenor.com/view/final-fantasy-wizard-magic-gif-11823290">Final Fantasy Wizard GIF</a> from <a href="https://tenor.com/search/finalfantasy-gifs">Finalfantasy GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

//Lightning 
//<div class="tenor-gif-embed" data-postid="11068056" data-share-method="host" data-width="100%" data-aspect-ratio="1.711340206185567"><a href="https://tenor.com/view/final-fantasy-lightning-gif-11068056">Final Fantasy Lightning GIF</a> from <a href="https://tenor.com/search/finalfantasy-gifs">Finalfantasy GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

});
