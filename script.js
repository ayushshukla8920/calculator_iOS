var scr = document.querySelector("#screen");
var AC = document.querySelector(".AC");
var plus_minus = document.querySelector(".plus-minus");
var percent = document.querySelector(".percentage");
var divide = document.querySelector(".divide");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var multiply = document.querySelector(".multiply");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var minus = document.querySelector(".minus");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var plus = document.querySelector(".plus");
var zero = document.querySelector(".zero");
var dot = document.querySelector(".dot");
var equal = document.querySelector(".equal");
var operation = 0;
temp_storage = 0;
operation_storage = 0;
sign = '+';


const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
time = hours+":"+minutes;
console.log(time);

function refreshTime() {
    t = document.querySelector("h2");
    const now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    if (minutes<10){
        minutes="0"+minutes;
    }
    time = hours+":"+minutes;
    t.innerHTML = time;
}
setInterval(refreshTime, 10);




AC.addEventListener("click",function(){
    scr.innerHTML = "0";
    temp_storage = 0;
    AC.innerHTML = "AC";
})
plus_minus.addEventListener("click",function(){
    AC.innerHTML = "C"
    if (sign === '+' && temp_storage > 0){
        temp_storage = 0 - temp_storage;
        sign = '-';
        console.log(sign)
    }
    else if (sign === '-' && temp_storage < 0){
        temp_storage = 0 - temp_storage;
        sign = '+';
        console.log("c2runs")
    }
    scr.innerHTML = temp_storage;
})
percent.addEventListener("click",function(){
    AC.innerHTML = "C"
    if ( document.querySelector(".AC").classList.contains('AC') ){
        document.querySelector(".AC").classList.add('C');
        document.querySelector(".AC").classList.remove('AC');
    }
    scr.innerHTML = "0";
})
divide.addEventListener("click",function(){
    AC.innerHTML = "C"
    if ( document.querySelector(".AC").classList.contains('AC') ){
        document.querySelector(".AC").classList.add('C');
        document.querySelector(".AC").classList.remove('AC');
    }
    scr.innerHTML = "0";
})



seven.addEventListener("click",function(){
    if(temp_storage < 100000){
        if (operation == 0){
            disp= (temp_storage*10)+7;
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
})
eight.addEventListener("click",function(){
    if(temp_storage < 100000){
        if (operation == 0){
            disp= (temp_storage*10)+8;
            scr.innerHTML = disp
            temp_storage = disp;
    }}
})
nine.addEventListener("click",function(){
    if(temp_storage < 100000){
        if (operation == 0){
            disp= (temp_storage*10)+9;
            scr.innerHTML = disp
            temp_storage = disp;
    }}
})
multiply.addEventListener("click",function(){
    AC.innerHTML = "C"
    if ( document.querySelector(".AC").classList.contains('AC') ){
        document.querySelector(".AC").classList.add('C');
        document.querySelector(".AC").classList.remove('AC');
    }
    scr.innerHTML = "0";
})



four.addEventListener("click",function(){
    if(temp_storage < 100000){
        if (operation == 0){
            disp= (temp_storage*10)+4;
            scr.innerHTML = disp
            temp_storage = disp;
    }}
})
five.addEventListener("click",function(){
    if(temp_storage < 100000){
        if (operation == 0){
            disp= (temp_storage*10)+5;
            scr.innerHTML = disp
            temp_storage = disp;
    }}
})
six.addEventListener("click",function(){
    if(temp_storage < 100000){
        if (operation == 0){
            disp= (temp_storage*10)+6;
            scr.innerHTML = disp
            temp_storage = disp;
    }}
})
minus.addEventListener("click",function(){
    AC.innerHTML = "C"
    if ( document.querySelector(".AC").classList.contains('AC') ){
        document.querySelector(".AC").classList.add('C');
        document.querySelector(".AC").classList.remove('AC');
    }
    scr.innerHTML = "0";
})



one.addEventListener("click",function(){
    if(temp_storage < 100000){
        if (operation == 0){
            disp= (temp_storage*10)+1;
            scr.innerHTML = disp
            temp_storage = disp;
    }}
})
two.addEventListener("click",function(){
    if(temp_storage < 100000){
        if (operation == 0){
            disp= (temp_storage*10)+2;
            scr.innerHTML = disp
            temp_storage = disp;
    }}
})
three.addEventListener("click",function(){
    if(temp_storage < 100000){
        if (operation == 0){
            disp= (temp_storage*10)+3;
            scr.innerHTML = disp
            temp_storage = disp;
    }}
})
plus.addEventListener("click",function(){
    AC.innerHTML = "C"
    if ( document.querySelector(".AC").classList.contains('AC') ){
        document.querySelector(".AC").classList.add('C');
        document.querySelector(".AC").classList.remove('AC');
    }
    scr.innerHTML = "0";
})



zero.addEventListener("click",function(){
    if(temp_storage < 100000){
        if (operation != 0){
            if (temp_storage!=0){
                disp= (temp_storage*10)+0;
                scr.innerHTML = disp
                temp_storage = disp;
        }
    }}
})
dot.addEventListener("click",function(){
    if(temp_storage < 100000){
        if (operation != 0){
            if (temp_storage!=0){
                disp= (temp_storage*10)+".";
                scr.innerHTML = disp
                temp_storage = disp;
        }
    }}
})
equal.addEventListener("click",function(){
    AC.innerHTML = "C"
    if ( document.querySelector(".AC").classList.contains('AC') ){
        document.querySelector(".AC").classList.add('C');
        document.querySelector(".AC").classList.remove('AC');
    }
    scr.innerHTML = "0";
})


