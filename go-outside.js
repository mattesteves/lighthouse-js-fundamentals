var raining =true;
var cold = false;
var temperature=12;
var isCitizen=true;
var age=33;


if (raining) {
  console.log("Dont forget your umbrella!");
}

if (temperature < 0){
  console.log("Makr sure you pick out a scarf!");
} else if(temperature <15) {
  console.log("Short sleeves won't cut it.");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

if (isCitizen && age >18) {
  console.log("You are eligible to vote.");
}

if (temperature <-40 || temperature >40){
  console.log("Maybe going outside isn't such a great idea.")
}

if (!raining){
  console.log("Leave your umbrella at home");
}