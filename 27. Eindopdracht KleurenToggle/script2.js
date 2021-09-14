const backgroundToChange2 = document.querySelector('body');
const menuButton2 = document.getElementById('menuButton2');
const dropDownMenu2 = document.getElementById("drop-down-menu-2");
const colorButtons2 = document.querySelectorAll('#drop-down-menu-2 input');

function toggleDropDownVisibility2() {
    dropDownMenu2.classList.toggle('drop-down-menu-2-invisible');
    dropDownMenu2.scrollIntoView(false);
};

menuButton2.addEventListener('mouseover', function () {
    toggleDropDownVisibility2();
});

colorButtons2.forEach(colorButton2 => {
    colorButton2.addEventListener('click', event => {

        backgroundToChange2.removeAttribute("class");

        if (colorButton2.id === "radiobtn2-red") {
            myFunctionForBonus2("red");
            backgroundToChange2.classList.add('red');
        } else if (colorButton2.id === "radiobtn2-white") {
            myFunctionForBonus2("white");
            backgroundToChange2.classList.add('white');
        } else if (colorButton2.id === "radiobtn2-blue") {
            myFunctionForBonus2("blue");
            backgroundToChange2.classList.add('blue');
        } else if (colorButton2.id === "radiobtn2-orange") {
            myFunctionForBonus2("orange");
            backgroundToChange2.classList.add('orange');
        } else {
            myFunctionForBonus2("original");
        };

        toggleDropDownVisibility2();

        dropDownMenu2.scrollIntoView(false);
    })
});

//Onderstaande code heb ik nodig voor de bonus opdracht (script 3.js): zorgen dat óók als je met menu2 de kleur veranderd hebt, je bij menu3 de juiste radiobutton gechecked is.
function myFunctionForBonus2(color) {
    var radioBtnToCheck3 = document.getElementById('radiobtn3-' + color);
    radioBtnToCheck3.checked = true;
}