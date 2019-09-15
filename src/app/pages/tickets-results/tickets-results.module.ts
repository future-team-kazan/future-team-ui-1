import { NgModule } from '@angular/core';
import {
  NbSelectModule,
  NbDatepickerModule,
  NbButtonModule,
  NbListModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';

import {
  NbCardModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

import { TicketsResultsComponent } from './tickets-results.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbSelectModule,
    NbDatepickerModule,
    NbButtonModule,
    FormsModule,
    NbListModule,
  ],
  declarations: [
    TicketsResultsComponent,
  ],
  providers: [
  ],
  bootstrap: [
    TicketsResultsComponent,
  ],
})
export class TicketsResultsModule { }
