// You are having certain things which I wanna buy and you are providing it when I ask it and says something if you don't have it this is where switch works
let day = "Sunday"

switch (day) {
    case "Monday":
        console.log("7:am");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("4:am");
        break;
    case "Friday":
        console.log("8:am");
        break;
    case "Saturday":
    case "Sunday":
        console.log("10:am");
        break;
    default:
        console.log("Enter the correct day");
}
console.log("Bye")