function minDeterminator() {
    let minDetermined = prompt("Je gaat nu bepalen wat de range is waarbinnen een getal geraden moet worden (hou het spannend door de range niet te klein te maken!)" + "\r\n" + "\r\n" + "Wat is het kleinste getal dat je wil raden?", "typ een cijfer, e.g. 1");
    return minDetermined;
};

function maxDeterminator(minNumber) {
    let maxDetermined = prompt("En wat is het grootste getal?", "typ een cijfer, e.g. 30");
    if (parseInt(maxDetermined) - parseInt(minNumber) <= 7) {
        maxDetermined = prompt("Kom nou, maak het iets spannender door een grotere range te nemen." + "\r\n" + "\r\n" + "Neem bijvoorbeeld " + (parseInt(minNumber) + 7) + " als grootste getal");
    }
    return maxDetermined;
};

function randomNumberGenerator(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

function guessingTheNumber(attemptNumber, minNumber, maxNumber) {
    if (attemptNumber === 1) {
        let guessedNumber = prompt("Poging nummer 1 " + "\r\n" + "\r\n" + " Voer een getal in tussen " + minNumber + " en " + maxNumber + " om te beginnen met raden");
        return guessedNumber;
    } else {
        let guessedNumber = prompt("Poging nummer " + attemptNumber + "\r\n" + "\r\n" + " Voer een ander getal in tussen " + minNumber + " en " + maxNumber + " om opnieuw te raden");
        return guessedNumber;
    }
};

function startNumberGuessingGame() {
    let name = prompt("Welkom! " + "\r\n" + "\r\n" + "Wat is je naam?");

    if (name != null) {
        alert("Hey " + name);

        let minNumber = minDeterminator();
        if (minNumber != null) {

            let maxNumber = maxDeterminator(minNumber);
            if (maxNumber != null) {
                let randomNumber = randomNumberGenerator(minNumber, maxNumber);

                alert("Je gaat nu het random gegenereerde getal proberen te raden. " + "\r\n" + "\r\n" + "Je hebt hiervoor 5 pogingen.");

                let attemptNumber = 1;
                let exitWhileLoop = false;
                while (attemptNumber <= 5 && exitWhileLoop === false) {
                    let guessedNumber = parseInt(guessingTheNumber(attemptNumber, minNumber, maxNumber));

                    if (Number.isNaN(guessedNumber) === true) { //pressed cancel
                        exitWhileLoop = true;
                    } else if (guessedNumber === randomNumber) {
                        exitWhileLoop = true;
                        alert("Je hebt het goed!" + "\r\n" + "\r\n" + "Het nummer was inderdaad " + guessedNumber)
                        alert("Gefeliciteerd, je hebt het spel gewonnen!");
                    } else {
                        exitWhileLoop = false;
                        alert(guessedNumber + " is niet het juiste antwoord");
                        if (attemptNumber === 5) {
                            alert("Het juiste antwoord was " + randomNumber + "\r\n" + "\r\n" + "Je heb dit niet weten te raden " + "\r\n" + "\r\n" + " Je hebt het spel verloren");
                        }
                    }
                    attemptNumber++;
                }

                alert("Dag " + name + "\r\n" + "\r\n" + "Tot de volgende keer!");
            }
        }
    }
};