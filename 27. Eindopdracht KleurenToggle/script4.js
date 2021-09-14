const backgroundToChange4 = document.querySelector('body');
const dropDownMenu4 = document.getElementsByClassName(".dropDownMenu4");
const dropDownMenu4UL = document.querySelector(".dropDownMenu4 ul");
const dropDownMenu4Li = document.querySelectorAll(".dropDownMenu4 li");
const inputField = document.querySelector(".dropDownMenu4 input");

menuButton4.addEventListener('mouseover', function () {
    toggleDropDownVisibility4();
});

let dropDownMenu4Status = false;
let toggleDropDownVisibility4 = function () {
    if (dropDownMenu4Status === false) {
        dropDownMenu4UL.style.visibility = "visible";

        dropDownMenu4Li.forEach(element => {
            element.style.opacity = "1";
            element.style.visibility = "visible";
            element.scrollIntoView(false);
        });

        dropDownMenu4Status = true;
    } else if (dropDownMenu4Status === true) {
        dropDownMenu4UL.style.visibility = "hidden";

        dropDownMenu4Li.forEach(element => {
            element.style.opacity = "0";
            element.style.visibility = "hidden";
        })

        dropDownMenu4Status = false;
    }
};

inputField.addEventListener('keyup', changeBackgroundColor4);

function changeBackgroundColor4(e) {
    var loggedKey = e.key;

    if (loggedKey != "1" && loggedKey != "2" && loggedKey != "3" && loggedKey != "4" && loggedKey != "5") {
        alert("kies een nummer tussen 1 en 5");
    } else {
        backgroundToChange3.removeAttribute("class");

        if (loggedKey === "1") {
            myFunctionForBonus4("red");
            backgroundToChange4.classList.add('red');
        } else if (loggedKey === "2") {
            myFunctionForBonus4("white");
            backgroundToChange4.classList.add('white');
        } else if (loggedKey === "3") {
            myFunctionForBonus4("blue");
            backgroundToChange4.classList.add('blue');
        } else if (loggedKey === "4") {
            myFunctionForBonus4("orange");
            backgroundToChange4.classList.add('orange');
        } else if (loggedKey === "5") {
            myFunctionForBonus4("original");
        }
    }
    inputField.value = "";
};

//Onderstaande code heb ik nodig voor de bonus opdrachten: zorgen dat óók als je met menu4 de kleur veranderd hebt, je bij menu2 de juiste radiobutton gechecked is. En hetzelfde nog eens voor de radiobuttons bij menu3.
function myFunctionForBonus4(color) {
    var radioBtnToCheck2 = document.getElementById('radiobtn2-' + color);
    radioBtnToCheck2.checked = true;

    var radioBtnToCheck3 = document.getElementById('radiobtn3-' + color);
    radioBtnToCheck3.checked = true;
};