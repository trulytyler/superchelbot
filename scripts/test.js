module.exports = function(robot) {
    robot.hear(/chel/, function(res) {
       res.send("http://i.imgur.com/1ZbCPqz.jpg");
     });
robot.respond(/i am/, function(res){
     var iam = ["*cool brah*", "*that's chel*", "I want a popscicle cause I need to cool down, cause you so chel!"];
     return res.send(res.random(iam));
	});
};