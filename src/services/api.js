import axios from 'axios';

const api = axios.create({
  baseURL:'https://coronavirus-monitor.p.rapidapi.com/coronavirus',
  json: true,
  headers:{
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      'x-rapidapi-key': '1615fcb04fmsh261b92a0f747b9fp1bfa30jsn59296fb8a715'
  }
});

export default api;