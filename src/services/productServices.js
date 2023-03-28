import axios from "axios";

export const postProduct = async(token, data) => {
    const res = await axios.post('products', data, { 'headers': { 'Authorization': `Bearer ${token}` } })
    return res.data;
}