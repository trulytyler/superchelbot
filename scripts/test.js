module.exports = function(robot) {
    robot.hear(/chel/, function(res) {
       return res.send("http://i.imgur.com/1ZbCPqz.jpg");
     });
};
robot.respond(/practice/, function(res){
     var spells = ["*felo'mena'SHA!*", "*felo'mena'SHAW!*", "_felo... mena... SHA!_", "*malore!*", "_felomenashaaa!_"];
     return res.send(res.random(spells));
	});