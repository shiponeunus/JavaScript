

var wordArray = ["Shoes are", "Shirt is", "Hat is", "Jacket is", "Pants are"];
var positionArray = ["next to", "on top of", "in front of", "below the", "behind the"];
var objectArray = ["the kitchen.", "the closet.", "the bathroom.", "the desk.", "the dungeon."];
var randomIndex = Math.floor( Math.random() * wordArray.length );
console.log(randomIndex);
//// Random item from array using our random index
console.log(wordArray[randomIndex] + positionArray[randomIndex] + objectArray[randomIndex]);
