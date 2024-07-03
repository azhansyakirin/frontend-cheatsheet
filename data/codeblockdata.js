let variableDeclaration = [
    /* Functions ==> */
    {
        id: "functions",
        title: "Functions",
        content: `/* ES5 function */
function boo() {
console.log("Hi there!")
}
boo() //Hi there!

/* ES6 function */
const boo = () => console.log("Hi there!"); 
boo()//Hi there!

function checkAge() {
    let name = prompt("How old are you?");
  
    if (age < 18) {
      alert("Sorry you're not allowed to enter!");
      return;
    }

    alert("Yes you can enter!");
  }
  
checkAge();
`
    },

    /* Data Types */
    {
        id: "data-types",
        title: "Data Types",
        content: `let stringText = "John String"; //string\nlet num = 7; //number\nlet boo = true //boolean, can be true or false;`,
    },

    /* Arrays */
    {
        id: "arrays",
        title: "Arrays",
        content: `let arr = [🍕,🍔,🍟];
let arr2 = [🦪,🍣,🍤];
let arr3 = [🦪,🍣,[🍤]];

arr.length; //3
arr.push(🌭); //[🍕,🍔,🍟,🌭] ---addition from behind
arr.unshift(🌭); //[🌭,🍕,🍔,🍟] ---addition from front
arr.pop(); //[🍕,🍔] ---remove last element
arr.shift(); //[🍔,🍟] ---remove first element
arr.at(🍔); //[🍟] ---remove all element before till selected element
arr.indexOf(🍟); //2 ---position of the element in the array
arr.includes(🍟); //true ---return boolean result
arr.filter(emoji => emoji === 🍟); //🍟 ---return element that match
arr.every(emoji => emoji === 🍟); //false ---every element must match
arr.some(emoji => emoji === 🍟); //true ---any of element must match
arr.fill(🌭); //[🌭,🌭,🌭] ---every element change to specified value if no index defined
arr.fill(🌭,1); //[🍕,🌭,🌭] ---every element start from the index
arr.fill(🌭,1,2); //[🍕,🌭,🌭] ---every element from start index till end index will be changed
arr.reduce(); // ---
arr.concat(arr2); //[🍕,🍔,🍟,🦪,🍣,🍤] ---new element will be added to the array
arr.reverse(); //[🥨,🍿,🍟,🍔,🍕] ---reverse the element in the array
arr.join('-'); //[🥨-🍿-🍟-🍔-🍕] ---add '-' in every element
arr3.flat(); //[🦪,🍣,🍤] ---flatten all the element in the array
arr.find((emoji, i) => i === 1); //[🍔] ---return element of index 1
arr.findIndex(emoji => emoji === 🍔); //1 ---return the index of element
arr.toString(); //🍕,🍔,🍟 ---turn array element to string
arr.slice(1,3); // ---
arr.splice();
arr.map((emoji,i)=>{ 
    const newEmoji = emoji.concat(🥩); 
    return newEmoji;
}); //[🍕🥩,🍔🥩,🍟🥩] ---map will return new array
Array.isArray(arr); //true ---check if arr is an array
Array.from(); // ---
`
    }
];

let variableExample = [
    {
        id: "variables",
        title: "Variables",
        description: "Variables can be declared in different ways.",
        content: `/* Static Variable */
const greet = "Hello"; //string
const number = 1996; //number
const bool = true; //boolean
const generation = ['Teen','Adult'] //array
const car = {
    name: "Tesla Model 3 Performance"
    category: "Electric Vehicle",
    horsepower: 320,
    isOnDiscount: true,
}, //object

/* Mutable Variable */
let movie = "John Wick";
movie = "John Wook";
console.log(movie); //John Wook
`
    }
];

let conditionalsExample = [
    {
        id: "conditionals",
        title: "Conditionals",
        description: "",
        content: `const language = "English";

language === "Malay" //false
language !== "Malay" //true

true && true //true
true && false //false
true || false //true`
    }
]

export {
    variableDeclaration,
    variableExample,
    conditionalsExample,
}