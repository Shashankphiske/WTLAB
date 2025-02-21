let sum = "0";
let operation = "none";
let firstval = "";
let num = 0;
let total = 0;

function displaySum(){
    document.f1.inputfield.value += ""+sum;
}

function getValue(num){
    sum = num;
    displaySum();
}

function clearSum(){
    sum = 0;
}

function addSum(){
    const num = document.get
}

function subValue(){

}

function divValue(){

}

function mulValue(){

}
function printVal(){
    let sum = 0;
    let flag = "none";
    let operations = document.f1.inputfield.value;
    for(let i = 0; i < operations.length; i++){
        if(operations[i] != "+" || operations[i] != "-"){
            firstval += operation[i];   
        }
        else{
            sum = parseInt(firstval);
            if(flag === "add"){
                total += sum;
            }
            firstval = "";
            if(operations[i] === "+"){
                flag = "add";
            }else if(operations[i] === "-"){
                flag = "sub";
            }
        }
    }
}