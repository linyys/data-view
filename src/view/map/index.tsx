import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import china from '@/assets/map/china.json'
function Map() {
  const map = useRef(null)
  echarts.registerMap("china", china)
  useEffect(() => {
    const myChart = echarts.init(map.current)
    myChart.setOption({
      backgroundColor: '#404a59',
      geo: {
        map: 'china',
        label: {
          show: true,
          color: '#fff'
        }
      }
    })
  }, [map])
  return (
    <div ref={map} style={{width: '1200px', height: '800px'}}>Map</div>
  )
}

export default Map