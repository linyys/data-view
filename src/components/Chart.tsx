import { useEffect, useRef } from "react";
import * as echarts from 'echarts';

export default function Chart({ option }: { option: echarts.EChartOption }) {
    const chart = useRef(null);
    let myChart: echarts.EChartsType
    useEffect(() => {
        myChart = echarts.init(chart.current);
        myChart.setOption(option);
    }, [chart])
    return (
        <div ref={chart} style={{ width: '100%', height: '100%' }} />
    )
}