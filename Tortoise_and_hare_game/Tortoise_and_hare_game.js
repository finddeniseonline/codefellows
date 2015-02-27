var race = document.getElementById('play');
var exitRace = document.getElementById('exit');
exitRace.onclick = close;
race.onclick = runRace;
//var run = function run() {
var Animal = function(n, s, f) {
  this.name = n;
  this.speed = s;
  this.focus = f;
  this.position = 0;
  this.report = function() {
    return this.name + " is at " + this.position;
  };

  this.run = function() {
    if (this.focus > (Math.random() * 10)) {
      this.position += this.speed;
    }
  };
};

var turtle = new Animal("Tortoise", 8, 4),
    rabbit = new Animal("Hare", 2, 8);

var distance = 25;
var luckyOne;

function runRace() {
    while ( (turtle.position < distance) && (rabbit.position < distance) ) {
      turtle.run();
      rabbit.run();
      console.log(turtle.report());
      console.log(rabbit.report());
    }

    }

    if (turtle.position > rabbit.position) {
      luckyOne = turtle.name;
      console.log("I am slow but steady, and I beat you!");
    } else {
      luckyOne = rabbit.name;
      console.log("I am swift and easily distracted, but I beat you!");
    }
  
    function close() {
       exitRace = window.close;
      // if (confirm("Close Window?")) {
    close();
 }
    alert(luckyOne + " is the winner!");
