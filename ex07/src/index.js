//Only change code below this line
var sum = 0;
function addThree() {
    sum += 3;
    console.log(sum);
}
addThree();
function addFive(){
    sum += 5;
    console.log(sum);

}
addFive();
//Only change code above this line

module.exports = {
    addThree,
    addFive
};