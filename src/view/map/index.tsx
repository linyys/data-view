import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import china from '@/assets/map/china.json'
import guangxi from '@/assets/map/guangxi.json'
import { getData } from '@/http';
import "@/mock/index"
import { EChartsType } from 'echarts';
type Option = echarts.EChartOption<echarts.EChartOption.Series> | echarts.EChartsResponsiveOption
interface MapData {
  name: string,
  data: object
}
function Map() {
  const map = useRef<HTMLDivElement | null>(null)
  const lastMap = 'china'
  const myChart = useRef<EChartsType | null>(null)
  echarts.registerMap("china", china)
  echarts.registerMap("广西壮族自治区", guangxi)
  window.addEventListener('keydown', (ev) => {
    if (ev.key === 'Backspace') {
      setMap(mapOptionInit(lastMap))
    }
  })

  const setMap = (option: Option) => {
    if (myChart.current) {
      myChart.current.setOption(option)
    }
  }
  const mapInit = () => {
    myChart.current = echarts.init(map.current)
    myChart.current.on('click', function (params: { name: string; }) {
      if (echarts.getMap(params.name)) {
        anStart()
        setTimeout(() => {
          setMap(mapOptionInit(params.name))
        }, 1000)
      }
    })
  }
  const mapOptionInit = (map: string, data?: MapData[]) => {
    const option: Option = {
      backgroundColor: '#404a59',
      geo: {
        map: map,
        zoom: 1,
      },
    }
    if (data) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      option.geo.regions = regionColorInit(data)
    }
    return option
  }
  const regionColorInit = (data: MapData[]) => {
    const regions = data.map((item) => {
      return {
        name: item.name,
        itemStyle: {
          areaColor: 'red'
        },
        data: item.data
      }
    })
    return regions
  }
  const anStart = () => {
    myChart.current?.setOption({
      geo: {
        zoom: 10
      },
    })
  }
  useEffect(() => {
    mapInit()
    getData().then(({ data }) => {
      setMap(mapOptionInit(lastMap, data))
    }).catch(err => {
      console.log(err)
    })
  })

  return (
    <div ref={map} style={{ width: '100%', height: '600px' }}>Map</div>
  )
}

export default Map