import { mock } from 'mockjs'

mock('/map/getData', {
  'data': [{
    'name': '广西壮族自治区',
    'value': 300,
    'data': [
      {
        'name': '南宁',
        'value': 100
      },
      {
        'name': '桂林',
        'value': 200
      }]
  }, {
    'name': '北京市',
    'value': 340,
  }]
})