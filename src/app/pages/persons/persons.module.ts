import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

import { PersonsComponent } from './persons.component';
import { PieChartService } from 'app/pages/charts/models/services/pie-chart.service';
import { EmployeeService } from 'app/models/services/employee.service';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
  ],
  declarations: [
    PersonsComponent,
  ],
  providers: [
    EmployeeService,
  ],
})
export class PersonsModule { }
