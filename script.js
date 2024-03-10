let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");


let body = document.querySelector("body");
let demo = document.querySelector("#demo");
let userPick;
let userRock = 0;
let userPaper = 0;
let userScissors = 0;
let choice = Math.floor(Math.random() * 3);

let output = document.createElement("p");

function computersChoice() {

    if (choice === 0) {
        output.textContent = "Computer chose rock";
    } else if (choice === 1) {
        output.textContent = "Computer chose Paper";
    } else {
        output.textContent = "Computer chose Scissors";
    }
    body.appendChild(output);
}

rock.addEventListener("click", function(){
    userRock += 1;
    console.log(userRock);
    computersChoice();
    resultProcess();
});

paper.addEventListener("click", function(){
    userPaper += 1;
    console.log(userPaper);
    computersChoice();
    resultProcess();
});

scissors.addEventListener("click", function(){
    userScissors += 1;
    console.log(userScissors);
    computersChoice();
    resultProcess();
});


let result = document.createElement("p");

function resultProcess(){

    if(userRock > 0  && choice == 0){
        result.textContent = "Tie";
    }
    else if(userRock > 0 && choice == 1){
        result.textContent = "You Lose!";
    }
   else if(userRock > 0 && choice == 2){
    result.textContent = "you win!";
   }
    else if(userPaper > 0 && choice == 0){
    result.textContent = "You Win";
   }
    else if(userPaper > 0 && choice == 1){
    result.textContent = "Tie";
   }
   else if(userPaper > 0 && choice == 2){
    result.textContent = "You lose";
   }
   else if(userScissors > 0 && choice == 0){
    result.textContent = "You Lose";
   }
   else if(userScissors > 0 && choice == 1){
    result.textContent = "You Win";
   }
   else if(userScissors > 0 && choice == 2){
    result.textContent = "You Tie";
   }
   else{
    result.textContent = "Error";
   }
   
    
    body.appendChild(result);
    
}



// rock.addEventListener("click", function(){
//     console.log("Hi");
//     demo.innerText = "Rock clicked";
// })