const backgroundToChange3 = document.querySelector('body');
const dropDownMenu3 = document.getElementsByClassName(".dropDownMenu3");
const dropDownMenu3Li = document.querySelectorAll(".dropDownMenu3 li");
const colorButtons3 = document.querySelectorAll('.dropDownMenu3 input');

menuButton3.addEventListener('mouseover', function () {
    toggleDropDownVisibility3();
});

let dropDownMenu3Status = false;
let toggleDropDownVisibility3 = function () {
    if (dropDownMenu3Status === false) {
        dropDownMenu3Li.forEach(element => {
            element.style.opacity = "1";
            element.style.visibility = "visible";
            element.scrollIntoView(false);
        });

        dropDownMenu3Status = true;
    } else if (dropDownMenu3Status === true) {
        dropDownMenu3Status = false;

        dropDownMenu3Li.forEach(element => {
            element.style.opacity = "0";
            element.style.visibility = "hidden";
        })
    };
};

colorButtons3.forEach(colorButton3 => {
    colorButton3.addEventListener('click', event => {

        backgroundToChange3.removeAttribute("class");

        if (colorButton3.id === "radiobtn3-red") {
            myFunctionForBonus3("red");
            backgroundToChange3.classList.add('red');
        } else if (colorButton3.id === "radiobtn3-white") {
            myFunctionForBonus3("white");
            backgroundToChange3.classList.add('white');
        } else if (colorButton3.id === "radiobtn3-blue") {
            myFunctionForBonus3("blue");
            backgroundToChange3.classList.add('blue');
        } else if (colorButton3.id === "radiobtn3-orange") {
            myFunctionForBonus3("orange");
            backgroundToChange3.classList.add('orange');
        } else {
            myFunctionForBonus3("original");
        };

        toggleDropDownVisibility3();
    })
});

//Onderstaande code heb ik nodig voor de bonus opdracht (script 2.js): zorgen dat óók als je met menu3 de kleur veranderd hebt, je bij menu2 de juiste radiobutton gechecked is.
function myFunctionForBonus3(color) {
    var radioBtnToCheck2 = document.getElementById('radiobtn2-' + color);
    radioBtnToCheck2.checked = true;
};