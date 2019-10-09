var scalee,primes,count;
function setup() {
  createCanvas(800, 800);
  frameRate(20);
  count = 10;
  primes = generatePrimeList(count);
  scalee = 1/((count/height)*17);
}

function draw() {
  translate(width/2,height/2);
  background(0);
  stroke(255);
  
  scale(scalee);
  for (var i of primes){
    ellipse(cos(i/TWO_PI)*i,sin(i / (2*PI))*i,1/scalee);
  }
  count *= 1.1
  primes = generatePrimeList(count);
  scalee = 1/((count/height)*17);
}

function generatePrimeList(amount) {
var primes = [2];
var i = 3;
var x = 2;
while (primes.length < amount){
  while ((x < i) && ((i % x)!= 0)){
    x +=1;
  }
  if (i/x == 1){
    primes.push(i);
    console.log("Calculating")
    console.log(primes.length)
  }
  i++;
  x = 2;
}
return primes;
}

