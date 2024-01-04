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
curr_operation = "null";
decimal = 0;


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
    operation_storage = 0;
    AC.innerHTML = "AC";
    decimal = 0;
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
    if (curr_operation!="%"){
        if (temp_storage!=0){
            if (operation_storage !=0 && temp_storage!=0){
                temp_storage = (temp_storage/100)*operation_storage;
                scr.innerHTML = temp_storage;
            }
            else if (operation_storage ==0 && temp_storage!=0){
                operation_storage = temp_storage/100;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                temp_storage = 0;
            }
        }}
    curr_operation = "%";
})



divide.addEventListener("click",function(){
    AC.innerHTML = "C";
    if (curr_operation === '/'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage/temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }

    if (curr_operation === 'X'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage*temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }


    if (curr_operation === '+'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage+temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }




    if (curr_operation === '-'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage-temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }




    if (curr_operation === "null"){
        scr.innerHTML = "0";
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage/temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
            }
        }
    curr_operation = "/";
}})



seven.addEventListener("click",function(){
    if(temp_storage < 10000 && decimal != 1){
        if (operation == 0){
            disp= (temp_storage*10)+7;
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
    else if(String(temp_storage).length < "100000".length && decimal == 1){
        if (operation == 0){
            disp= parseFloat(String(temp_storage)+"7");
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
})
eight.addEventListener("click",function(){
    if(temp_storage < 10000 && decimal != 1){
        if (operation == 0){
            disp= (temp_storage*10)+8;
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
    else if(String(temp_storage).length < "100000".length && decimal == 1){
        if (operation == 0){
            disp= parseFloat(String(temp_storage)+"8");
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
})
nine.addEventListener("click",function(){
    if(temp_storage < 10000 && decimal != 1){
        if (operation == 0){
            disp= (temp_storage*10)+9;
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
    else if(String(temp_storage).length < "100000".length && decimal == 1){
        if (operation == 0){
            disp= parseFloat(String(temp_storage)+"9");
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
})
multiply.addEventListener("click",function(){
    AC.innerHTML = "C";
    if (curr_operation === '/'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage/temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }

    if (curr_operation === 'X'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage*temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }


    if (curr_operation === '+'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage+temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }




    if (curr_operation === '-'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage-temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }




    if (curr_operation === "null"){
        scr.innerHTML = temp_storage;
        scr.innerHTML = "0";
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage*temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
            }
        }
    }
    curr_operation = "X";
})



four.addEventListener("click",function(){
    if(temp_storage < 10000 && decimal != 1){
        if (operation == 0){
            disp= (temp_storage*10)+4;
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
    else if(String(temp_storage).length < "100000".length && decimal == 1){
        if (operation == 0){
            disp= parseFloat(String(temp_storage)+"4");
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
})
five.addEventListener("click",function(){
    if(temp_storage < 10000 && decimal != 1){
        if (operation == 0){
            disp= (temp_storage*10)+5;
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
    else if(String(temp_storage).length < "100000".length && decimal == 1){
        if (operation == 0){
            disp= parseFloat(String(temp_storage)+"5");
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
})
six.addEventListener("click",function(){
    if(temp_storage < 10000 && decimal != 1){
        if (operation == 0){
            disp= (temp_storage*10)+6;
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
    else if(String(temp_storage).length < "100000".length && decimal == 1){
        if (operation == 0){
            disp= parseFloat(String(temp_storage)+"6");
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
})
minus.addEventListener("click",function(){
    AC.innerHTML = "C";
    if (curr_operation === '/'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage/temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }

    if (curr_operation === 'X'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage*temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }


    if (curr_operation === '+'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage+temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }




    if (curr_operation === '-'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage-temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }




    if (curr_operation === "null"){
        scr.innerHTML = temp_storage;
        scr.innerHTML = "0";
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage-temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
            }
        }
      }
    curr_operation = "-";
})



one.addEventListener("click",function(){
    if(temp_storage < 10000 && decimal != 1){
        if (operation == 0){
            disp= (temp_storage*10)+1;
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
    else if(String(temp_storage).length < "100000".length && decimal == 1){
        if (operation == 0){
            disp= parseFloat(String(temp_storage)+"1");
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
})
two.addEventListener("click",function(){
    if(temp_storage < 10000 && decimal != 1){
        if (operation == 0){
            disp= (temp_storage*10)+2;
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
    else if(String(temp_storage).length < "100000".length && decimal == 1){
        if (operation == 0){
            disp= parseFloat(String(temp_storage)+"2");
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
})
three.addEventListener("click",function(){
    if(temp_storage < 10000 && decimal != 1){
        if (operation == 0){
            disp= (temp_storage*10)+3;
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
    else if(String(temp_storage).length < "100000".length && decimal == 1){
        if (operation == 0){
            disp= parseFloat(String(temp_storage)+"3");
            scr.innerHTML = disp;
            temp_storage = disp;
    }}
})
plus.addEventListener("click",function(){
    AC.innerHTML = "C";
    console.log(curr_operation);
    if (curr_operation === '/'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage/temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }

    if (curr_operation === 'X'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage*temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }


    if (curr_operation === '+'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage+temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }




    if (curr_operation === '-'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage-temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
                operation_storage = temp_storage;
                temp_storage = 0;
            }
        }
    }




    if (curr_operation === "null"){
        scr.innerHTML = "0";
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage+temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
            }
        }
    }
    decimal = 0;
    curr_operation = "+";
})



zero.addEventListener("click",function(){
    if(temp_storage < 10000 && decimal !=1){
        if (operation == 0){
            if (temp_storage!=0){
                disp= (temp_storage*10)+0;
                scr.innerHTML = disp
                temp_storage = disp;
        }
    }}
    scr.innerHTML = temp_storage;
})
dot.addEventListener("click",function(){
    if(temp_storage < 10000){
        if (operation == 0){
            if (temp_storage!=0){
                disp = temp_storage + '.';
                console.log(disp);
                scr.innerHTML = disp
                temp_storage = disp;
                decimal=1;
        }
    }}
    scr.innerHTML = temp_storage;
})
equal.addEventListener("click",function(){
    AC.innerHTML = "AC"


    if (curr_operation === '/'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage/temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
            }
        }
        else{
            scr.innerHTML = operation_storage;
        }
    }

    if (curr_operation === 'X'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage*temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
            }
        }
        else{
            scr.innerHTML = operation_storage;
        }
    }


    if (curr_operation === '+'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage+temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
            }
        }
        else{
            scr.innerHTML = operation_storage;
        }
    }




    if (curr_operation === '-'){
        if (temp_storage!=0){
            if (operation_storage == 0){
                operation_storage = temp_storage;
                temp_storage=0;
            }
            console.log(temp_storage);
            if (operation_storage !=0 && temp_storage!=0){
                operation_storage = operation_storage-temp_storage;
                temp_storage = operation_storage;
                scr.innerHTML = temp_storage;
            }
        }
        else{
            scr.innerHTML = temp_storage;
        }
    }


    scr.innerHTML = temp_storage;
    curr_operation = 0;
    temp_storage = 0;
})


