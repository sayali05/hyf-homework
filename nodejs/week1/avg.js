HYF_Lesson_2_status.sql//process.argv is an array containing the command line arguments.
const getCmdArgs = process.argv.slice(2);
//console.log(getCmdArgs);

if (getCmdArgs.length === 0) {
console.log("This is an empty array!");
} else {
//The reduce() method does not execute the function for empty array elements.
const average =
getCmdArgs.reduce((prev, curr) => Number(prev) + Number(curr)) /
getCmdArgs.length;
if (isNaN(average)) {
console.log("Please provide numbers only!");
} else {
console.log("The average is " + average);
}
}