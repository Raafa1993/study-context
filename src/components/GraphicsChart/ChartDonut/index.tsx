import { useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Sector,
  } from "recharts";

import {Container} from "./styles";

const renderActiveShape = (props: any) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill
    } = props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          opacity={1}
          cursor="pointer"
        />
      </g>
    );
  };

const ChartDonut = ({
    data,
    dataKey,
    isPadded,
    isDonut
}: any) => {
    const [activePie, setActivePie] = useState(0)
    const handleOnMouseEnter = (_:any, index: any) => {
        setActivePie(index)
    }

    return (
      <Container>
        <div className="sectionInfo">
          <span>Progress</span>
        </div>

        <ResponsiveContainer width={"100%"} height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey={dataKey}
              startAngle={90}
              endAngle={450}
              outerRadius={80}
              paddingAngle={isPadded ? 8 : undefined}
              innerRadius={isDonut ? 64 : "null"}
              onMouseEnter={handleOnMouseEnter}
              activeIndex={activePie}
              activeShape={renderActiveShape}
            >
              {data.map((entry: any) => (
                <Cell
                  key={entry.name}
                  fill={entry.fill}
                  opacity={0.8}
                  stroke="0"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Container>
    );
}

export default ChartDonut