import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

import { ChartsComponent } from './charts.component';
import { ChartjsPieComponent } from './chartjs-pie.component';
import { ChartModule } from 'angular2-chartjs';

const components = [
  ChartjsPieComponent,
];

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    ChartModule,
  ],
  declarations: [
    ChartsComponent,
    ...components,
  ],
  providers: [
  ],
})
export class ChartsModule { }
