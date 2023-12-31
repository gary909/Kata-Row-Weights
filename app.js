function rowWeights(array){
    let myArr1 = [];
    let myArr2 = [];
    for(let i = 0; i < array.length; i++){
        if(i % 2 == 0){ // sort into 2 odd/even arrays
            myArr1.push(array[i])
        } else {
            myArr2.push(array[i])
        }
    } // sum the arrays into totals
    myArr1 = myArr1.reduce((partialSum, a) => partialSum + a, 0);
    myArr2 = myArr2.reduce((partialSum, a) => partialSum + a, 0);
    return [myArr1, myArr2] // return both totals
}

console.log(rowWeights([80])); // [80,0]
console.log(rowWeights([100,50])); // [100,50]
console.log(rowWeights([50,60,70,80])); // [120,140]
console.log(rowWeights([70,58,75,34,91])); // [236,92]
console.log(rowWeights([29,83,67,53,19,28,96])); // [211,164]
console.log(rowWeights([0])); // [0,0]
console.log(rowWeights([100,51,50,100])); // [150,151]
console.log(rowWeights([39,84,74,18,59,72,35,61])); // [207,235]
console.log(rowWeights([0,1,0])); // [0,1]