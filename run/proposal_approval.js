var Lib = require("./lib.js");
var step = Lib.Steps.small;
var chapter = Lib.Steps.big;
var sleep = require("sleep");

Lib.Logs.logPhase();
sleep.sleep(step);

Lib.Logs.title("SEEK APPROVAL");
sleep.sleep(step);

console.log("   Purchasing round-trip ticket to LA...");
sleep.sleep(step);
//console.log("   Warning: Departing and returning flights too close in time...");
//sleep.sleep(step);
console.log("   Apprehending Sonia's phone...");
sleep.sleep(chapter);

Lib.Logs.bottom();
