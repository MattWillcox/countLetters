function countLetters(input){
  var result = {};

  for (var i = 0; i < input.length; i++){
      if(input.charAt(i) !== ' '){
      if(result[input.charAt(i)] === undefined)
        result[input.charAt(i)] = 1;
      else
        result[input.charAt(i)] += 1;
    }
  }
  console.log(result);
}

countLetters("lighthouse in the house")