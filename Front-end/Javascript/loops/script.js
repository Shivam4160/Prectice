//  loops

// for in 

{

    let obj ={
        name:"rahul",
        height:"182cm",
        age:19,
        sport:"volleyball",
        position:"ace",
        year:"3rd"
    }

    console.log(obj.age);
    console.log(obj.name);
    
    for(keys in obj){
        console.log(`${keys} = ${obj[keys]}`);
    }
    

    obj.score = 124;
    console.log(obj.score);
    
    console.log("\n\n\n\n\n\n\n\n\n");
}



// for out

{

    let arr = [1,2,3,4,5,6,7,8,9,0]

    for(i of arr){
        console.log(`${i}`);
    }

    console.log("\n\n\n\n\n\n\n\n\n");

}



{

    let rahul ={
        name:"rahul",
        height:"182cm",
        age:19,
        sport:"volleyball",
        position:"ace",
        year:"3rd",
        score:124
    }

    let yash ={
        name:"yash",
        height:"161cm",
        age:18,
        sport:"volleyball",
        position:"setter",
        year:"2nd",
        sets:188
    }

    let set =new Set()

    set.add(rahul);
    set.add(yash);

    console.log(set);

    console.log(set);
    
    // console.log("\n\n\n\n\n\n\n\n\n");
}

