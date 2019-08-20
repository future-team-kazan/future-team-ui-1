import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { TestPageComponent } from './test-page/test-page.component';
import { TicketsComponent } from './tickets/tickets.component';

// hint Rout-ы ангуляра
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'test-page',
      component: TestPageComponent,
    },
    {
      path: 'tickets',
      component: TicketsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
