module.exports = function(robot) {
    robot.hear(/haircut/, function(res) {
       res.send("http://i.imgur.com/xggJpWL.jpg");
     });

};