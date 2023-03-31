import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://dtmoney-ignite-eduardo.vercel.app/',
})