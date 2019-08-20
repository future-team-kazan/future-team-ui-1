import { NgModule } from '@angular/core';
import {
  NbSelectModule,
  NbDatepickerModule,
  NbButtonModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';

import {
  NbCardModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

import { TicketsComponent } from './tickets.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbSelectModule,
    NbDatepickerModule,
    NbButtonModule,
    FormsModule,
  ],
  declarations: [
    TicketsComponent,
  ],
  providers: [
  ],
})
export class TicketsModule { }
