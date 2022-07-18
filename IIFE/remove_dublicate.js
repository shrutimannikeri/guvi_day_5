//remove dublicate in array

((arr)=>{
let uniquearray=arr.filter((ele,index)=>{
    return arr.indexOf(ele)===index
})
console.log(uniquearray)
})(([3,8,9,2,7,4,3]))

// output:
// [ 3, 8, 9, 2, 7, 4 ,4]