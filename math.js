/* // absolute value
const myNumber1 = -3;
const output1 = Math.abs(myNumber1); 

console.log(output1);

// ceiling value
const myNumber2 = 3.0001234;
const output2 = Math.ceil(myNumber2); 

console.log(output2);

// floor value
const myNumber3 = 3.0001234;
const output3 = Math.floor(myNumber3); 

console.log(output3);

// round value
const myNumber4 = 3.50;
const output4= Math.round(myNumber4); 

console.log(output4);

// random value

// const roundedRandom= Math.round(Math.random() * 10); 

// console.log(roundedRandom);

for(let i = 0; i < 20; i++){
    const roundedRandom= Math.round(Math.random() * 10); 

    // console.log(roundedRandom);
} */

// random fun exercise

const selected = [];

for (let i = 0; i < 10; i++){
    const random = Math.random();
    const between100 = Math.round(random * 100);
    const picked = between100;

    if (selected.indexOf(picked) == -1){
        selected.push(picked);
    }
    else{
        console.log(selected);
        console.log("Duplicate item: ", picked);
        selected[i--];
    }
}
console.log(selected);