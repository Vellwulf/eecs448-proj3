
//Scrabble distribution
//A-9, B-2, C-2, D-4, E-12, F-2, G-3, H-2, I-9, J-1, K-1, L-4, M-2, N-6, O-8, P-2, Q-1, R-6, S-4, T-6, U-4, V-2, W-2, X-1, Y-2, Z-1
function letters(){
    var result           = '';
    var characters       = 'AAAAAAAAABBCCDDDDEEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRRSSSSTTTTTTUUUUVVWWXYYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result);

    let container = document.getElementById("randoLetters");
    container.textContent=result;
}


var userInput = '';
function validLetters() {
    var letters = '';
    
    let container1 = document.getElementById("randoLetters");
    let container2 = document.getElementById("inputWord");
    let container3 = document.getElementById("result");
    userInput = container2.value.toUpperCase();
    letters = container1.textContent;

    var match;
    for (var i = 0; i < userInput.length; i++) {
        match = true;
        for (var j = 0; j < letters.length; j++) {
            if (userInput.charAt(i) == letters.charAt(j)) {
                //remove jth letter from list
                letters = letters.slice(0, j) + letters.slice(j+1, letters.length);
                match = true;
                break;
            }
            else {
                match = false;
            }
        }
        if(!match){
            break;
        }
    }
    container3.textContent=match;
    console.log(match);
    lengthChecker();
}

function lengthChecker()
{
let longest =0;
let LongWord;
if (userInput.length > longest)
{
    longest = userInput.length;
    LongWord = userInput;
    console.log(longest);
}
return longest;
}



function startTimer()
 {
    var timeleft = 15;
    var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Finished";
    } else {
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
    }, 1000);
 }