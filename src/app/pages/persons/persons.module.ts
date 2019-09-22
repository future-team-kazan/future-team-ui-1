import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

import { PersonsComponent } from './persons.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EmployeeService } from 'app/models/services/employee.service';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    PersonsComponent,
  ],
  providers: [
    EmployeeService,
  ],
})
export class PersonsModule { }
