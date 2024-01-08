import { Component } from '@angular/core';
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarController, BarElement);

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {
  chart:any;
  

  constructor() {}

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    const data = this.generateData();

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((point) => point.x),
        datasets: [
          {
            label: 'Statistic',
            data: data.map((point) => point.y),
            backgroundColor: (context: { chart: any }) => {
              const chart = context.chart;
              const { ctx, chartArea } = chart;
              if (!chartArea) {
                  return null;
              }
              return this.getGradient(chart);
          },
            borderWidth: 1,
            categoryPercentage: 0.2,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'X-axis',
            },
          },
          y: {
            type: 'linear',
            title: {
              display: true,
              text: 'Y-axis',
            },
          },
        },
      },
    });
  }

  getGradient(chart: any): string | CanvasGradient {
    const { ctx, chartArea: { top, bottom }, scales: { x, y } } = chart;
    const gradientSegment = ctx.createLinearGradient(0, bottom, 0, top);

    gradientSegment.addColorStop(0, '#000087');
    gradientSegment.addColorStop(0.2, '#000087');
    gradientSegment.addColorStop(0.2, '#2c2cf2');
    gradientSegment.addColorStop(0.5, '#2c2cf2');
    gradientSegment.addColorStop(0.5, '#6e6eff');
    gradientSegment.addColorStop(1, '#6e6eff');

    return gradientSegment;
  }
  
  generateData() {
    const data = [];
    let xValue = 20;
    let yValue = 80;
  
    for (let i = 0; i < 5; i++) {
      data.push({ x: xValue.toFixed(0), y: yValue });
      xValue += 5;
      yValue += 10;
    }
  
    return data;
  }
  
}
