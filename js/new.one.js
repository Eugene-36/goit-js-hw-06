function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for(let i = 0; i < arr; i += 1){
       arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
    }
    return [odd,even];
  }
  console.log(pickIt())