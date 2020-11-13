function firstToLast(str,c){
    //coding here..
    str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
    
  }

  console.log((firstToLast("ababc","a") , 2));
  console.log((firstToLast("ababc","c") , 0));
  console.log((firstToLast("ababc","d") , -1));


//   Здесь нужно вернуть количество символом между первым упоминанием символа и последним)
// А если символа нет, то -1)