const axios = require('axios');

const statuses = async () => {

    const statusesarray = [];
    const URLs = [
        "https://8szqd6w4s277.statuspage.io/api/v2/status.json", 
        "https://zjttvm6ql9lp.statuspage.io/api/v2/status.json", 
        "https://frsctv3lx5sn.statuspage.io/api/v2/status.json", 
        "https://gpkpyklzq55q.statuspage.io/api/v2/status.json",
        "https://kctbh9vrtdwd.statuspage.io/api/v2/status.json",
        "https://mxfydrt8b8xw.statuspage.io/api/v2/status.json",
        "https://www.facebook.com/platform/api-status/"
    ];

    const responses = await Promise.all(URLs.map(url => axios.get(url)));

    responses.forEach((response) => {
        if(response.status == 200 && response.data != null){
            // console.log(response)
            if(response.config.url.includes("statuspage.io")){
                const obj = {
                    name: response.data.page.name, 
                    status: response.data.status,
                }
                statusesarray.push(obj); 
            }else {
                console.log(response)
                const obj = {
                    name: "Facebook",
                    status: response.data.current.subject
                }
                statusesarray.push(obj); 
                }   
            }
    });


    return statusesarray;
}

module.exports = async function (context) {
    try {
        const data = await statuses();
        context.res = {
            body: data,
        };
    } catch (error) {
        context.res = {
            body: {
                message: 'Error has occured'
            },
        };
    }
};