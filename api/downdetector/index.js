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
        "https://mf6lzdpt63q3.statuspage.io/api/v2/status.json"
    ];

    const responses = await Promise.all(URLs.map(url => axios.get(url)));

    responses.forEach((response) => {
        if (response.status == 200 && response.data != null) {
            const obj = {
                name: response.data.page.name,
                status: response.data.status,
            }
            statusesarray.push(obj);
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
