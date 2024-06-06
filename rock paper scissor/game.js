const rock=document.querySelector(".Rock");
const paper=document.querySelector(".Paper");
const scissor=document.querySelector(".Scissor");
const start=document.querySelector(".start");
const container=document.querySelector(".container");
const first_message=document.querySelector(".first_message");
const result=document.querySelector(".result");
const remain_message=document.querySelector(".remain")
let remain=0;
let computer=0;
let player=0;
let rand;



start.addEventListener("click",function(e){
  first_message.innerHTML="Choose One";
  first_message.style.color="black";
  result.innerHTML="Make First Move";
  result.style.color="black";
  remain=11;
  container.style.backgroundColor="grey";
  container.removeChild(start);
  remain_message.innerHTML=`Remaining Time::${remain}`;
  player=0;
  computer=0;
});



rock.addEventListener("click",function(e){
  if(remain==0)
    return;
  rand = (Math.floor(Math.random() * 100) + 1)%3;
  if(rand==0){
    result.innerHTML="Computer Chose Rock";
    result.style.color="black";
  }else if(rand==1){
      result.innerHTML="Computer Chose Paper";
      computer++;
      result.style.color="red";
  }
  else{
    result.innerHTML="Computer Chose Scissor";
    player++;
    result.style.color="green";
  }
  remain--;
  remain_message.innerHTML=`Remaining Time::${remain}`;
  if(remain==0)
    endgame();
});



paper.addEventListener("click",function(e){
  if(remain==0)
    return;
  rand = (Math.floor(Math.random() * 100) + 1)%3;
  if(rand==0){
    result.innerHTML="Computer Chose Rock";
    player++;
    result.style.color="green";
  }else if(rand==1){
      result.innerHTML="Computer Chose Paper";
      result.style.color="black";
  }
  else{
    result.innerHTML="Computer Chose Scissor";
    computer++;
    result.style.color="red";
  }
  remain--;
  remain_message.innerHTML=`Remaining Time::${remain}`;
  if(remain==0)
    endgame();
});



scissor.addEventListener("click",function(e){
  if(remain==0)
    return;
  rand = (Math.floor(Math.random() * 100) + 1)%3;
  if(rand==0){
    result.innerHTML="Computer Chose Rock";
    computer++;
    result.style.color="red";
  }else if(rand==1){
      result.innerHTML="Computer Chose Paper";
      player++;
      result.style.color="green";
  }
  else{
    result.innerHTML="Computer Chose Scissor";
    result.style.color="black";
  }
  remain--;
  remain_message.innerHTML=`Remaining Time::${remain}`;
  if(remain==0)
    endgame();
});



function endgame(){
  result.innerHTML="";
  if(player>computer){
    first_message.innerHTML="Hurrah,You Won!!!";
    first_message.style.color="green";
    container.style.backgroundColor="yellow";
    result.innerHTML=`${player} : ${computer}`;
  }
  else if(player<computer){
    first_message.innerHTML="Ooops,You Lost!!!";
    first_message.style.color="red";
    container.style.backgroundColor="skyblue";
    result.innerHTML=`${player} : ${computer}`;
  }
  else{
    first_message.innerHTML="Draw!!!";
    first_message.style.color="black";
    container.style.backgroundColor="yellow";
    result.innerHTML=`${player} : ${computer}`;
  }
  container.appendChild(start);
  remain_message.innerHTML="";

};