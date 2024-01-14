import axios from 'axios';

export class useHttp {
  static async get(url: string): Promise<unknown> {
    const data = await axios.get(url).then((res) => res.data);

    return data;
  }

  static async post(url: string, obj: unknown) {
    return await axios.post(url, obj);
  }
}
