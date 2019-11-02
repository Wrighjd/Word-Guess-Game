

let numWins = 0, numLosses = 0;
let guesses_array, guesses_string, numTriesLeft;



function startNewGame() {
    
    answer = String.fromCharCode(Math.floor(26 * Math.random()) + 97);


    $("#answer").text(answer);

    
    guesses_array  = [];
    guesses_string = "";
    numTriesLeft   = 10;

  
    $("#numWins").text(numWins);
    $("#numLosses").text(numLosses);
    $("#numTriesLeft").text(numTriesLeft);
    $("#guesses").text(guesses_string);
}

$(document).ready(function() {
    startNewGame();

    
    
    $(document).on("keypress", event => {
       
        const yourGuess = String.fromCharCode(event.which).toLowerCase();

        if ("a" <= yourGuess && yourGuess <= "z") {
           
            if (!guesses_array.includes(yourGuess)) {
                numTriesLeft--;

                $("#numTriesLeft").text(numTriesLeft);
                
               
                guesses_array.push(yourGuess);
                guesses_string += yourGuess;

                $("#guesses").text(guesses_string);

                
                if (yourGuess === answer) {
                    numWins++;

                    startNewGame();

                
                } else if (numTriesLeft === 0) {
                    numLosses++;

                    startNewGame();

                }
            }
        }
    });
});