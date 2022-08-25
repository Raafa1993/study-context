
// import Chart from '../../components/GraphicsChart';
import AreaCharts from '../../components/GraphicsChart/AreaChart';
import ChartDonut from '../../components/GraphicsChart/ChartDonut';
import { Container, SectionChartDonuts } from './styles';

export default function Graphics() {

  const dataArea = [
    {
      name: "J",
      a: 10,
      b: 20,
    }
  ];

  const areas = [
    { key: "a", fill: "#e431ff" },
    { key: "b", fill: "#8f44fd" },
  ]

  const data2 = [
    {
      id: 1,
      name: 'A',
      value: 20,
      fill: "#2d2d2d",
      currency: 120.00,
      isDonut: false,
      isPadded: false,
    },
    {
      id: 2,
      name: 'B',
      value: 25,
      fill: "#00aaf2",
      currency: 80.00,
      isDonut: true,
      isPadded: false,
    },
    {
      id: 3,
      name: 'C',
      value: 35,
      fill: "#8f44fd",
      currency: 20.00,
      isDonut: true,
      isPadded: true,
    },
  ]

  return (
    <Container>
      <SectionChartDonuts>

        <ChartDonut 
          data={data2}
          dataKey="value"
        />

        <ChartDonut 
          data={data2}
          dataKey="value"
          isDonut
        />

        <ChartDonut 
          data={data2}
          isDonut
          isPadded
        />
      </SectionChartDonuts>
        
      <AreaCharts />


    </Container>
  )
}
