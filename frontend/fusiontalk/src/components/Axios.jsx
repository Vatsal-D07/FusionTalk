import axios from "axios";
import { ACCESS_TOKEN } from "../constants";

const baseUrl='http://127.0.0.1:8000/'

const AxiosInstance=axios.create({
    baseURL:baseUrl,
    timeout:5000,
    headers:{
        "Content-Type":"application/json",
        accept:"application/json"
    }
})

AxiosInstance.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
        return config
    },
    (error)=>{
        return Promise.reject(error);
    }
)


export default AxiosInstance;