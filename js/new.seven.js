const  cutIt =(arr)=>{
const min = Math.min(...arr.map(str => str.length));
return arr.map(str => str.slice(0, min))
}

console.log((cutIt(["ab","cde","fgh"]) , ["ab","cd","fg"]));
console.log((cutIt(["codewars","javascript","java"]) , ["code","java","java"]))



// Доп решение , немного не работает 
  //   let newArr = [];
  //   let value;
  //   for(let i = 0; i < arr.length; i += 1){
  //       newArr.push(arr[i].length)
  //       newArr.sort()
  //       value = [0]
  //   }
  // return  arr.map(str => str.slice(0, value))
