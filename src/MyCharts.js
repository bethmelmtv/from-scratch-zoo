import React from 'react';
import { VictoryBar, VictoryChart, VictoryPie, VictoryTheme } from 'victory';

export default function MyCharts() {
  return (
    <div>
      <VictoryChart domainPadding={40}>
        <VictoryBar
          width={500}
          data={[
            { x: 1, y: 5000 },
            { x: 2, y: 16500 },
            { x: 3, y: 14250 },
            { x: 4, y: 19000 },
          ]}
          // x="quarter"
          // y="earnings"
        />
      </VictoryChart>

      <VictoryPie
        width={500}
        data={[
          { quarter: 'Spring', earnings: 5000 },
          { quarter: 'Summer', earnings: 15600 },
          { quarter: 'fall', earnings: 14250 },
          { quarter: 'winter', earnings: 19000 },
        ]}
        x="quarter"
        y="earnings"
      />
    </div>
  );
}
