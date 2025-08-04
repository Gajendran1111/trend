// map 

// syntax 
// variable name.map ((value,index,actualarray)=>)

    let a = [10,20,30,40,50]
    let b = a.map((v,i,a)=>v*5)
    console.log(b);
    
// filter    
// syntax 

// variable name.filter ((value,index,actualarray)=>)


// reduce  

// variable name.reduce((accumulator,actualarray)=>)

    let red = [10,20,30,40]
    let ret = red.reduce((x,y)=>x+y)
    console.log(ret);
    