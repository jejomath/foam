import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/json'


export function getRecord(table, params) {
    if ('id' in params) {
        return axios.get(`http://localhost:8000/api/${table}/${params.id}/`)
            .then((result) => (result.data))
    } else {
        return axios.get(`http://localhost:8000/api/${table}/`, {params: params})
            .then((result) => (result.data[0]))
    }
}

export function getRecords(table, params) {
    return axios.get(`http://localhost:8000/api/${table}/`, {params: params})
        .then((result) => (result.data))
}

export function saveRecord(table, record) {
    if (record.id) {
        return axios.put(`http://localhost:8000/api/${table}/${record.id}/`, record)
            .then((result) => (result.data))
    } else {
        return axios.post(`http://localhost:8000/api/${table}/`, record)
        .then((result) => (result.data))
    }
}