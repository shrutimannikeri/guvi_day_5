//return the all palindrome in array

let palindrom=function(arr){
    
let x=[];
// for(let i=0;i<arr.length-1;i++){
//     let r=arr[i].split('').reverse().join('');
    
//     if(arr[i]===r){
//         x.push(arr[i])
//     }
// }
let fl=arr.filter((ele)=>{
    return ele===ele.split('').reverse().join('')
})
return fl
}

console.log(palindrom(["abc", "car", "ada", "racecar", "cool"]))

// output : 
// [ 'ada', 'racecar' ]