import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8070/api',
    header:{
        'content-Type' : 'application/json'
    }
});