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

import { TicketsComponent } from './tickets.component';
// import { TicketsRoutingModule } from './tickets-routing.module';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbSelectModule,
    NbDatepickerModule,
    NbButtonModule,
    FormsModule,
    NbListModule,
    // TicketsRoutingModule,
  ],
  declarations: [
    TicketsComponent,
  ],
  providers: [
  ],
  bootstrap: [
    TicketsComponent,
  ],
})
export class TicketsModule { }
