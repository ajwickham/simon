function Database() {
  this.colours= ["#red","#green","#purple","#blue","#yellow"];
  this.sequence = [];
  this.input = [];
}

let data = new Database();
let x;
let y;
Database.prototype.generateSequence=function() {
    for(let i = 0; i < 100; i++) {
        x = this.colours[(Math.round(Math.random()*4))];
        this.sequence.push(x); 
    }
};

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
}

//showSequence()

Database.prototype.playRound = function(guess) {
  this.input.push(guess)
  lightUp(guess);
  let i;
};
//data.playRound();


$(document).ready(function() {
  $("#button").click(function() {
    nextInSequence();
  });
  $("#red").click(function() {
    data.playRound("#red");
  });
  $("#green").click(function() {
    data.playRound("#green");
  });
  $("#purple").click(function() {
    data.playRound("#purple");
  });
  $("#blue").click(function() {
    data.playRound("#blue");
  });
  $("#yellow").click(function() {
    data.playRound("#yellow");
  });
});