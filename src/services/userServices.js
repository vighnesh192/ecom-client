import axios from "axios"

export const getProfileDetailsService = async (id, token) => {
    const res = await axios.get(`users/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
    return res.data;
}