import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    mode : "no-cors",
	headers: {
      "Content-Type": "application/json", 
    } 
})

export default axiosInstance; 