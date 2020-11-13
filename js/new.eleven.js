function fiveLine(s){
    //coding here...
    return `${s.trim()}\n${s.trim().repeat(2)}\n${s.trim().repeat(3)}\n${s.trim().repeat(4)}\n${s.trim().repeat(5)}\n`;
  }

// console.log(fiveLine())
  console.log((fiveLine("  a")));
  console.log((fiveLine("\txy \n")));
  console.log((fiveLine("           Ok               ")));