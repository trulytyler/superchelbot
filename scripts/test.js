module.exports = function(robot) {
   robot.respond(/practice/, function(res){
     var spells = ["*felo'mena'SHA!*", "*felo'mena'SHAW!*", "_felo... mena... SHA!_", "*malore!*", "_felomenashaaa!_"];
     return res.send(res.random(spells));
	});
};