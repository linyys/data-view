import axios from 'axios'

const base_url = import.meta.env.BASE_URL
const request = (url: string, method: string, data: { [key: string]: never }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let query = '?'
  if (method === 'GET') {
    for (const key in data) {
      query += `${key}=${data[key]}&`
    }
    url += query
  }
  return axios({
    baseURL: base_url,
    url,
    method
  })
}

export { request }