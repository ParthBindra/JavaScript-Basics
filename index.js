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









