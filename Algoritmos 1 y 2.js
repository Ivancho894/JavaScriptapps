function bubbleSort (arr){
    let aux
    for (let i = 0; i < arr.length-1;i++){
        for (let j = 0; j < arr.length-1;j++){
            if (arr[j]>arr[j+1]){
                aux = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = aux
             }
        }
    }
    return arr
}

// console.log(bubbleSort([2,7,4,90,1,34,5]))


function insertionSort(arr){
    for(let i = 1;i<arr.length;i++){
        let j = i - 1;
        let aux = arr[i];
         
        while(j>=0 && aux<arr[j]){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=aux;
    }
    return arr
}

function selectionSort(arr){
    for (let i = 0; i<arr.length; i++){
        let min = i;

        for(let j = i+1; j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
    
        if (i!==min){
            let aux = arr[i];
            arr[i]= arr[min];
            arr[min]=aux;

        }

    }
    return arr
}


// console.log(selectionSort([2,7,4,90,1,34,5]))

function quickSort(arr){


    if (arr.length<=1)return arr;

    let pivot = arr[Math.floor(Math.random()*arr.length)];

    let equals = [];
    let right = [];
    let left = [];

    for ( let i = 0; i < arr.length; i++){
        if(pivot!== arr[i]){
            if (pivot<arr[i]){
                right.push(arr[i])
            }else{
                left.push(arr[i])
            }   
            
        }else{
            equals.push(arr[i])
        }
    }
    return quickSort(left).concat(equals).concat(quickSort(right))
    
}

console.log(quickSort([2,7,4,90,1,34,5]))

function mergeSort(arr){
    if (arr.length<2) return arr

    let mit = Math.floor(arr.length/2);
    let left = arr.slice(0,mit)
    let right = arr.slice(mit)

    arr = [];

    left=mergeSort(left)
    right=mergeSort(right)

    while (left.length && right.length){
        if (left[0]<right[0]){
             arr.push(left.shift())
            }else arr.push(right.shift())
    }
    arr = arr.concat(left,right);
    return arr
}
console.log(mergeSort([2,7,4,90,1,34,5]))

