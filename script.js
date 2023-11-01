// select elements
const myForm = document.getElementById("intro-form")
const intro = document.getElementById("intro")
const inputs = [...document.querySelectorAll("input")]


// build state objects
const state = {
    color: "",
    name: ""
}


// add eventListener for inputs
myForm.onsubmit = jsIntro
for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("input", handleChange);
}


// function to display hello text
function jsIntro(e){

    e.preventDefault()
   
    intro.innerHTML = "Hello " + state.name + "!" + " My name is JavaScript."

    intro.style.color = state.color
      
    clearInputs(inputs)
    
}

function handleChange(e){
    let {name, value} =e.target
    state[name] = value
}


// function to clear text input and radios
function clearInputs(arr){
    // console.log("array", arr)
    for(let i = 0; i < arr.length; i++){
        if(arr[i]["type"] === "text"){
            arr[i].value = "";
        
        } else {
            arr[i].checked = false;
        }
    }
}


