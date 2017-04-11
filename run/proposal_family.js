var Lib = require("./lib.js");
var step = Lib.Steps.small;
var chapter = Lib.Steps.big;
var sleep = require("sleep");

Lib.Logs.logPhase();
sleep.sleep(step);

Lib.Logs.title("INTRODUCE TO THE FAMILY");
sleep.sleep(step);

console.log("   Booking boat in Tahoe...");
sleep.sleep(step);
console.log("   No boats available...");
sleep.sleep(step);
console.log("   Booking hot tub in Tahoe...");
sleep.sleep(chapter);
Lib.Logs.bottom();
