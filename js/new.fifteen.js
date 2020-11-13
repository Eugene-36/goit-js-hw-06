const reverseSeq = n => Array.from({ length: n }, (_, k)=> k + 1).reverse();

  console.log((reverseSeq(5))); //, [5, 4, 3, 2, 1]