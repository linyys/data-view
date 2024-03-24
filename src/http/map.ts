import { request } from "@/utils/axios"

interface Data {
  data: Array<{
    name: string,
    data: object[]
  }>
}
const getData = (): Promise<Data> => {
  return new Promise((resolve, reject) => {
    request('/map/getData', 'POST', {}).then(({ data }) => {
      resolve(data)
    }).catch(err => {
      reject(err)
    })
  })
}

export {
  getData
}