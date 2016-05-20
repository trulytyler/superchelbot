//working below
// module.exports = function(robot) {
//     robot.hear(/chel/, function(res) {
//        return res.send("http://i.imgur.com/1ZbCPqz.jpg");
//      });
// };
module.exports = function(robot) {
    robot.hear(/chel/, function(res) {
       res.send("http://i.imgur.com/1ZbCPqz.jpg");
     });
robot.respond(/i am/, function(res){
     var iam = ["*cool brah*", "*the chelest dawh around*", "The fanciest brah"];
     return res.send(res.random(iam));
	});
};
