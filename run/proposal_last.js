var Lib = require("./lib.js");
var step = Lib.Steps.small;
var chapter = Lib.Steps.big;
var sleep = require("sleep");

Lib.Logs.logPhase();
sleep.sleep(step);

Lib.Logs.title("PROPOSAL");
sleep.sleep(step);

console.log("   Purchasing tickets to Switzerland...");
sleep.sleep(step);
console.log("   Loading drones...");
sleep.sleep(step);
console.log("   Booking camera crew...");

sleep.sleep(chapter);
console.log("\n\n   \x1b[1m\x1b[45mInitiation Complete.\x1b[0m");

Lib.Logs.bottom();
