'use strict';

function high(x){
  let stringArray = x.split(' ');
  let highScore = 0;
  let topWord = '';
  stringArray.forEach(word => {
    let wordScore = 0;
    for (let i = 0; i < word.length; i++) {
      wordScore += word.charCodeAt(i) - 96;
    }
    if (wordScore > highScore) {
      highScore = wordScore;
      topWord = word;
    }
  });
  return topWord;
}