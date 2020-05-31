import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f33a484cf794d08d0148764789aaba32';

export const fetchWewther  = async (query)=>{
    const {data} = await axios.get(baseUrl, {
        params : {
            q: query,
            units: 'metric',
            APPID : apiKey
        }
    })
    return data
}