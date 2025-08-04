// 1 For loop
// 2 While Loop
// 3 Do While Loop
// 4 For in
// 5 For Of


//for(initialization ;condition ;iteration)

for(let a = 1;a<=5;a++){
    console.log(a);
    
}

// initialization
// while(condition){
// console.log()
// iteration
// }

let b =1;
while (b<=5){
    console.log(b);
    b++
}


// do while 

// syntax 

// initilization 
// do {
// log()
// iteration
// }while(condition)

let c =5;
do{
    console.log(c);
    c--
}while(c<=1)


let fruit = ["guava","apple","banana","mango","orange","grapes"]
for (sap of fruit){
    console.log(sap);
}

    
let bj = {
    nam : "trend",
    place : "anna nagar",
    city : "chennai",
    numb : 7200124901
}
for (xoz in bj){
    console.log(xoz+":"+bj[xoz]);
    
}