import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { useExtract } from '@/hooks/useExtract';
interface ChartProps {
  xAxis: string[];
  yAxis?: object;
  data: { label: string, values: object[] }[];
  keys: string;
}
function Chart({ xAxis, yAxis = {}, data, keys }: ChartProps) {
  const chart = useRef(null);
  const sData = useExtract(data, keys)
  const series: echarts.EChartOption.Series[] = []
  // for(let key in sData) {
  //     series.push({
  //         name: key,
  //         type: 'line',
  //         data: sData[key]
  //     })
  // }
  sData.forEach((item) => {
    series.push({
      name: item.label,
      type: 'line',
      data: item.values,
      smooth: true
    })
  })
  useEffect(() => {
    if (chart.current) {
      const myChart = echarts.init(chart.current);
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: [...xAxis]
        },
        yAxis,
        series,
      });
    }
  })
  return (
    <div ref={chart} style={{ width: '100%', height: '100%' }} />
  )
}

export default function Data() {
  const data1 = [{
    time: 1111,
    value: 5,
    name: 'test',
    test: 2
  }, {
    time: 1111,
    value: 10,
    name: 'test',
    test: 4
  },
  {
    time: 1111,
    value: 20,
    name: 'test',
    test: 22
  },
  {
    time: 1111,
    value: 30,
    name: 'test',
    test: 8
  }]
  const data2 = [{
    time: 1111,
    value: 3,
  }, {
    time: 1111,
    value: 6,
  },
  {
    time: 1111,
    value: 9,
  },
  {
    time: 1111,
    value: 12,
  }]
  return (
    <div>
      <div style={{ width: 'auto', height: '600px' }}>
        <Chart xAxis={['test1', 'test2', 'test3', 'test4']} data={[{ label: 'test1', values: data1 }, { label: 'test1', values: data2 }]} keys={'value'} />
      </div>
    </div>
  )
}