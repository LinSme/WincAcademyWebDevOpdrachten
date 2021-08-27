console.log("");
console.log("Opdracht 16. Reference types: Objects & Arrays");
console.log("");

console.log("Deel 1 - objecten")
let person = {
    name: "Linda",
    age: 37
};
console.log(person);

console.log("");
console.log("In dot notatie:");
console.log(person.name);
console.log(person.age);

console.log("");
console.log("In bracket notatie:");
console.log(person['name']);
console.log(person['age']);

let evaluations = (7, 10, 9)
console.log("");
console.log("Evaluations:");
console.log(evaluations); // Antwoord is 9, de laatste waarde die was defined.

console.log("");
console.log("Deel 2: arrays");
console.log("");

let myArray = ['groen', 'blauw', 'rood'];
console.log(myArray);

console.log("");
console.log("lengte van dit array is:");
console.log(myArray.length);

console.log("");
console.log("het eerste element in dit array is:");
console.log(myArray[0]);

console.log("");
console.log("het laatste element in dit array is:");
console.log(myArray[myArray.length - 1]);

console.log("");
console.log("4e element toegevoegd (een kleur)");
myArray.push('geel');
console.log(myArray);

console.log("");
console.log("5e element toegevoegd (een cijfer)");
myArray.push(5);
console.log(myArray);

console.log("");
console.log("6e element toegevoegd (een object)");
let myObject = {
    greeting: "Hi ik ben een object"
}
myArray.push(myObject);
console.log(myArray);

console.log("");
console.log("Log alleen de begroeting van het object");
console.log(myObject.greeting);

console.log("");
console.log("Deel 3 - real life object");
console.log("");

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]

console.log("Naam kattensoort 3:", catBreeds[2].name);
console.log("Energylevel kattensoort 1", catBreeds[0].energy_level);
console.log("Eerste temperament kat 2:", catBreeds[1].temperament[0]);
console.log("Laatste temperament kat 3:", catBreeds[2].temperament[catBreeds[2].temperament.length - 1]);
console.log("Favo voedsel van kat 3:", catBreeds[2].food[0]); //ik krijg deze niet voor elkaar....

console.log("");
