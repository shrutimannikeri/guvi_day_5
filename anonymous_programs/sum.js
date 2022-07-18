var sum = function (arr) {
   let sum=0;
   for(let i=0;i<arr.length;i++){
       sum=sum+arr[i]

   }
   return sum;
};
 
console.log(sum([2,6,7,8,9]));

// output: 
// 32