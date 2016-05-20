module.exports = function(robot) {
    robot.hear(/chel/, function(res) {
       return res.send("http://i.imgur.com/1ZbCPqz.jpg");
     });
    robot.respond(/practice/i, function(res){
    	var spells = ["*hello*", "*i love you*"]
    	return res.send(res.random(spells));
};
