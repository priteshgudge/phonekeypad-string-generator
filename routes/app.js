const appPkg = require('../app/stringCombinationGenApp');
const appRoutes = (app, fs) => {
    app.post('/recommend-user-friendly-words', (req, res) => {

        const requestData = req.body;
        console.log(`Request Data: ${JSON.stringify(requestData)}`);
        if(requestData && requestData.ph && requestData.ph.length > 0){
            responseObject = appPkg.findArrayofMatchingStrings(requestData.ph);
            responseObjectJson = {
                ...responseObject,
                success:true
            }
            res.send(responseObject);
        }else{
            res.send({"message": "Invalid Data",
                    success:false})

        }

    });
};
module.exports = {
    appRoutes:appRoutes
};
