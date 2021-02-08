import './css/styles.css';
import Database from './data.js';

let data = new Database();

let y;
data.generateSequence();

let index =0;
let count = -1;

function nextInSequence() {
  count ++;
  index = 0;
  data.input = [];
  showSequence();
};

function showSequence() {  //for some reason setTimeout won't work with prototype methods
  $(data.sequence[index]).removeClass("dull"); 
  setTimeout(showSub,1000);
};

function showSub()  {
  $(data.sequence[index]).addClass("dull");
  if(index < count) {
    index +=1
    setTimeout(showSequence,1000);
  }
};

function lightUp(guess) {
  $(guess).removeClass("dull");
  setTimeout(lightSub,1000);
}

function lightSub() {
  
  $(data.input[data.input.length -1]).addClass("dull");
  let i;
  for (i=0; i<data.input.length; i++) {
    if(data.sequence[i] != data.input[i]) {
      break;
    }  
  }
  if(i < data.input.length){
    for (i=0; i<data.colours.length; i++) {
      $(data.colours[i]).removeClass("dull");
    }
  }
};

function playRound(guess) {
  data.input.push(guess)
  lightUp(guess);
};

$(document).ready(function() {
  $("#button").click(function() {
    nextInSequence();
  });
  $("#red").click(function() {
    playRound("#red");
  });
  $("#green").click(function() {
    playRound("#green");
  });
  $("#purple").click(function() {
    playRound("#purple");
  });
  $("#blue").click(function() {
    playRound("#blue");
  });
  $("#yellow").click(function() {
    playRound("#yellow");
  });
});