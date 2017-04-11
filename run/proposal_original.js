var Lib = require("./lib.js");
var step = Lib.Steps.small;
var chapter = Lib.Steps.big;
var sleep = require("sleep");

console.log("\n   \x1b[1m\x1b[45mInitiating proposal sequence...\x1b[0m\n\n");
sleep.sleep(step);

Lib.Logs.title("Meeting the Family");
sleep.sleep(step);
console.log("   Booking boat in Tahoe...");
sleep.sleep(step);
console.log("   No boats available...");
sleep.sleep(step);
console.log("   Booking hot tub in Tahoe...\n\n");
sleep.sleep(chapter);

Lib.Logs.title("Seeking Approval");
sleep.sleep(step);
console.log("   Dowloading cookbooks...");
sleep.sleep(step);
console.log("   Purchasing tickets to LA...\n\n");
sleep.sleep(chapter);

Lib.Logs.title("Proposal");
sleep.sleep(step);
console.log("   Purchasing tickets to Switzerland...");
sleep.sleep(step);
console.log("   Loading drones...");
sleep.sleep(step);
console.log("   Booking camera crew...\n\n");

sleep.sleep(step);
console.log("\n\n   \x1b[1m\x1b[45mInitiation Complete.\x1b[0m\n");

Lib.Logs.bottom();
