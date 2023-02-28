//type conversion
let num="6"
console.log(num,typeof num)

num=Number(num)
console.log(num, typeof(num))

num=6
console.log(num,typeof num)

num=String(num)
console.log(num,typeof num)

//type coersion
let coersioning
console.log(coersioning,typeof coersioning)

coersioning=8
console.log(coersioning,typeof coersioning)

coersioning += " "
console.log(coersioning,typeof coersioning)

coersioning -= 2
console.log(coersioning,typeof coersioning) //This is type Coersion

coersioning=!coersioning
console.log(coersioning,typeof coersioning)

console.log(Boolean(0))

//template literals ${}
let num1=8
let num2=5
let result=num1+num2

console.log(`The addition of ${num1} and ${num2} is ${result}`)