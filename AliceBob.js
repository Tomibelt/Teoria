let a = [5,6,7];
let b = [3,6,10];

function compareTriplets(a, b){
    let alice = 0;
    let bob = 0;
    for(let i = 0; i < 3; i++){
        if(a[i] > b[i]){alice++}
        if(a[i] < b[i]){bob++}
    } return [alice, bob];
}


console.log(compareTriplets(a, b));