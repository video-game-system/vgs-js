describe("VGSSpec", function() {
    var VGS = require("../lib/").VGS;
    var context;
    it("constructor", function() {
        context = new VGS(); 
        expect(context).not.toBeUndefined(); 
    });
});
