
const person = {
    name: {
        first: "Bob",
        last: "Smith",
    },
    age: 32,
    bio() {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name.first}.`);
    },
    eyes: "Blue"
};

console.log(person.name);
console.log(person.name.first);
console.log(person.name.last);
console.log(person.age);
person.bio();
person.introduceSelf();

console.log(person["age"])
console.log(person["name"]["first"], person["name"]["last"])

function logProperty(propertyName) {
    console.log(person[propertyName]);
}
logProperty("name")
logProperty("age")

console.log(person.age = "45")
// console.log(person.age)
person["name"]["first"] = "Jai"
console.log(person["name"])
logProperty("name")

person["eyes"] = "hazel";
person.farewell = function () {
    console.log("Bye everybody!");
};
console.log(person["eyes"]);
person.farewell();

const myDataName = "height";// const myDataName = nameInput.value;
const myDataValue = "1.75m";// const myDataValue = nameValue.value;
person[myDataName] = myDataValue;// person[myDataName] = myDataValue; height=1.75m
console.log(person.height);

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();

//Object Prototypes
const myObject = {
    city: "Jai",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet();


const myDate = new Date();
let object = myDate;

do {
    object = Object.getPrototypeOf(object);
    console.log(object);
} while (object);