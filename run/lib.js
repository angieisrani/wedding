var Steps = {
    small: 2,
    big: 5
};

var Logs = {
    logPhase: function() {
        console.log("\n\n\n   \x1b[1m\x1b[45mStarting next phase...\x1b[0m\n");
    },
    bottom: function() {
        console.log("\n\n\n\n");
    },
    title: function(name) {
        console.log("   \x1b[44m" + name + "\x1b[0m\n");
    },
};

module.exports.Steps = Steps;
module.exports.Logs = Logs;
