let num=parseInt(Math.random()*100+1);
console.log(num);
const button=document.getElementById("btn");
const player_guess=document.getElementById("guess");
const previous_guess=document.querySelector(".guesses");
const rem_attempts=document.querySelector(".result");
const range=document.querySelector(".range");
const details=document.querySelector(".inner");

const p=document.createElement("p");
let guess_array=[];
let attempts=1;
let play=true;
if(play){
    button.addEventListener("click",(e)=>{
        e.preventDefault();
        const value=parseInt(player_guess.value);
        validate(value);

    });

}
const validate=(guess)=>{
    if(isNaN(guess)){
        alert("Enter a valid number");
        player_guess.value="";
    }
    else if(guess<1||guess>100){
        alert("Please enter the number within the range");
        player_guess.value="";
    }
    else{
        guess_array.push(guess);
        if(attempts===11){
            displayGuess(guess);
            display_msg(`Game Over.Number was ${num}`);
            end_game();
        }
        else{
            check(guess);
            displayGuess(guess);
        }
    }

}
const check=(guess)=>{
    if(guess===num){
        display_msg("You got it!Congratulations🎉");
        end_game();
    }
    else if(guess<num){
        display_msg("Number is too low");
    }
    else if(guess>num){
        display_msg("Number is too high");
    }

}
function display_msg(msg){
    range.innerHTML=`<h2>${msg}</h2>`

}
function displayGuess(guess){
    player_guess.value="";
    previous_guess.innerHTML+=`${guess},`;
    attempts++;
    rem_attempts.innerHTML=`${11-attempts}`;
}
function end_game(){
    player_guess.value="";
    player_guess.setAttribute("disabled",'');
    p.classList.add('button');
    p.innerHTML=`<h2 id="new_game">New Game</h2>`;
    details.appendChild(p);
    play=false;
    newGame();
}
function newGame(){
    const new_btn=document.querySelector("#new_game");
    new_btn.addEventListener("click",(e)=>{
        num=parseInt(Math.random()*100+1);
        guess_array=[];
        attempts=1;
        previous_guess.innerHTML="";
        rem_attempts.innerHTML=`${11-attempts}`;
        player_guess.removeAttribute('disabled');
        details.removeChild(p);
        range.innerHTML="";
        play=true;
    });
}
