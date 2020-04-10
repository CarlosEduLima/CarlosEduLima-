import axios from 'axios';

const api = axios.create({
  baseURL:'https://coronavirus-monitor.p.rapidapi.com/coronavirus',
  json: true,
  headers:{
      'x-rapidapi-host': 'your api key',
      'x-rapidapi-key': 'your api key'
  }
});

export default api;