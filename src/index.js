const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let string = '';
    let morse = [];

    let arr = expr.match(/.{1,10}/g);
    for (let item of arr) {
      let arrWithout0 = item.replace(/^0+/, '').split(' ');
       for (let value of arrWithout0) {
        string = value.replace(/10/g, '.').replace(/11/g, '-').replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');  
      } 
      morse.push(string); 
    }

   let result = '';
    result = morse.map((item) => {
    if (item === ' ') {
        return ' ';
    } else {
       return MORSE_TABLE[item];
    }
  });
  return result.join('');
  }

module.exports = {
    decode
};