function solve(arr,n){
    if (arr.length===0){
        return {element:null,count:0}
    }
    let countmap=new Map()
    for (let i=0;i<n;i++){
        if (countmap.has(arr[i])){
            countmap.set(arr[i],countmap.get(arr[i])+1)
        }else{
            countmap.set(arr[i],1)
        }
    }
    console.log(countmap);
    
    let maxcount=0 
    let maxelem=arr[0]
    
    countmap.forEach((count,element)=>{
        if(count>maxcount){
            maxcount=count
            maxelem=element
        }

    })
    return {element:maxelem,count: maxcount}



}



let arr=[1,1,1,1,1,4,4,4]

let n=arr.length
console.log(solve(arr,n))





// Factorial 

// function solve(n){
//     if (n<0){
//         return -1
//     }
//     if (n===0 ||n===1){
//         return 1 
//     }
//     return n*(solve(n-1))
// }



// let n=5
// console.log(solve(n))



// fabonaci


// function solve(n){
//     if (n<0){
//         return -1
//     }
//     if (n===0){
//         return 0 
//     }
//     if (n===1){
//         return 1 
//     }

//     return solve(n-1)+solve(n-2)
// }



// let n=10
// console.log(solve(n))



// Max Number of element in Array 

// function solve(arr,n){
//     if (arr.length===0){
//         return {element:null,count:0}
//     }
//     let countmap=new Map()
//     for (let i=0;i<n;i++){
//         if (countmap.has(arr[i])){
//             countmap.set(arr[i],countmap.get(arr[i])+1)
//         }else{
//             countmap.set(arr[i],1)
//         }
//     }
//     console.log(countmap);
    
//     let maxcount=0 
//     let maxelem=arr[0]
    
//     countmap.forEach((count,element)=>{
//         if(count>maxcount){
//             maxcount=count
//             maxelem=element
//         }

//     })
//     return {element:maxelem,count: maxcount}



// }



// let arr=[1,1,1,1,1,4,4,4]

// let n=arr.length
// console.log(solve(arr,n))

