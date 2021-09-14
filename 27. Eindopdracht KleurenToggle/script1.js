const backgroundToChange = document.querySelector('body');
const menuButton = document.getElementById('menuButton1');
const dropDownMenu = document.getElementById("drop-down-menu-1");
const colorButtons = document.querySelectorAll('#drop-down-menu-1 li');

function toggleDropDownVisibility() {
    dropDownMenu.classList.toggle('drop-down-menu-1-invisible');
    dropDownMenu.scrollIntoView(false);
};

menuButton.addEventListener('click', function () {
    toggleDropDownVisibility();
});

colorButtons.forEach(colorButton => {
    colorButton.addEventListener('click', event => {
        backgroundToChange.removeAttribute("class");

        if (colorButton.id === "red") {
            myFunctionForBonus1("red");
            backgroundToChange.classList.add('red');
        } else if (colorButton.id === "white") {
            myFunctionForBonus1("white");
            backgroundToChange.classList.add('white');
        } else if (colorButton.id === "blue") {
            myFunctionForBonus1("blue");
            backgroundToChange.classList.add('blue');
        } else if (colorButton.id === "orange") {
            myFunctionForBonus1("orange");
            backgroundToChange.classList.add('orange');
        } else {
            myFunctionForBonus1("original");
        };

        toggleDropDownVisibility();

        menuButton.scrollIntoView(false);
    })
});

//Onderstaande code heb ik nodig voor de bonus opdrachten: zorgen dat óók als je met menu1 de kleur veranderd hebt, je bij menu2 de juiste radiobutton gechecked is. En hetzelfde nog eens voor de radiobuttons bij menu3.
function myFunctionForBonus1(color) {
    var radioBtnToCheck2 = document.getElementById('radiobtn2-' + color);
    radioBtnToCheck2.checked = true;

    var radioBtnToCheck3 = document.getElementById('radiobtn3-' + color);
    radioBtnToCheck3.checked = true;
};