// object.assign
const firstObject = {
    domain: "LAMP"
}
const secondObject = {
    name: "Jai",
    age: 22,
    position: "Trainee"
}
Object.assign(firstObject, secondObject)
console.log(firstObject)

// object.entries()
console.log(Object.entries(secondObject))

// object.getOwnPropertyDescriptors()
console.log(Object.getOwnPropertyDescriptors(secondObject))

// Array.includes()
const firstArray = ['Jai', 'Anu', 1, 2, 32, 46, 'Janu', 'Ajay']
const secondArray = firstArray.includes('Janu')
console.log(secondArray)// output--True

// arr.find()
console.log(firstArray.find(x => x === 'Anu'))//Anu
console.log(firstArray.find(x => x < 32))//1

//arr.findIndex()
console.log(firstArray.findIndex(x => x === 'Jai'))//0

// arr.values()
const iterator = firstArray.values()
for (const value of iterator) {
    console.log(value)// Prints the value in array
}

// arr.entries()
const iterators = firstArray.entries()
for (const value of iterators) {
    console.log(value)// Prints the value in array
}

// arr.from()
const firstString = 'Hello user'
console.log(Array.from(firstString))

// string.repeat()
console.log(firstString.repeat(2))

// string.includes()
console.log(firstString.includes('llo'))

// Number.isNaN()
console.log(Number.isNaN(NaN))//true
console.log(Number.isNaN('NaN'))//false
console.log(Number.isNaN(undefined))//false
console.log(Number.isNaN(new Date()))//false

// Number.isInteger()
let number = 12
console.log(Number.isInteger(number))//true
console.log(Number.isInteger(firstString))//false

// Number.isSafeInteger()
console.log(Number.isSafeInteger(456))//true
console.log(Number.isSafeInteger(456.123))//false
console.log(Number.isSafeInteger(true))//false
console.log(Number.isSafeInteger(0 / 0))//false

// Number.isFinite()
console.log(Number.isFinite(number))//true