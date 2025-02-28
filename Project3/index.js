function register(){
    const name = document.getElementById("name").value; 
    const email = document.getElementById("email").value;
    const className = document.getElementById("class").value;
    const rollno = document.getElementById("rollno").value;

    if(!name || !email || !className || !rollno){
        alert("Please enter all the fields");
    }

    
}

function namechange(){
    let newval = document.getElementById("name").value;
    console.log(newval);
    if(parseInt(newval[newval.length-1]) || parseInt(newval[0])){
        alert("Please enter only alphabets inside the name fields");
        newval = "";
        document.getElementById("name").value = newval;
    }
}