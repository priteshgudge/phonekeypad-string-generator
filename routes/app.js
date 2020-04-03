const appPkg = require('../app/stringCombinationGenApp');
const appRoutes = (app, fs) => {
    app.post('/recommend-user-friendly-words', (req, res) => {

        const requestData = req.body;
        console.log(`Request Data: ${JSON.stringify(requestData)}`);
        if(requestData && requestData.ph && requestData.ph.length > 0){
            responseObjects = appPkg.findArrayofMatchingStrings(requestData.ph);
            res.send({objects:responseObjects});
        }else{
            res.send({error: "Invalid Data"})

        }

    });
};
module.exports = {
    appRoutes:appRoutes
};
