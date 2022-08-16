import axios from "axios";

export const marketaux = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  params: {
    api_token: process.env.NEXT_PUBLIC_API_KEY,
    limit: '10'
  },
  headers: {
    'Accept': 'application/json',
  }
});
