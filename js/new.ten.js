function alienLanguage(str){
    //coding here...
    let splited;
  
    str = str.toUpperCase()
    splited = str.split(" ")

    const replaced = splited.map(word => word.slice(0, -1) + word.slice(-1).toLowerCase()).join(' ');
    return replaced
  }

  console.log((alienLanguage("My name is John"))) //, "My NAMe Is JOHn"
  console.log((alienLanguage("this is an example"))) //, "THIs Is An EXAMPLe"
  console.log((alienLanguage("Hello World"))) // , "HELLo WORLd"
  console.log((alienLanguage("HELLO WORLD"))) //, "HELLo WORLd"