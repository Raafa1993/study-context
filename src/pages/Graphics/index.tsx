
// import Chart from '../../components/GraphicsChart';
import CardDefaul from '../../components/Cards/CardDefault';
import AreaCharts from '../../components/GraphicsChart/AreaChart';
import ChartDonut from '../../components/GraphicsChart/ChartDonut';
import { Container, SectionChartDonuts, SectionCards } from './styles';

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
      fill: "rgba(45, 45, 45, 1)",
      currency: 120.00,
      isDonut: false,
      isPadded: false,
    },
    {
      id: 2,
      name: 'B',
      value: 25,
      fill: "rgba(0, 170, 242, 1)",
      currency: 80.00,
      isDonut: true,
      isPadded: false,
    },
    {
      id: 3,
      name: 'C',
      value: 35,
      fill: "rgba(143, 68, 253, 1)",
      currency: 20.00,
      isDonut: true,
      isPadded: true,
    },
  ]

  return (
    <Container>

      <SectionCards>
        {[0,1,2,3,4,5].map((row) => (
          <CardDefaul
            title='Currency'
            subtitle='$3.5K'
          />
        ))}
      </SectionCards>

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

        <ChartDonut 
          data={data2}
          dataKey="value"
        />

      </SectionChartDonuts>
        
      <AreaCharts />


    </Container>
  )
}
