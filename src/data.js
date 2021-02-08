export default function Database() {
  this.colours= ["#red","#green","#purple","#blue","#yellow"];
  this.sequence = [];
  this.input = [];
}

Database.prototype.generateSequence=function() {
  let x;
    for(let i = 0; i < 100; i++) {
        x = this.colours[(Math.round(Math.random()*4))];
        this.sequence.push(x); 
    }
};

