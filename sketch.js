let Wwidth = getWidth();
let wHeight = getHeight();
let heart;
let img;
let colors = [
  [255, 249, 152],
  [255, 152, 188],
  [216, 152, 255],
  [152, 196, 255],
  [152, 255, 168]
];
let count = 0;
let currentColor = 0;

let txtX = Wwidth + 100

function preload() {
  fabella = loadFont('fabella-flower.ttf');
}

function setup() {
  // put setup code here
  frameRate(30);
  createCanvas(Wwidth, wHeight);
  background(...colors[currentColor]);
  heart = loadImage('heart.png');
  img = loadImage('img.png');
  imagen = loadImage('imagen.png');
  textFont(fabella);
  textSize(125);
  textAlign(CENTER, CENTER);

}

function draw() {
  // put drawing code here
  background(...colors[currentColor]);
  noStroke();
  if(count > 70) {
    count = 0;
    currentColor++;
    if(currentColor > 4) {
      currentColor = 0;
    }
  }
  
  tint(...colors[currentColor]);
  //image(heart, getRandomInt(-100,Wwidth-50), getRandomInt(-100, wHeight-50));
  
  image(img, Wwidth/2 - 256, wHeight/2 - 256);
  fill(0,0,0);
  text('Te Amo Vanessita', Wwidth/2, 95);
  text('Te Amo', txtX, wHeight - 100);
  txt--;
  count++;
}

/*
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
*/

function getWidth() {
  if (self.innerWidth) {
    return self.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
}

function getHeight() {
  if (self.innerHeight) {
    return self.innerHeight;
  }

  if (document.documentElement && document.documentElement.clientHeight) {
    return document.documentElement.clientHeight;
  }

  if (document.body) {
    return document.body.clientHeight;
  }
}