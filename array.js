// 1.push():  Adds a new element to the end of the array
// 2.pop(): Removes the last element from the array.
// 3.shift(): Removes the first element from the array.
// 4.unshift(): Adds a new element to the beginning of the array.
// 5.splice(): Adds or removes elements from the array.
//   splice(add , remove , replace)
// 6.sort(): Sorts the elements of the array.
// 7.reverse(): Reverses the order of elements in the array.


let a = [10,20,30,40,50]
a.push(60,70)
console.log(a);

let b = [10,20,30,40,50]
b.pop()
console.log(b);

let c =[10,20,30,40,50]
c.shift()
console.log(c);

let d = [10,20,30,40,50]
d.unshift(8,9)
console.log(d);

//syntax
// variable name.splice(index,splice num,value){}
//0 it is use to add a value in the given index number and it will move forword the already existing value
//1 it is use to add a value in the given index number and it will remove the already existing value (like) replace
let days = ["sunday","monday","tuesday","thuresday","friday","saturday"]
days.splice(3,1,"wednesday")
console.log(days);

let abc = ["guava","apple","banana","mango","orange","grapes"]
console.log(abc.sort());

let rev = "yadsendew"
console.log(rev.split("").reverse("").join(""));




// input
// Hello Happy World
// output
// HelloHappyWorld

let task = "Hello Happy World"
console.log(task.replaceAll(" ",""))

function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

let con = "I am learning JavaScript"
console.log(con.split(" ").reverse().join(" "));  


let input = "hello world";

 
console.log(input.split(" ").charAt(0).toUpperCase() + word.slice(1));

let inpu = "hello world";

let result = inpu.split(" ").charAt(0).toUpperCase() + inpu.slice(1);

console.log(result);
let str = "banana";
let count = str.split("a").length - 1;
console.log(count);