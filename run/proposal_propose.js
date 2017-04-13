var Lib = require("./lib.js");
var step = Lib.Steps.small;
var chapter = Lib.Steps.big;
var sleep = require("sleep");

//Lib.Logs.logPhase();
var name = "Starting final phase..."
console.log("\n\n\n   \x1b[1m\x1b[45m" + name + "\x1b[0m\n");
sleep.sleep(step);

Lib.Logs.title("PROPOSE");
sleep.sleep(step);

console.log("   Hope she says yes...");
sleep.sleep(chapter);

//console.log("\n\n   \x1b[1m\x1b[45mInitiation Complete.\x1b[0m");

Lib.Logs.bottom();
