// // var
// // console.log(a);
// var a=20
// // var -> declaration type
// // a -> variable name
// // =->assigmnet operator ->right side value is going assign a left side variable
// // 20 -> value
// console.log("Hello");
// console.log(a);
// console.log("The a is value is:"+a);
// // + string concat

// var a =50 // variable re decelaration
// a=60 // variable re assign
// console.log(a);

// // let
// // console.log(b);
// let b=20
// //decelaration unable to do
// b =30
// console.log(b);

// // const
// console.log(c);
// const c=50
// console.log(c);


// scope of the variable
//var always global scope
// // let,const -> block scope variable
// {
//     let a=20
// }

// // console.log(a);

// let a =60
// console.log(a);


//data types
// simple datatype or premitive data types
// number
// let a =50
// console.log(typeof(a));

//string
userName = "arun"
console.log(typeof(userName));

// boolean
todayClass = true
console.log(typeof(todayClass));

// undefined
let x=undefined;
console.log(typeof(x));

// non premitive or complex data types
// array
// let arr = [50,66,77,245,8622]
// // index -> 50->[0],66->[1],77,[2],245[3],8622[4]
// console.log(arr[3]);

// // object
// // left side is key 
// // right side is value
// const person  = {
//     name:"anandh",
//     age:30,
//     address:"salem",
//     family:{
//         dad:"muthu",
//         mom:"mani",
//         siblings:{
//             brother:true,
//             sister:null
//         }
//     }
// }

// console.log(person.family.siblings.brother);


// operators
// arithmetic operators
// +,-,*,/,%,++,--
let a = 10
let b = 5

console.log(a+b); //15
console.log(a-b); //5
console.log(a*b); //50
console.log(a/b); //2
console.log(a%b); //0

console.log(++a); //11
//a =11
console.log(a);



// comparison 
// ==,===
// console.log(10=="10");
// console.log(10==="10");

// relational operator
// >,<,<=,>=,!=
// console.log(a>b);
// console.log(a<b);
// console.log(a<=11);
// console.log(a>=12);
// console.log(a!=11);


// logical
// && || not

// let age = 17
// let state = "TN"
// let city = "cbe"
// console.log(age>=18 && state=="TN" && city=="Ed") ;
// console.log(age>=19 || state=="TN" || city=="Ed") ;
// console.log(!(age>=18));


//ternary

// let temp = 32
// // condition?success:failure

// console.log(temp>=32?"switch on the AC":"Switch on the fan");

// functions
// function function name(params) {
//     // block
// }

// function name()

// function greet(names,city){
//     console.log("Hello Welcome",names,city);    
// }
// greet("Arun","cbe")
// greet("bala")
// greet("Vijay")
// greet("Vetri")
// greet("Raja")
// greet("Ravi")

// function avg(marks){
//     return marks/5
// }

// function add(t,e,m,s,ss){
//     let total = 0
//    total = t+e+m+s+ss
//    return avg(total) 
       
// }

// console.log(add(60,70,77,33,88))
// console.log(add(60,70,77,66,88));
// console.log(add(60,70,77,79,88));
// console.log(add(60,70,77,53,88));
// console.log(add(60,70,77,97,88));

// arrow
// const define =(a)=> console.log("arrow function is working",a)
// // sep , " "
// define(10)

// // ananoums
// const ana = function(){

// }
// // IIFI
// const IFfi  = (function(){

// })

// condtional Statement
// if
// if(condition){
//     // block
// }

// let key = true

// if(!key){
//     console.log("Bike is On off");    
// }
// let key = true

// if(!key){
//     console.log("Bike is off");    
// }else{
//     console.log("Bike is oN");
    
// }

let age = 20

// if(age>19){
//     console.log("Adult");
    
// }
// else if(age<13){
//     console.log("Kids");
    
// }
// else{
//     console.log("Teenager");
    
// }

// switch
let today = "Monday"

switch(today){
    case "Monday":
        console.log("Today is Monday");
        break
    case "Tuesday":
        console.log("Today is Tuesday");
        break
    case "Wednesday":
        console.log("Today is Wednesday");
        break
    case "Thursday":
        console.log("Today is Thursday");
        break
    case "Friday":
        console.log("Today is Friday");
        break
    case "Saturday":
        console.log("Today is Saturday");
        break
    default:
        console.log("Today is Sunday");
        
}