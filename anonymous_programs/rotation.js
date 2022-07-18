//rotate an array by k times
let temp=0;
let rotate=function(nums,k)
{
    for (let j=0; j<k; j++)
        {
            for (let i=nums.length-1; 0<i; i--)
            {
                // shifting towards the right
                temp=nums[i-1];
                nums[i-1]=nums[i];
                nums[i]=temp;
            } 
            
        }
        console.log(nums)
    }
    rotate([1, 2, 3, 4, 5],4)


    // output:
    // [ 2, 3, 4, 5, 1 ]