//print the odd number in array
((arr)=>{
 for(let i=0;i<arr.length;i++){
     if(arr[i]%2!=0){
         console.log(arr[i])
     }
 }
})([1,4,7,19,30]);

// output
// 1
// 7
// 19