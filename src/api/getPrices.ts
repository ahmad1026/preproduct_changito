import axios from "axios";


export const getPrices = async()=>{

    const result = await axios.get('https://api.changeto.digital/api/rate')

    return result.data



}