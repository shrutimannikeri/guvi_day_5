//return the all palindrome in array

((arr)=>{
let x=[];
let fl=arr.filter((ele)=>{
    return ele===ele.split('').reverse().join('')
})
console.log(fl)
})(["abc", "car", "ada", "racecar", "cool"]);

// output : 
// [ 'ada', 'racecar' ]