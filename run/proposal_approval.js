var Lib = require("./lib.js");
var step = Lib.Steps.small;
var chapter = Lib.Steps.big;
var sleep = require("sleep");

Lib.Logs.logPhase();
sleep.sleep(step);

Lib.Logs.title("SEEKING APPROVAL");
sleep.sleep(step);

console.log("   Dowloading cookbooks...");
sleep.sleep(step);
console.log("   Purchasing tickets to LA...");
sleep.sleep(chapter);

Lib.Logs.bottom();
