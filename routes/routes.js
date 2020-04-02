const dataReader = require('../data/file-reader.js');
const dataProcessor = require('../core/processData.js');


const appRouter = (app, fs) => {

    // we've added in a default route here that handles empty routes
    // at the base API url
    app.get('/ping', (req, res) => {
        res.send({"status":"pong"});
    });

    app.get('/showdata', (req, res) => {
        res.send(JSON.stringify(dataReader.wordsArray));
    });

    app.get('/numbermaps', (req, res) => {
        res.send(dataProcessor.numberWordsMapsArrayMap);
    });

    // run our user route module here to complete the wire up
    // userRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;
