const topSecret = str => {
    let chars = str.split('');
  
    for (let i = 0; i < chars.length; i += 1) {
      if (chars[i].match(/[abc]/gi) 
      ) {
        chars[i] = String.fromCharCode(chars[i].charCodeAt() + -3 + 26);
      }  else if (chars[i].match(/[!"#$%&'()+,-./0123456789:;<=>?@]/g)) {
        chars[i] = String.fromCharCode(chars[i].charCodeAt());
      } else {
        chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3);
      }
    }
    return chars.join('');
  };




  console.log((topSecret("Pb qdph lv Mrkq"))); //"My name is John"
  console.log((topSecret("wklv lv dq hadpsoh")))  //"this is an example";
  console.log((topSecret("Khoor Zruog!"))); // "Hello World"


//   const topSecret = str =>{
//     let chars = str.split('');
//     for(let i = 0; i < chars.length; i += 1){
//         if(chars[i] === /[a-z]/gi){
//             chars[i] = String.fromCharCode(chars[i].charCodeAt()+ - 3 + 26)
//         }else if(chars[i] === ' '){
//             chars[i] === ' ';
//         }else if(chars[i] === '\n'){
//             chars[i] === '\n'
//         } else if(chars[i].match(/[!"#$%&'()+,-./01 23\n456789:;<=>?@]/g)){
//             chars[i] = String.fromCharCode(chars[i].charCodeAt())
//         }else if(chars[i] === 'y'){
//           chars[i] === 'y'
//         }else if(chars[i] === '^'){
//           chars[i] === '^'
//         }
//         else{
//             chars[i] = String.fromCharCode(chars[i].charCodeAt() - 3)
//         }
//     }
//     return chars.join('');
//   }