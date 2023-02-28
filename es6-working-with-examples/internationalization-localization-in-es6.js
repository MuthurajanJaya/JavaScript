// Number Formatting
var numEng = new Intl.NumberFormat("en-US")
var numDe = new Intl.NumberFormat("de-DE")
console.log(numEng.format(1234567.89) === "1,234,567.89")//true
console.log(numDe.format(1234567.89) === "1.234.567,89")//true

// Currency Formatting
var l10nUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
var l10nGBP = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })
var l10nEUR = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })
console.log(l10nUSD.format(100200300.40) === "$100,200,300.40")//true
console.log(l10nGBP.format(100200300.40) === "£100,200,300.40")//true
console.log(l10nEUR.format(100200300.40) === "100.200.300,40 €")//false

// Date/Time Formatting
var numEN = new Intl.DateTimeFormat("en-US")
var numDE = new Intl.DateTimeFormat("de-DE")
console.log(numEN.format(new Date("2015-01-02")) === "1/2/2015")//true
console.log(numDE.format(new Date("2015-01-02")) === "02.01.2015")//false

// Collation
// in German,  "ä" sorts with "a"
// in Swedish, "ä" sorts after "z"
var list = ["ä", "a", "z"]
var numDE = new Intl.Collator("de")
var numSV = new Intl.Collator("sv")
numDE.compare("ä", "z") === -1
numSV.compare("ä", "z") === +1
console.log(list.sort(numDE.compare)) // [ "a", "ä", "z" ]
console.log(list.sort(numSV.compare)) // [ "a", "z", "ä" ]