// function cutCube(volume,n){
//     return Number.isInteger(Math.cbrt(n)) && Number.isInteger(Math.cbrt(volume/n)) 
//   }

//   console.log((cutCube(27,27)    ))//, true
//   console.log((cutCube(512,8)   ))// , true
//   console.log((cutCube(512,64)  ))// , true
//   console.log((cutCube(50000,50) ))//, false
//   console.log((cutCube(432,16)   ))//, false
//   console.log((cutCube(256,8)    ))//, false
//   console.log((cutCube(27,3)     ))//, false
//   console.log((cutCube(123,456)  ))//, false
//   console.log((cutCube(27,8)    ))//, false
  


//===================================================================
// function blackAndWhite(arr){
//     //coding here...
//     return Array.isArray(arr) ? arr.includes(5) && arr.includes(13) ? "It's a black array" : "It's a white array" : "It's a fake array";
//   }

//=========================================================================
// function tailAndHead(arr){
//     //coding here...
//     let newArr = [].concat(arr.map(number => number.toString()))
//     let result = [];

//     for(let i = 0; i < newArr.length - 1; i += 1){
//         result = result.concat(+newArr[i][newArr[i].length - 1] + +newArr[i + 1][0])
//     }
//     return result.reduce((sum, el) => (sum = sum * el));
//   }
//   console.log((tailAndHead([123,456,789,12,34,56,78]) ));//, 532350
//   console.log((tailAndHead([1,2,3,4,5]) ));//, 945

//==============================================================================
// function bigToSmall(arr){
//     //coding here..
//   let someArray = [].concat(...arr).sort((a,b) => b - a).join('>');
//     return someArray
//   }
//   console.log((bigToSmall([[1,2],[3,4],[5,6]]) ));//, "6>5>4>3>2>1"
//   console.log((bigToSmall([[1,3,5],[2,4,6]]) ));//, "6>5>4>3>2>1"
//   console.log((bigToSmall([[1,1],[1],[1,1]]) ))//, "1>1>1>1>1"
//======================================================================================
// function sumMix(x){
// //const numbers = x.map(numb => parseInt(numb)) - переводит массив в числа если там есть строки 
// // const numbers = x.map(numStr => parseInt(numStr)).reduce((acc,number) => acc + number,0); -решение
// //return numbers
// }
// console.log((sumMix([9, 3, '7', '3'])));//, 22
// console.log((sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))); //, 42
// console.log((sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])))//, 41

//==========================================================================================================

// function abbrevName(name){
//  let solve = name.split(' ').map(function(item){return item[0]}).join('.').toLowerCase().toUpperCase();

// return solve
// }
// console.log((abbrevName("Sam Harris")))//, "S.H"
// console.log((abbrevName("Patrick Feenan")))//"P.F"
//==============================================================================================================

// function fakeBin(x){
//     let result;

    
//     //  result = x < 5   ? x.replace(/[1234]/g, '0') : x.replace(/[56789]/g, '1'); 
//     //return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1');// - правильное 
   

//     // function fakeBin(x){
//     //   var tmp = '';
//     //   for(var i = 0; i < x.length; i++){   // с помощью цикла 
//     //     if(x[i] < '5')tmp += '0';
//     //     else if(x[i] >= '5')tmp += '1';
//     //   }
//      return result;
//     // }
// }


//   console.log((fakeBin('45385593107843568')))//, '01011110001100111'
//   console.log((fakeBin('509321967506747')))//, '101000111101101'
//   console.log((fakeBin('366058562030849490134388085')))//, '011011110000101010000011011'
  
//=======================================================================================

// function countGrade(scores){
//   //coding here...
// let obj = {
//   S: 0,
//   A: 0,
//   B: 0,
//   C: 0,
//   D: 0,
//   X: 0,
// }
// scores.filter(el =>{
// if(el === 100) obj.S += 1
// if(el < 100 && el >= 90) obj.A += 1
// if( el < 90 && el >= 80) obj.B += 1
// if(el <80 && el >= 60) obj.C += 1
// if( el <60 && el >=0) obj.D += 1
// if (el === -1) obj.X += 1
// })
// return obj
// }
// console.log((countGrade([50,60,70,80,90,100]) ));//, {S:1, A:1, B:1, C:2, D:1, X:0}
// console.log((countGrade([65,75,,85,85,95,100,100]) ))//, {S:2, A:1, B:2, C:2, D:0, X:0}
// console.log((countGrade([-1,-1,-1,-1,-1,-1]) ));//, {S:0, A:0, B:0, C:0, D:0, X:6}

//===========================================================================================

// function mirrorImage(arr) {
//       let a = 1;
//       let b = 1;
    
//       arr.some((x, i) => {
//         a = arr[i];
//         b = arr[i + 1];
//         if(b === undefined){
//               a = -1
//               b = -1
//         }
//       if( a === +b.toString().split('').reverse().join('')){
//           return [a, b]
//       }
      
