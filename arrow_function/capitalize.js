let getcapitalize=(str)=>{
    let arr=str.split(' ');
    let newval=arr.map((ele,ind)=>{
       let y= ele[0].toUpperCase()+ele.slice(1,ele.length);
   
       return y;
    })
    console.log(newval.join(' '))
}
getcapitalize("i am learning fullstack development")

// output:
// I Am Learning Fullstack Development