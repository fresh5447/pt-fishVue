// this is a constructor function
function Fish(name, color, freshWater, img) {
  this.name = name;
  this.color = color;
  this.freshWater;
  this.img = img;
};

// all Fish will now have access to a getInfo method
Fish.prototype.getInfo = function(){
  return "My name is " + this.name;
};

var fishy  = new Fish("nemo", "orange", false, "https://www.takemefishing.org/tmf/assets/images/fish/american-shad-464x170.png");
var fishy2 = new Fish("skipjack tuna", "blue", true, "https://www.takemefishing.org/tmf/assets/images/fish/bigmouth-buffalo-464x170.png");
var fishy3 = new Fish("gold fish", "yellow", false, "http://pngimg.com/uploads/fish/fish_PNG10538.png");
var fishy4 = new Fish("red tail catfish", "red", true, "http://www.firstaidforfree.com/wp-content/uploads/2015/02/FISHSHAPED.png");
var fishy5  = new Fish("nemo", "orange", false, "https://www.takemefishing.org/tmf/assets/images/fish/american-shad-464x170.png");
var fishy6 = new Fish("skipjack tuna", "blue", true, "https://www.takemefishing.org/tmf/assets/images/fish/bigmouth-buffalo-464x170.png");
var fishy7 = new Fish("gold fish", "yellow", false, "http://pngimg.com/uploads/fish/fish_PNG10538.png");
var fishy8 = new Fish("red tail catfish", "red", true, "http://www.firstaidforfree.com/wp-content/uploads/2015/02/FISHSHAPED.png");

var allFish = [fishy, fishy2, fishy3, fishy4, fishy5, fishy6, fishy7, fishy8];

console.log(allFish[0]);

var fishVue = new Vue({
  'el': '#fish',
  'data': {
    fish: allFish[0],
    allFish: allFish
  }
});
