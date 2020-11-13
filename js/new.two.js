function grabDoll(dolls){
    let bag = [];
    //coding here
    for(let i = 0; i < dolls.length; i += 1){
      if(dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll'){
        bag.push(dolls[i])
      }else{
        continue
      }
      if(bag.length === 3)break;
    }
    return bag;
  }
console.log(bag)