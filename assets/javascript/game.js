

var targetNumber;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;
var workingTotal = 0;
var wins = 0;
var losses = 0;


//randomly generated number
function init() { //
    workingTotal = 0;
    $("#workingTotal").text(workingTotal);
    targetNumber = Math.ceil((Math.random() * 102)) +18;
    $("#targetNumber").text(targetNumber);  //target number

    crystalValue1 = Math.ceil((Math.random() * 12)); //assigns random value to varible NOT button

    crystalValue2 = Math.ceil((Math.random() * 12));

    crystalValue3 = Math.ceil((Math.random() * 12));

    crystalValue4 = Math.ceil((Math.random() * 12));

    $("#wins").text(wins);
    $("#losses").text(losses);
}
//wins and losses iterator
//crystal image buttons with random generating number each
init();

function updateWorkingTotal(addedValue) {
    workingTotal+=addedValue;
    $("#workingTotal").text(workingTotal);
    console.log(addedValue);
    console.log(workingTotal);
    if (workingTotal === targetNumber) {
        wins++;
        $("#end-message").text("You win!!!");
        init ();
    }
    else if (workingTotal > targetNumber ) {
        losses++;
        $("#end-message").text("You lose!!!");
        init ();
    }
}

  


$("#crystal-1").on("click", function () {
    updateWorkingTotal(crystalValue1);
    
})

$("#crystal-2").on("click", function () {
    updateWorkingTotal(crystalValue2);
    
})

$("#crystal-3").on("click", function () {
    updateWorkingTotal(crystalValue3);
    
})

$("#crystal-4").on("click", function () {
    updateWorkingTotal(crystalValue4);
    
})




//total score number display taking values from the buttons and adding them together.