import axios from 'axios';

const serverAPI = {
  async get({ url }: { url: string }) {
    const { data } = await axios.get(url);
    return data;
  },
  async post({ url, data }: { url: string; data: {} }) {
    const { data: fetchedData } = await axios.post(url, data);
    return fetchedData;
  }
};
export default serverAPI;
