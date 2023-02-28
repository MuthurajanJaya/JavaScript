// Symbol Type
Symbol("foo") !== Symbol("foo")
const foo = Symbol()
const bar = Symbol()
typeof foo === "symbol"
typeof bar === "symbol"
let obj = {}
obj[foo] = "foo"
obj[bar] = "bar"
JSON.stringify(obj) // {}
Object.keys(obj) // []
Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [ foo, bar ]

// Global Symbol
Symbol.for("app.foo1") === Symbol.for("app.foo1")
const foo1 = Symbol.for("app.foo1")
const bar2 = Symbol.for("app.bar1")
Symbol.keyFor(foo) === "app.foo1"
Symbol.keyFor(bar) === "app.bar1"
typeof foo1 === "symbol"
typeof bar1 === "symbol"
let obj = {}
obj[foo1] = "foo1"
obj[bar1] = "bar1"
JSON.stringify(obj) // {}
Object.keys(obj) // []
Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [ foo, bar ]