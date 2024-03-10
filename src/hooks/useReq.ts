import axios from 'axios'

const base_url = import.meta.env.BASE_URL
const useReq = (url: string, method: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data: any) => {
    let query = '?'
    if (method === 'GET') {
      for (const key in data) {
        query += `${key}=${data[key]}&`
      }
      url += query
    }
    axios({
      baseURL: base_url,
      url,
      method
    })
  }
}

export { useReq }