const config=require('./config.json')
const superagent=require('superagent')

const _fetch = (command) => {
    return superagent.get(`${config.url}/${command}`)
        .then(response => response.body)
        .catch(error => error.response.body)
}

exports.search = (keyword) => {
    return _fetch(`positions.json?search=${keyword}`)
}

exports.getItem = (id) => {
    return _fetch(`positions/${id}.json`)
}