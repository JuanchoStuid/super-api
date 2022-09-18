import axios from "axios";


const baseURL=`https://mi-api-de-super-heroes.herokuapp.com/`;
const heroeApi = axios.create({baseURL});

export default heroeApi;