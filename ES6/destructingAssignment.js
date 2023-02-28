// Array Matching
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]

// Object Matching, Shorthand Notation
var { op, lhs, rhs } = getASTNode()

// Object Matching, Deep Matching
var { op: a, lhs: { op: b }, rhs: c } = getASTNode()

// Object and Array Matching, Default Values
var obj = { a: 1 }
var list = [ 1 ]
var { a, b = 2 } = obj
var [ x, y = 2 ] = list

// Parameter Context Matching

function f ([ name, val ]) {
    console.log(name, val)
}
function g ({ name: n, val: v }) {
    console.log(n, v)
}
function h ({ name, val }) {
    console.log(name, val)
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })

// Fail-Soft Destructing
var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3, d ] = list
a === 7
b === 42
c === 3
d === undefined