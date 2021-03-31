const axios = require('axios');
const url = require('url');

const ROOT_URL = 'https://api.boundlexx.app/api/v2';

const getAllWorlds = (cb) => {
    let URL = ROOT_URL + '/worlds';

    let query = {
        offset: 0
    };

    URL += `/?${new url.URLSearchParams(query).toString()}`;

    axios.get(URL).then(e => cb(e.data));
}

const getWorldInfo = (worldId, cb) => {
    let URL = `${ROOT_URL}/worlds/${worldId}`;
    console.log(URL);
    axios.get(URL).then(e => cb(e.data));
}


module.exports = {
    getAllWorlds,
    getWorldInfo
}