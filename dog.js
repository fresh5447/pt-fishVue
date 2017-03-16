
// console.log(fishy.getInfo());
// console.log(fishy2.getInfo());

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function(){
  return "BOWOWOWWOW  " + this.name + "  BOWOWOW";
}

var d1 = new Dog("Scooby", "Great Dane");
d1.bark();

// MAKE A CONSTRUCTOR FOR A DOG OBJECT
// DOG should have name and breed properties

// attach a bark method to the Dog constructor

// make one or two dogs and test your bark method

// SUCCESS shoot me a message
console.log("FOUND APP JS SCRRIPTTT");
