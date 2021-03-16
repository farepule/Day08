//Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
  
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  }

console.log(randomRangeNumber(10, 20));
console.log(randomRangeNumber(30, 20));
console.log(randomRangeNumber(100, 200));
console.log(randomRangeNumber(5, 8));
console.log(randomRangeNumber(-10, 20));
randomRangeNumber();
//Only change code above this line
module.exports = randomRangeNumber;
