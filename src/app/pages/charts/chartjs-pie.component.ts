import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { PieChartService } from 'app/pages/charts/models/services/pie-chart.service';
import { ChartData } from 'app/pages/charts/models/data/pie-chart-data';

@Component({
  selector: 'ngx-chartjs-pie',
  template: `
    <chart type="pie" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsPieComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;
  dataFromServer: any;

  constructor(private theme: NbThemeService, private dataSource: PieChartService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      dataSource.getChartData().subscribe((data) =>  {
        this.dataFromServer = data;
        // console.log(this.dataFromServer);

        this.data = {
          labels: this.dataFromServer.labels.slice(0, 4),
          datasets: [{
            data: this.dataFromServer.dataset[0].data.slice(0, 4),
            backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight],
          }],
        };

      });



      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
