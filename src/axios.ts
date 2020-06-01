import axios from 'axios';


const instanceAxios = axios.create({
    baseURL: 'http://localhost:3100',
    headers: {
        'Content-Type':'application/json',
        // "Access-Control-Allow-Methods":"PUT, POST, DELETE, GET",
        // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    }
})
// axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
//delete axios.defaults.headers.common["Authorization"];
// var config = {
//     headers: {'Authorization': "bearer " + token}
// };


export default instanceAxios;