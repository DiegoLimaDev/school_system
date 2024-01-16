import axios from 'axios';

//class para consumir e transportar os dados da api
export class useHttp {
  static async get(url: string) {
    const data = await axios.get(url).then((res) => res.data);

    return data;
  }

  static async post(url: string, obj: unknown) {
    return await axios.post(url, obj);
  }

  static async patch(url: string, obj: unknown) {
    return await axios.patch(url, obj);
  }
}
('');
