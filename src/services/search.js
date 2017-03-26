import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});


export async function search(s) {
  return instance.get('/', { params: { s } });
}

export function info(i) {
  return instance.get('/', { params: { plot: 'full', i } });
}
