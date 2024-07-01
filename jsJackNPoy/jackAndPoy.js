const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const rock = document.getElementById("bato");
const paper = document.getElementById("papel");
const scissor = document.getElementById("gunting");
let home = document.getElementsByClassName("home");
let play = document.getElementsByClassName("play_btn")[0].onclick =

function(){
  result.style.visibility = "hidden";
  imagePick1.setAttribute("src", "");
  imagePick2.setAttribute("src", "");
  player.append(imagePick1);
  computer.append(imagePick2);
  document.getElementById("score_player").innerText = 0;
  document.getElementById("score_computer").innerText = 0;
  home[0].style.display = "none"
};
//create image
let imagePick1 = document.createElement("img");
let imagePick2 = document.createElement("img");
let playerPick = "";
let computerPick = "";
let playerScore = 0;
let computerScore = 0;
rock.addEventListener("click", rocks);
paper.addEventListener("click", papers);
scissor.addEventListener("click", scissors);
//functionality
function rocks(){
    playerPick = "rock";
    imagePick1.setAttribute("src", "../../../Image/rock.png");
    imagePick1.setAttribute("width", "80px");
    player.append(imagePick1);
    computerBrain();
    setTimeout(resulta, 2000);
}
function papers(){
    playerPick = "paper";
    imagePick1.setAttribute("src", "../../../Image/paper.png");
    imagePick1.setAttribute("width", "80px");
    player.append(imagePick1);
    computerBrain();
    setTimeout(resulta, 2000);
}
function scissors(){
    playerPick = "scissor";
    imagePick1.setAttribute("src", "../../../Image/scissors.png");
    imagePick1.setAttribute("width", "90px");
    player.append(imagePick1);
    computerBrain();
    setTimeout(resulta, 2000);
}
//computer
function compRocks(){
  computerPick = "rock";
  imagePick2.setAttribute("src", "../../../Image/rock.png");
  imagePick2.setAttribute("width", "80px");
  computer.append(imagePick2);
}
function compPapers(){
  computerPick ="paper";
  imagePick2.setAttribute("src", "../../../Image/paper.png");
  imagePick2.setAttribute("width", "80px");
  computer.append(imagePick2);
}
function compScissors(){
  computerPick = "scissor";
  imagePick2.setAttribute("src", "../../../Image/scissors.png");
  imagePick2.setAttribute("width", "80px");
  computer.append(imagePick2);
}
//computerBrain
function computerBrain()
{
  let brain = Math.floor((Math.random() * 3) + 1);
  switch(brain){
    case 1:
      setTimeout(compRocks, 2000);
      break;
    case 2:
      setTimeout(compPapers, 2000);
      break;
    case 3:
      setTimeout(compScissors, 2000);
      break;
  }
}
function resulta(){
  if(playerPick == computerPick){
    result.innerText = "DRAW PICK AGAIN!"
    result.style.visibility = "visible";
    setTimeout(()=>{result.style.visibility = "hidden";},1000);
  }
  else if(playerPick == "rock" && computerPick == "scissor" || playerPick == "paper" && computerPick == "rock" || playerPick == "scissor" && computerPick == "paper"){
    document.getElementById("score_player").innerText = ++playerScore;

    if(playerScore == 5){
      result.innerText = "YOU WIN!"
      result.style.visibility = "visible";
      setTimeout(()=>{
                      home[0].style.display = "block";
                      home[0].style.width = "100%";
                      home[0].style.height = "100vh";}, 2000);
                      playerScore = 0;
    }
  }
  else{
    document.getElementById("score_computer").innerText = ++computerScore;
    if(computerScore == 5){
      result.innerText ="You lose!";
      result.style.visibility = "visible";
      setTimeout(()=>{
                      home[0].style.display = "block";
                      home[0].style.width = "100%";
                      home[0].style.height = "100vh";}, 2000);
                      computerScore = 0;
    }
  }
}
