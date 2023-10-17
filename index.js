let cats = ["Milo", "Otis", "Garfield"] 

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name) {
    cats.push(name);
}

destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Call the function to append a cat to the cats array
destructivelyAppendCat("Bob");

// Output the updated cats array
console.log(cats);

function destructivelyRemoveLastCat (name){
    cats.pop(name)
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat (name){
    cats.shift(name)
}
destructivelyRemoveFirstCat()





function appendCat(name) {
   
    let newCatsArray = [...cats, name];

    // Return the new array with the appended cat
    return newCatsArray;
}

// Call the function with the new cat's name
let updatedCatsArray = appendCat("Broom");


console.log(updatedCatsArray); 


console.log(cats); 

function prependCat (name) {
    let catarray = [name, ...cats]
    return catarray
}
    let newCatsArray = prependCat("Arnold");

    console.log(newCatsArray);

function removeLastCat (){
    let catNewArray = cats.slice(0 , -1)

    return catNewArray
}

let removedCat = removeLastCat()
console.log (removedCat)
console.log(cats)

function removeFirstCat (){
    let cattArray = cats.slice(1)

    return cattArray
}

let newCat = removeFirstCat()
console.log (newCat)
console.log(cats)