//       });
    
//       return [a, b];
//     }
//     console.log(mirrorImage([11, 22, 33, 33, 22, 11]));
//     console.log(mirrorImage([454, 86, 57, 75, 16, 88]));
//     console.log(mirrorImage([454, 0, 57, 0, 16, 88]));

//======================================================================================

// function repeatStr (n, s) {
//       let x = "";
//       for (let i = 0; i < n; i++){
//             x += s;
//       }
      
//       return x;
//  }
//   
//     console.log((repeatStr(3, "*")));//, "***"
//     console.log((repeatStr(5, "#")));//, "#####"
//     console.log((repeatStr(2, "ha ")))//, "ha ha "

//======================================================================================
// const areaOrPerimeter = (l , w) => l === w ? l * w : (l + w) * 2 
//       // Return your answer
//       // if(l === w) return l * w
//       // if(l !== w) return (l + w) * 2

//  console.log((areaOrPerimeter(4 , 4) ));//, 16 a rectangle.
//  console.log((areaOrPerimeter(6 , 10)));// , 32 square,

//======================================================================================

// function isPalindrome(str){
//       //code here
//       var strLen = str.length;

//       for (var i = 0; i < strLen; i++) {
//         if (str[i] === str[strLen - 1 - i]) { //Сравниваем все элементы от начала строки со всеми элементами с конца строки
//           return true;
//         } else {
//           return false;
//         }
//       }
//       return result;

// }	

//  console.log((isPalindrome("hannah")));//, true, "did not return true when palindrome given"
//  console.log((isPalindrome("billy")));//, false, "did not return false when non-palindrome given"

//======================================================================================

// function weatherInfo (temp) {
//       var celsius = (temp - 32 ) * (5/9)
//       // console.log(celsius)
//       if (celsius > 0) return celsius + " is above freezing temperature";
//        if(celsius < 0)  return celsius + " is freezing temperature" ;

//     }


//     console.log((weatherInfo(50)))//10 , '10 is above freezing temperature'
//     console.log((weatherInfo(23)))//5   '- 5 is freezing temperature'


//======================================================================================


// const  checkForFactor = (base, factor) =>  base % factor === 0 ? true : false;

   

//       console.log((checkForFactor(10,2)))//, true
//       console.log((checkForFactor(63,7)))//, true
//       console.log((checkForFactor(2450,5)))//, true
//       console.log((checkForFactor(24612,3)))//, true
    
  
//       console.log((checkForFactor(9,2)))//false
//       console.log((checkForFactor(653,7)))//false
//       console.log((checkForFactor(2453,5)))//false
//       console.log((checkForFactor(24617,3)))//false
   

//======================================================================================

// function getGrade (s1, s2, s3) {

//     let i = Math.floor((s1 + s2 + s3) / getGrade.length)
//     console.log(i)

//   if (i >= 90 && i <= 100) return "A"
//    if(i >= 80 && i <= 89) return "B"
//    if(i >= 70 && i <= 79) return "C"
//    if (i >= 60 && i <= 69) return "D"
// //    if (s3 >= 0 && s3 <= 60) return "F"
// return "F"
//   }

//======================================================================================

//   console.log((getGrade(95,90,93)))//, 'A'
//   console.log((getGrade(100,85,96)))//, 'A'
//   console.log((getGrade(92,93,94)))// 'A'


//   console.log((getGrade(70,70,100)))//B
//   console.log((getGrade(82,85,87)))//B
//   console.log((getGrade(84,79,85)))//B
//   console.log((getGrade(89,89,90))) //B

  
//   console.log((getGrade(70,70,70)))// c
//   console.log((getGrade(75,70,79)))//c
//   console.log((getGrade(60,82,76)))//c

 
//   console.log((getGrade(65,70,59)))//D
//   console.log((getGrade(66,62,68)))//D
//   console.log((getGrade(58,62,70)))//D


//   console.log((getGrade(44,55,52)))//  F
//   console.log((getGrade(48,55,52)))// F
//   console.log((getGrade(58,59,60)))// F

//======================================================================================


// function sortIt(arr) {
//     let copy = arr.slice().reverse();

//  console.log(copy)
//   }
  
//   console.log(sortIt([1, 1, 1, 2, 2, 3]));//[3,2,2,1,1,1]
//   console.log(sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3]));//[3,3,3,2,2,2,1,1,1])
//   console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]));// [5,4,1,6,6,3,3,2,2,7,7,7]














// const findAverage = nums =>  nums.reduce((acc, el) => acc + el, 0) / nums.length;
     
    
  
  

//   console.log((findAverage([1]))) //, 1
//   console.log((findAverage([1, 3, 5, 7]))) //, 4








// function move (position, roll) {
//     // return the new position
//     return position + (roll * 2)
//   }


//   console.log((move(0, 4)))//, 8
//   console.log((move(3, 6)))//, 15
//   console.log((move(2, 5)))//, 12