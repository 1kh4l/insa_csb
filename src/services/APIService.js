import axios from 'axios';

const API_URL = 'http://localhost:4000';

export default class APIService {
    getTodos = () => {
      console.log('Arriving here');
      const url = `${API_URL}/items`;
      return axios.get(url).then(response => response.data);
    }
}
