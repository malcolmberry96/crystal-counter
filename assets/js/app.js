var random_result;
var lost = 0;
var win = 0;
var previous = 0;



var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
        'https://vignette.wikia.nocookie.net/steven-universe/images/c/c7/Right_Cheek_Amethyst_Gem.png/revision/latest?cb=20170202025940',
        'https://vignette.wikia.nocookie.net/steven-universe/images/4/4a/Sapphire_gem_-_Night.png/revision/latest?cb=20160227153354',
        'https://vignette.wikia.nocookie.net/steven-universe/images/3/33/Alexandrite_Chest_Gemstone_Day.png/revision/latest?cb=20160509023558',
        'https://vignette.wikia.nocookie.net/steven-universe/images/3/3a/RainbowQuartzGemRose.png/revision/latest?cb=20150618104603'];

    random_result = Math.floor(Math.random() * 69) + 30; ///number between 30-99

    $("#result").html('Random Result: ' + random_result);

    for(var i=0; i < 4; i++){
   
        var random = Math.floor(Math.random() * 11) + 1; ///numbers between 1-12
        //console.log(random);
     
        var crystals = $("<div>");
            crystals.attr({
                "class":'crystal',
                "data-random":random
        });
    
        crystals.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });


    $(".crystals").append(crystals);
   
    }

    $("#previous").html("Total Score: "+ previous)
}

resetAndStart();


// Event Delegation
$(document).on('click',".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total score: " + previous)

    console.log(previous);

    if(previous > random_result) {

        lost++;

        $("#lost").html("Loses: " + lost);

        previous = 0;

        resetAndStart();

    }
    else if(previous === random_result){

        win++;

        $("#win").html("Wins: " + win);


        previous = 0;

        resetAndStart();
    }

});


//Four crystal buttons that generate random numbers when clicked
//Each crystal needs a random number generated with every single click
//When clicking any crystal, the numbers should add with a previous result until it hits a max
//When you hit the targeted total score you win
//If the number equals total score app will generate a win
//If the number goes over total score app will generate a loss 
//Game resets after losing/winning 



