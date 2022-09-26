import axios from "axios"

const url = 'http://192.168.0.5:3000/'

export const api = axios.create({
    baseURL: url
})