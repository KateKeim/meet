/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts"

export const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([])
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const colors = ['#C76270', '#44779F', '#FDAFAB', '#415F69', '#CCDA9C']

    useEffect(() => {
        setData(getData());
    }, [`${events}`]);

    const getData = () => {
        const data = genres.map(genre => {
            const filteredEvents = events.filter(event => event.summary.includes(genre))
            return {
                name: genre,
                value: filteredEvents.length
            }
        })

        return data;
    }

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return percent ? (
            <text
                x={x}
                y={y}
                fill='#fff'
                // stroke='#fff'
                style={{ textShadow: '0px 0px 5px rgba(1, 1, 1, 255' }}
                textAnchor={x > cx ? 'start' : 'end'}
                fontSize={14}
                dominantBaseline='central'
            >
                {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
            </text>
        ) : null;
    };

    return (
        <ResponsiveContainer width="98%" height={400}>
            <PieChart width={730} height={250}>
                <Pie
                    data={data}
                    dataKey="value"
                    outerRadius="80%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    fill="#353187"
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                    }
                </Pie>
                {
                    data.map((entry, index) => (
                        <Legend 
                            key={`legend-${index}`} 
                            verticalAlign="bottom" 
                            align="bottom"
                            wrapperStyle={{
                                WebkitTextStroke: `1px`,
                                background: 'rgba(255, 255, 255, 0.5',
                                textShadow: '0px, 0px, 5px rgba(0, 0, 0, 255)'
                            }}
                        />
                    ))
                }
            </PieChart>
        </ResponsiveContainer>
    )
}

export default EventGenresChart;