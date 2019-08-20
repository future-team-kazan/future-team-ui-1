import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import {NbDatepickerModule} from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {TestPageModule} from './test-page/test-page.module';
import {TicketsModule} from './tickets/tickets.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbDatepickerModule,
    MiscellaneousModule,
    TestPageModule,
    TicketsModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
