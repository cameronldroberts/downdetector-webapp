const axios = require('axios');

const statuses = async () => {

    const statusesarray = [];
    const URLs = [
        "https://8szqd6w4s277.statuspage.io/api/v2/status.json", 
        "https://zjttvm6ql9lp.statuspage.io/api/v2/status.json", 
        "https://frsctv3lx5sn.statuspage.io/api/v2/status.json", 
        "https://gpkpyklzq55q.statuspage.io/api/v2/status.json",
        "https://kctbh9vrtdwd.statuspage.io/api/v2/status.json",
        "https://mxfydrt8b8xw.statuspage.io/api/v2/status.json"
    ];

    const responses = await Promise.all(URLs.map(url => axios.get(url)));

    responses.forEach((response) => {
        if(response.status == 200 && response.data != null){
        const obj = {
            name: response.data.page.name, 
            status: response.data.status,
        }
        statusesarray.push(obj);
        }
        // }else {
        //     const obj ={
        //         name: response.URLs,
        //         status: "Error getting status for this service"
        //     }
        // } 
    });


    return statusesarray;
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};