import axios from 'axios'
const URL_API = process.env.REACT_APP_API_URL;

export const makeRequest = async (message)=>{
    const {data} = await axios.post(URL_API, message)
    return data
}