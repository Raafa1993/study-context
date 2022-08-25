import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
  } from "recharts";

import {Container} from "./styles";

const ChartDonut = ({
    data,
    dataKey,
    isPadded,
    isDonut
}: any) => {
    console.log(data)
    return (
        <Container>

            <div className="sectionInfo">
                <span>{data.map((row: any) => row.currency)}</span>
            </div>

            <ResponsiveContainer
                width={170}
                height="100%"
            >
                <PieChart>
                    <Pie
                        data={data}
                        dataKey={dataKey}
                        startAngle={90}
                        endAngle={450}
                        outerRadius={80}
                        paddingAngle={isPadded ? 8 : undefined}
                        innerRadius={isDonut ? 64 : 'null'}
                    >
                        {data.map((entry: any) => (
                            <Cell 
                                key={entry.name}
                                fill={entry.fill}
                                stroke="0"
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default ChartDonut