let colors = ['yellow', 'blue', 'red', 'orange'];

console.log("while method");
let w = 0;
while (w < colors.length) {
    console.log(colors[w]);
    w++;
}

console.log("");
console.log('for method');
for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log("");
console.log('array method (for each)');
colors.forEach(element => console.log(element));

console.log("");
console.log('looping through an object')
const object1 = {
    a: 'somestring',
    b: 42
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
