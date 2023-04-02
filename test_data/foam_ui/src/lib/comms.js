import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/json'

const basePath = 'http://localhost:8000'
const tokenKey = 'token'

export function getRecord(table, params) {
    if ('id' in params) {
        return axios.get(`${basePath}/api/${table}/${params.id}/`)
            .then((result) => (result.data))
    } else {
        return axios.get(`${basePath}/api/${table}/`, {params: params})
            .then((result) => (result.data[0]))
    }
}

export function getRecords(table, params) {
    return axios.get(`${basePath}/api/${table}/`, {params: params})
        .then((result) => (result.data.results))
}

function cleanRecord(record) {
    return Object.assign({}, ...Object.keys(record).map((k) => ({[k]: (record[k] && typeof record[k] === 'object') ? record[k].id : record[k]})))
}

export function saveRecord(table, record) {
    if (record.id) {
        return axios.put(`${basePath}/api/write_${table}/${record.id}/`, cleanRecord(record))
            .then((result) => (result.data))
    } else {
        return axios.post(`${basePath}/api/write_${table}/`, cleanRecord(record))
        .then((result) => (result.data))
    }
}

export function logIn(username, password) {
    return axios.post(`${basePath}/auth/token/login/`, {username: username, password: password})
        .then((result) => {
            axios.defaults.headers.common["Authorization"] = 'Token ' + tokenValue();
            localStorage.setItem(tokenKey, result.data.auth_token)
        })
}

export function logOut() {
    axios.defaults.headers.common["Authorization"] = '';
    localStorage.setItem(tokenKey, '')
}

export function loggedIn() {
    const token = localStorage.getItem(tokenKey);
    if (token) {
        axios.defaults.headers.common["Authorization"] = 'Token ' + token;
        return true
    } else { 
        axios.defaults.headers.common["Authorization"] = '';
        return false
    }
}

export function tokenValue() {
    return localStorage.getItem(tokenKey)
}
