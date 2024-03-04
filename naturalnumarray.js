const  input = require("readline-sync")
let n = input.questionInt("Enter The Number: ")
let array=[];
let i = 0;
let a=1
while(i<n)
{
    
    array[i]=a;
    a++
    i++   
}console.log(array);
