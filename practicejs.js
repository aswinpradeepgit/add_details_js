function countOccurance(arr){
  const count={};
  for (const element of arr){
    if (!(element in count)){
      count[element]=1
    }
    else {
      count[element]+=1
    }

    

  }
  

  let maxKey = null;
  let maxValue = -Infinity;

  for (const key in count){
    const value=count[key];
    if (value>maxValue){
      maxValue=value;
      maxKey=key;
  }
  }

  console.log(count)
  console.log(maxKey)

}
countOccurance([1,1,1,1,2,2,3,3,4,4,4,4,4,5,5,5,5]);

 



