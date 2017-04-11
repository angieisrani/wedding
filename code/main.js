require("familyApproval");
require("ring");
require("Sonia");

var Proposal = function() {
    this.status = this.STATUS.READY;

    this.meet_the_family = new Tahoe("Boat");
    this.meet_the_family.games.exclude = ["Guestures"];

    this.impress = new Purchase("Cookbook");
    this.seek_approval = new Flight("LA", 1);

    this.crew = new Drone({style: "camera"});
    this.propose = new Flight("Switzerland", 2);
};

Proposal.prototype = {
    STATUS: {
        READY,
        MEET_FAMILY,
        IMPRESS_FAMILY,
        SEEK_APPROVAL,
        SWTIZERLAND,
        ENGAGED
    },

    buy_ring: function() {
        var style = "criss-cross";
        var size = "4";
    }
};

modules.export = Proposal;
