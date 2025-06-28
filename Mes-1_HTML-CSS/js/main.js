

let textBox = document.getElementById("Data");

function sendData(){

    const age = document.getElementById("age").value ;
    const name = document.getElementById("name").value ;
    
    textBox.innerHTML = "";
    textBox.innerText = `Hi ${name}, I think your are ${age} years old`;
}
     