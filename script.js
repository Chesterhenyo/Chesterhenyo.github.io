const input = document.getElementById("yearOfBirth")
const button = document.getElementById("Age")
const input2 = document.getElementById("yearOfBirth2")
const button2 = document.getElementById("Age2")
const body1 = document.getElementsByClassName("div1")
const body2 = document.getElementsByClassName("div2")
const clearButton = document.getElementById("clearButton");
const clearButton2 = document.getElementById("clearButton2");


// Changing to Age//

function inputLength() {
    return input.value.length
}

function convertToAge() {
    
    document.getElementById('resultdiv').innerHTML='';

    let num =(2023 - yearOfBirth.value) 
    let age =num.toString();
    const div = document.createElement('div');
    div.appendChild(document.createTextNode('You are'+" "+ age +" " + 'years'))
    body1[0].children[2].appendChild(div);
    input.value = "";
}
    

function Result() {
    if (inputLength() > 0) {
        convertToAge();
    }
}
function clearResult() {
    document.getElementById('resultdiv').innerHTML = "";
}

clearButton.addEventListener("click", clearResult);
Age.addEventListener("click", Result);


//Changing to year of birth//

function inputLength2() {
    return input2.value.length
}

function convertToAge2() {

   document.getElementById('resultdiv2').innerHTML='';

   let num2 =(2023 - yearOfBirth2.value)
   let yearOfBirth =num2.toString();
   const div = document.createElement('div') 
   div.appendChild(document.createTextNode("You were born in the year"+" "+yearOfBirth))
   body2[0].children[2].appendChild(div);
   input2.value = "";
}

function Result2() {
    if (inputLength2() > 0) {
        convertToAge2();
    }
}

function clearResult2() {
    document.getElementById('resultdiv2').innerHTML = "";
}

Age2.addEventListener("click", Result2);
clearButton2.addEventListener("click", clearResult2);