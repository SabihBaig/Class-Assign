//////////CLASS TASK 


// Question # 03
// // Write a program to print numeric counting from 1 to 10
for (a = 1; a <= 10; a++) {
    console.log(a);
}




// // Question # 04
// // 
var userNum = +prompt("Enter a number show its multiplication number")

for (var a = 1; a <= 10; a++) {
    document.write(userNum + "x" + a + "=" + userNum * a + "<br>")
}


var length = +prompt("Enter length multiplication table")

for (var a = 1; a <= 15; a++) {
    document.write(length + "x" + a + "=" + length * a + "<br>")
}

// // Question # 05
var arr = ["apple", "banana", "mango", "Orange", "Strawberry"];
document.write("<br>"+ "<option>" + arr[0] + "</option>"
    + "<option>" + arr[1] + "</option>" + "<option>" + arr[2] + "</option>" + "<option>" + arr[3] + "</option>" +"<option>" + arr[4] + "</option>");
document.write("Element at index 0 is apple", "<br>","Element at index 1 is banana","<br>","Element at index 2 is mango","<br>","Element at index 3 is Orange","<br>","Element at index 4 is Strawberry" )

// // Question # 6
var arr = ["Counting"]
document.write("<br>","<br>","Counting:", "<br>","1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15")

var arr = ["Reverse Counting"]
document.write("<br>","<br>","Reverse counting:","<br>", "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15") 

var arr = ["Even"]
document.write("<br>","<br>","Even:","<br>", "0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20") 

var arr = ["Odd"]
document.write("<br>","<br>","Odd:","<br>", "1, 3, 5, 7, 9, 11, 13, 15, 17, 19") 

var arr = ["Series"]
document.write("<br>","<br>","Series:","<br>", "2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k") 

// Question # 08
var userNum = +prompt("Enter largest number")
var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > largest ) {
    largest = arr[i];
  }
}
document.write(largest);

// Question # 10
var userNum = +prompt("Enter multiples of 5 ranging")

for (var a = 1; a <= 100; a++) {
    document.write(userNum + "x" + a + "=" + userNum * a + "<br>")
}

