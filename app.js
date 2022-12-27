// 1) What does the following code return?
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


// 2) What does this return?
let planetFacts = {
    numPlanet: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanet, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}


// 3) What does the following code return?

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // "Your name is Alejandro and you like purple"
getUserData({firstName: "Melissa"}) // 'Your name is Melissa and you like green'
getUserData({}) // 'Your name is undefined and you like green'



// 4) What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // 'Maya'
console.log(second); // 'Marisa'
console.log(third); // 'Chi'




// 5) What does the following code return/print?

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]




// 6) What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]



//  7)  Object Destructuring
let obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const {numbers: {a, b}} = obj





// 8) Array Swap
let arr = [1,2]
[2,1] = [1,2];


// 9) raceResults()
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
 