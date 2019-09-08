import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

import { ChartsComponent } from './charts.component';
import { ChartjsPieComponent } from './chartjs-pie.component';
import { ChartjsBarComponent } from './chartjs-bar.component';
import { ChartjsLineComponent } from './chartjs-line.component';
import { ChartModule } from 'angular2-chartjs';
import { HttpClientModule } from '@angular/common/http';
import { PieChartService } from 'app/pages/charts/models/services/pie-chart.service';

const components = [
  ChartjsPieComponent,
  ChartjsBarComponent,
  ChartjsLineComponent,
];

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    ChartModule,
    HttpClientModule,
  ],
  declarations: [
    ChartsComponent,
    ...components,
  ],
  providers: [
    PieChartService,
  ],
})
export class ChartsModule { }
