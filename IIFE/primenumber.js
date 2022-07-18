//return all prime number in an array
()
let num = [11,12,13,14,15,16,17,18,19,20];
let result = [];
((num)=> {
  if(num < 2) return false;
  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
})(
num.forEach((element)=>{
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);)

// output : 
// [
//     2,  3,  5,  7,
//    11, 13, 17, 19
//  ]