import axios from "axios";

export const postProduct = async(token, data) => {
    const res = await axios.post('products', data, { 'headers': { 'Authorization': `Bearer ${token}` } })
    return res.data;
}

export const getProductsBySeller = async(sellerId) => {
    const res = await axios.get(`products/seller/${sellerId}`);
    return res.data;
}