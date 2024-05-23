console.log("hello world", 4 + 6, "another log");
console.warn("these is warning");
console.error("this is an error");

//javascript variable
//container to store data values

    var number1 = 34;
    var number2 = 56;
    console.log(number1 + number2);

    //datatypes in javascript
    var str1="this is string";
    var str2= 'this is also string';
    var num1=455;
    var num2=24.3;


    //objects
     var marks={
        ravi:54,shub:34
     }
     console.log(marks)

     //boolean
     var a=true;
     var b =false;
     console.log(a,b);

     //array
     var arr=[1,2,3,4,5,6]
     console.log(arr[1]);


     //operators
     var a=34;
     var b=9;
     console.log("the va",a+b);
     //function

     function avg(a,b){
        c=(a+b)/2;
        return c;
     }

     c1=avg(12,14);
     console.log(c1);

     //conditionals in JS
     var age=34;
     if(age>8){
        console.log("you are not  a kid")
     }
     else{
        console.log("you are kid")
     }
     // if there is more than 1 condtion then we can put else if

     //array
     var arr=[1,2,34,5,6,7,8]
     console.log(arr);
     for(var i=0;i<arr.lenght;i++){
        console.log(arr[i])
     }
     arr.forEach(function(element){
        console.log(element);
     })
     
     
     
     const a=0;
     a=a+1;
     //while loop
     let j=0;
     while(j<arr.length){
        console.log(arr[j])
        j++;


     }

     //break
     var arr=[1,2,34,5,6,7,8]
     console.log(arr);
     for(var i=0;i<arr.lenght;i++){
        if(i=2){
           break; 
        }
        console.log(arr[i])
     }

     //arrar methods
     let myarr=["fan","camer",34,null,true];
     myarr.lenght;
     console.log(myarr.lenght)
     console.log(myarr.pop());
     console.log(myarr.push("harry"));
     console.log(myarr.shift())

     //string methods
    let mystring="harry is good boy";
    console.log(mystring.lenght);
    console.log(mystring.indexOf("is"))
    console.log("")
    console.log(mystr.slice(1,3))
    console.log(mystr.replace("harry","parth"));

    //dates in JS
    mydate=new Date();
    console.log(mydate.getTime());
    console.log(mydate.getFullYear());

    //DOM manipulation
    let elem= document.getElementById('click');
    console.log(elem);
    elem.style.background="yellow";
    console.log(elem.innerHTML);
    console.log(elem.innerText);

    function clicked(){
      console.log("the button was clicked")
    }
    //events in JS

    document.onload=function(){
      console.log("the document was loaded")
    }

    firstContainer.addEventListener('click',function(){
      console.log("click hua")
    })

    firstContainer.addEventListener('mouseover',function(){
      console.log("mouse on conatiner")
    })
    firstContainer.addEventListener('mouseout',function(){
      console.log("mouse out of conatiner")
    })

    firstContainer.addEventListener('mouseup',function(){
      console.log("mouse up clicked of conatiner")
    })

    firstContainer.addEventListener('mousedown',function(){
      console.log("mouse down clicked of conatiner")
    })

    //array function

    function sum(a,b){
      return a+b
;    }
//so these can be write as
summ=(a,b)=>{
   return a+b;
}

//settimeout and setinterval
logKaro=()=>{
   console.log("i am your log")
}
setTimeout(logKaro,2000);
setInterval(logKaro,2000);
//to stop these we have to write clearinterval

//Js local storage
localStorage.setItem('name','harry');
localStorage.getItem('name');
//JSON
//javascript object notation
obj={name:'harry',lenght:1}
jso=JSON.stringify(obj);
console.log(jso)
// it will change to object to string so that we can easily transport
//JSON only need double quotes not single quotes
//json.parse("string")


console.log("hello");
 let car1={name:'Ford', model:'xyz', cc:200};
 let car2=car1;
 console.log(car1.name);

car2.model='abc';
console.log(car1, car2);

let k=5;
let m =k;
m=7;
console.log(k,m);
//refernce 
// past by refernce and past by value 
//objects arrays manipulation



let arr = [1, 2, 3, 4, 5];
let arr2 = [];

for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * 10);
}

console.log(arr2); 

function f(){
    alert("ehllo word");
}
f();

function myFunction(a,b) {
    return (a*b*10);
  }
  console.log(myFunction(6,7));

  const Parth={Name:"ar",Age:20,contact:"null"
  }
  console.log(Parth.Name);
  Parth.Name="las";
  console.log(Parth);
  Parth.Age=201;
  console.log(Parth.Age*10);
  delete Parth["ar"];
 Parth.Name=function(){
    return("hello world");
 }
console.log(Parth.Name.toUppercase())

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Create an Array
  const myArray = Object.values(person);
  
  
  // Display the Array
console.log(typeof(myArray));
console.log(typeof(JSON.stringify(myArray)));


let text ="abcde    fhfhf";
let len=text.length;
console.log(len);
console.log(text.charAt(7));
console.log(text[4]);
console.log(text.at(2));
console.log(text.slice(2,4));
console.log(text.substring(2));
let text1 = "Hello";
let text2 = "World";
let text3= "Parth1";
console.log(text1.toUpperCase());
console.log(text2.toLowerCase());
console.log(text1.concat(text2,text3));

let text4 = "Please locate where 'locate' occurs!";
console.log(text4.indexOf("Please"));

let n="10";
let p=20;
console.log(typeof(n+p));

let date=new Date();
console.log(typeof(date));




let x="john";
let y=new String("john");
console.log(x==y);

console.log(x===y);


const bikes=["f1", "f2", "f3"];
bikes[0]="f4";
console.log(bikes);
console.log(bikes.reverse());
console.log(bikes.pop());
console.log(bikes.push("f5"));
console.log(bikes);
console.log(bikes.toString());
console.log(bikes.slice(1,3));

console.log(Boolean(7!=8));

if(7==8){
   Greeting="mc";
}

else if(9==8){

}
else{
   Greeting="c";
}
console.log(Greeting);


let q = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

//if bith cases will not there then it will take the value always default

const arr6=[20,20,300,40];
const arr7=[];
for(i=0;i<arr6.length;i++){
    arr7.push(arr6[i]);
    console.log(arr7);
}


// const person = {fname:"John", lname:"Doe", age:25};

//let text = "";
//for (let x in person) {
  //text += person[x];
//}
// always in loop is consider in object 
 let sets=(["a","b"]);
 console.log(sets);
console.log(sets.add("d"));
console.log(sets);

let maps=new Map();
maps.set("part",100);
maps.set("parth",200);
console.log(maps);
console.log(maps.get("part"));


hello = function() {
    return "Hello World!";
  }

  hello = ()=>{
    return "hello world";
  }

  const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language.toUpperCase();
    }
  };
  
  // Display data from the object using a getter:
console.log(person1.lang);


const mc= function(a,b){
    return(a*b);
}
console.log(mc(7,8));

const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function(){
        return this.firstName+ ""+ this.lastName;
    }
}
console.log(myObject.fullName());


function myfunc(arg1,arg2){
    this.firstName=arg1;
    this.lastName=arg2;
}
const myObj = new myFunction("John", "Doe");
console.log(myObj.firstName);


const person12 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person14 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe"
  console.log(person12.fullName.call(person2));






