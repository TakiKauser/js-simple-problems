const business = 450;
const minister = 550;
const army = 600;

if (business > minister && business > army){
    console.log("Business Larger");
}
else if (minister > business && minister > army){
    console.log("Minister Larger");
}
else{
    console.log("Army Larger");
}

let max = Math.max(business, minister, army);
console.log("largest is: ", max);

// largest using function [task-1]
function largest(number1, number2, number3){
    let largestNumber = 0;
    if ((number1 > number2) && (number1 > number3)){
        largestNumber = number1;
        return largestNumber;
    }
    else if ((number2 > number1) && (number2 > number3)){
        largestNumber = number2;
        return largestNumber;
    }
    else{
        largestNumber = number3;
        return largestNumber;
    }
}

let largeNumber = largest(business, minister, army);
console.log("According to function, largest number is: ", largeNumber);

// smallest using function [task-2]
function smallest(number1, number2, number3){
    let smallestNumber = 0;
    if ((number1 < number2) && (number1 < number3)){
        smallestNumber = number1;
        return smallestNumber;
    }
    else if ((number2 < number1) && (number2 < number3)){
        smallestNumber = number2;
        return smallestNumber;
    }
    else{
        smallestNumber = number3;
        return smallestNumber;
    }
}

let smallNumber = smallest(business, minister, army);
console.log("According to function, smallest number is: ", smallNumber);