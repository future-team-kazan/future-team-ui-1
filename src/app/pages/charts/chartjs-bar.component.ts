import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-chartjs-bar',
  template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsBarComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      const dataFromService = {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [{
            label: 'Series 1',
            data: [65, 59, 80, 81, 56, 55, 40],
          },
          {
            label: 'Series 2',
            data: [28, 48, 40, 19, 86, 27, 90],
          }],
      };

      this.data = {
        labels: dataFromService.labels,
        datasets: [{
          data: dataFromService.datasets[0].data,
          label: dataFromService.datasets[0].label,
          backgroundColor: NbColorHelper.hexToRgbA(colors.primaryLight, 0.8),
        }, {
          data: dataFromService.datasets[1].data,
          label: dataFromService.datasets[1].label,
          backgroundColor: NbColorHelper.hexToRgbA(colors.infoLight, 0.8),
        }],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
