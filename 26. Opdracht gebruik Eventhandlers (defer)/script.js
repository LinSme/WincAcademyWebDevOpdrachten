//<button id="mybutton" type="button" class="btn-alert">Alert Me!</button>
{/* <button id="mybutton2" type="button" class="blue-background">Change Background</button> */ }
//<button id="mybutton3" type="button" class="blue-background">Toggle Background</button>


//Opdracht 1
const button = document.getElementById('mybutton');
button.addEventListener('click', function () { alert("button clicked") });

//Opdracht 2
const button2 = document.getElementById('mybutton2');
button2.addEventListener('click', function () {
    button2.classList.add("red-background");
});

//Opdracht3
const button3 = document.getElementById('mybutton3');
button3.addEventListener('click', function () {
    button3.classList.toggle("red-background");
});