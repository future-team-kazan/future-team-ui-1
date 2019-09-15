import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tickets-results',
  templateUrl: './tickets-results.component.html',
})

export class TicketsResultsComponent {
  tickets: any[] =
  [{cityDeparture: 'Ульяновск', cityArrival: 'Москва', dataStart: 1405405678756, dataFinish: 1405409678756, amount: 1},
  {cityDeparture: 'Ульяновск', cityArrival: 'Казань', dataStart: 1405409678756, dataFinish: 1405405678756, amount: 1}];
}
