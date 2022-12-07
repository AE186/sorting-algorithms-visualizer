function getCountArray(array){
    let count = [];

    // console.log(Math.max(...array));

    for(let i=0 ; i <= Math.max(...array) ; i++){
        count.push(0);
    }

    for(let i=0 ; i < array.length ; i++){
        count[array[i]] = count[array[i]] + 1;
    }

    for(let i=1 ; i < count.length ; i++){
        count[i] = count[i-1] + count[i];
    }

    return count;
}


function getNumsfreq(start, stop, count){
    if(start > count.length-1){
        start = count.length-1;
    }

    if(stop > count.length-1){
        stop = count.length-1;
    }


    if(start == 0){
        return count[stop];
    }

    else{
        return count[stop] - count[start-1];
    }
}