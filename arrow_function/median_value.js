//https://www.enjoyalgorithms.com/blog/median-of-two-sorted-arrays
//median is avarage of 2 middle value

//return median of 2 sorted array of the same size


let median=(arr1,arr2)=>{
    let x=arr1.concat(arr2).sort()
    let len1=(x.length/2)
    let avg=(x[len1]+x[len1+1])/2
    console.log(avg)
}
median([1,3,4,6,9],[2,5,7,8,10])


// output:
// 5.5
