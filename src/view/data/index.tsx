import { useExtract } from '@/hooks/useExtract';
import Chart from '@/components/Chart';
import "@/mock/index"
export default function Data() {
    const data2 = [{
        time: new Date().getSeconds(),
        value: 3,
    }, {
        time: new Date().getSeconds(),
        value: 6,
    },
    {
        time: new Date().getSeconds(),
        value: 9,
    },
    {
        time: new Date().getSeconds(),
        value: 12,
    }]
    const { value, time } = useExtract(data2, ['value', 'time'])

    const series = {
        name: '1',
        type: 'bar',
        data: value
    }

    const option: echarts.EChartOption = {
        title: {
            text: 'title1'
        },
        tooltip: {},
        xAxis: {
            data: [...time]
        },
        yAxis: [
            {
                type: 'value',
                scale: true,
                max: 30,
                min: 0,
            }
        ],
        series: [series]
    }
    return (
        <div>
            <div style={{ width: 'auto', height: '600px' }}>
                <Chart option={option} />
            </div>
        </div>
    )
}