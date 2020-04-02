function sweepstakes(option){
  if (option == 1){
    return "No prize here. You have one more try";
  }
  else if (option == 2){
    return "You owe $1000.";
  }
  else if (option == 3){
    return "You win a cruise ship ride to Wuhan, China!";
  }
  else if (option == 4){
    return "You just won the Danimals sweepstakes. You get to spend the day with Zack & Cody.";
  }
  else {
      return "Honestly just hang yourself.";
  }
}

console.log(option(1));
console.log(option(2));
console.log(option(3));
console.log(option(4));
console.log(option(5));
