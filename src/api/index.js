import axios from "axios";

const url = "http://localhost:5000"

export const saveEmail = async (email) => await axios.post(`${url}/save`, { "email": email });
export const verifyEmail = async (email) => await axios.post(`${url}/verify`, { "email": email });
export const updateShare = async (email) => await axios.post(`${url}/share`, { "email": email });