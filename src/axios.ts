import axios from 'axios';


const instanceAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Typy':'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":"PUT, POST, DELETE, GET"
    }
})
//axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
//delete axios.defaults.headers.common["Authorization"];
// var config = {
//     headers: {'Authorization': "bearer " + token}
// };

// var bodyParameters = {
//    key: "value"
// }

// Axios.post( 
//   'http://localhost:8000/api/v1/get_token_payloads',
//   bodyParameters,
//   config
// ).then((response) => {
//   console.log(response)
// }).catch((error) => {
//   console.log(error)
// });
export default instanceAxios;