let petla;
let w;


function setup() {
  createCanvas(400,400);
petla = new Petla();
frameRate(5);
w = width / 20;
milo = new miloClass();
milo.pickLocation();
}



function draw() {
background(200);
petla.show();
petla.crawl();
petla.telep();
petla.Lose();
milo.show();
if(petla.isFoodPicked(milo)){
milo.pickLocation();
}
}


function Petla(){
this.x = 200;
this.y = 200;
this.speedx=0;
this.speedy=0;
this.food = 0;
this.tail=[];

this.show = function() {
  rect(this.x,this.y,w,w);

for (let i = 0; i < this.tail.length; i++){
  rect(this.tail[i].x,this.tail[i].y,w,w);
}
};

this.crawl = function(){
for (let i = 0; i < this.tail.length - 1; i++){
this.tail[i] = this.tail [i + 1];
}

this.tail[this.food - 1] = {
  x: this.x,
  y:this.y,
};

this.x+=this.speedx * w;
this.y+=this.speedy * w;

};

this.direction = function(dirX,dirY){
this.speedx= dirX;
this.speedy= dirY;
};

this.telep = function(){
if(this.x < 0){this.x=width-w;}
if(this.x > 400){this.x=0;}
if(this.y < 0){this.y=width-w;}
if(this.y > 400){this.y=0;}
};


this.isFoodPicked = function(other) {
if(this.x === other.x && this.y === other.y){
this.food+=1;
return true;
}
return false;
};
this.Lose = function () {
  for (let i = 0; i < this.tail.length - 1; i++){
if(this.x == this.tail[i].x)
{
  if(this.y == this.tail[i].y){
    this.x = 200;
    this.y = 200;
    this.speedx=0;
    this.speedy=0;
    this.food = 0;

}
}
}


}}
function keyPressed() {
if(keyCode === UP_ARROW) {
petla.direction(0,-1);
}
if(keyCode === LEFT_ARROW) {
petla.direction(-1,0);
}
if(keyCode === DOWN_ARROW) {
  petla.direction(0,1);
}
if(keyCode === RIGHT_ARROW) {
    petla.direction(1,0);
};
}


function miloClass() {
  this.x = 0;
  this.y = 0;
  let rows = width / w;
  let cols = width / w;

  this.pickLocation = function(){
    this.x = w * int(random(cols));
    this.y = w * int (random(rows));
  };

  this.show = function() {
    fill("#FF0D9f");
    rect(this.x,this.y,w,w);
  };
}
