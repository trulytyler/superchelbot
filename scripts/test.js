module.exports = function(robot) {
    robot.hear(/chel/, function(res) {
       return res.send("http://i.imgur.com/1ZbCPqz.jpg");
     });
};
