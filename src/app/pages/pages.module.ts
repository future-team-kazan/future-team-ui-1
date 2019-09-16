import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {TestPageModule} from './test-page/test-page.module';
import {ChartsModule} from './charts/charts.module';
import {PersonsModule} from './persons/persons.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    TestPageModule,
    ChartsModule,
    PersonsModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
