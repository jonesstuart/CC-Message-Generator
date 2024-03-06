console.log('Welcome to the Random Message Generator!!!');

//Arrays of phrases
const messagePartOne = ['1', '2', '3'];
const messagePartTwo = ['a', 'b', 'c'];
const messagePartThree = ['x', 'y', 'z'];

//Random selector
let randomSelector = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

//Combine random selections into output
let messageCenter = () => {
    let arr = [];
    let i = randomSelector(messagePartOne);
    let j = randomSelector(messagePartTwo);
    let k = randomSelector(messagePartThree);
    arr = Array.from(i + j + k);
    return arr.join(' ');
}

//Output
console.log(messageCenter());
console.log('Have a wonderful day!')
