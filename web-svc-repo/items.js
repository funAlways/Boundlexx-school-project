const axios = require('axios');
const url = require('url');

const ROOT_URL = 'https://api.boundlexx.app/api/v2';

const getAllItems = (queryData, cb) => {
    let URL = ROOT_URL + '/items';
    let query = {
        lang:"english",
        search: queryData.query,
        offset: queryData.offset
    };
    console.log(query);
    URL += `/?${new url.URLSearchParams(query).toString()}`;

    axios.get(URL).then(e => cb(e.data));
}

const getItemInfo = (gameId, cb) => {
    let URL = `${ROOT_URL}/items/${gameId}`;
    let query = {
        lang:"english"
    };
    URL += `/?${new url.URLSearchParams(query).toString()}`;
    axios.get(URL).then(e => cb(e.data));
}


module.exports = {
    getAllItems,
    getItemInfo
}