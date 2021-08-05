// largest element
function largestElement(array){
    let largest = 0;
    for (let i = 0; i < array.length; i++){
        if(largest < array[i]){
            largest = array[i];
        }
    }
    return largest;
}

// smallest element
function smallestElement(array){
    let smallest = array[0];
    for (let i = 0; i < array.length; i++){
        if(smallest > array[i]){
            smallest = array[i];
        }
    }
    return smallest;
}

const numbers = [2, 1, 4, 5, 9, 7, 8, 6, 3, 0];

const largestNumber = largestElement(numbers);
console.log("Largest Element of the array is: ", largestNumber);

const smallestNumber = smallestElement(numbers);
console.log("Smallest Element of the array is: ", smallestNumber);