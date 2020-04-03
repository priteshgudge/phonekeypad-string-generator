const dataReader = require("../data/file-reader");
const numberWordsMapsArrayMap = require("../data/processData").numberWordsMapsArrayMap;

const dataRoutes = (app, fs) => {
    app.get('/showdata', (req, res) => {
        res.send(JSON.stringify(dataReader.wordsArray));
    });

    app.get('/numbermaps', (req, res) => {
        res.send(numberWordsMapsArrayMap);
    });
};
module.exports = {
    dataRoutes:dataRoutes
};
