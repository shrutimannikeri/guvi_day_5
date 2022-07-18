//remove dublicate in array

let getvalue=function(arr){
let uniquearray=arr.filter((ele,index)=>{
    return arr.indexOf(ele)===index
})
console.log(uniquearray)
}
getvalue([3,8,9,2,7,4,3])
getvalue(['A', 'B', 'A', 'C', 'B']);