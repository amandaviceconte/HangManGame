// 
let word = '';

const getWord = () => {
  
}

const createLetters = () => {
  for(let i = 0; i < word.length; i++) {
    let letter = word[i];
    $('.word').append(`<td class="letter">${letter}</td>`);
  }
}

createLetters();