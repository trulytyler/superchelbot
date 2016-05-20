module.exports = function(robot) {
    robot.hear(/chel/, function(res) {
       return res.send("http://i.imgur.com/1ZbCPqz.jpg");
     });
    robot.respond(/is it a (weekend|holiday)\s?\?/i, function(msg){
        var today = new Date();

        msg.reply(today.getDay() === 0 || today.getDay() === 6 ? "YES" : "NO");
    });
};
//test
