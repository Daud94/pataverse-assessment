/* eslint-disable no-console */
let port = process.env.PORT || 3000;
// let debug = require('./config').debug;
let server = require("./app.js");
const db = require("./database/models");
// const redisClient = require('./src/utils/redisClient');
server.listen(port, () => {
    //    console.log(`app listening on assigned port`);
    //  var test = redisClient.redis.ping(function (err, result) {
    //     console.log(result);
    // });
    db.sequelize
        .authenticate()
        // .sync({ force: true })
        .then(() => {
            console.log("Connection has been established successfully.");
        })
        .catch((err) => {
            console.error("Unable to connect to the database:", err);
        });
});