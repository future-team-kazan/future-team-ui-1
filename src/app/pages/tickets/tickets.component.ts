import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tickets',
  templateUrl: './tickets.component.html',
})
export class TicketsComponent {
  cities: string[] = ['Ульяновск', 'Москва', 'Казань'];
  departureCity: string;
  arrivalCity: string;
  dateStart: Date;
  dateFinish: Date;
  amount: number;
  constructor(
    ) {

    }
  queryData(departureCity: string, arrivalCity: string, dateStart: Date, dateFinish: Date, amount: number) {
    this.departureCity = departureCity;
    /*console.log(departureCity);*/
  }
}
/*@Component({
  selector: 'my-tickets',
  template:
   `<div>
        <div class="form-group">
           <label>Откуда</label>
           <select class="form-control" name="depature" [(ngModel)]="depature">
             <option *ngFor="let city of depature" [value]="city">
                 {{city}}
             </option>
           </select>
        </div>
    </div>`
})*/
/*export class TicketComponentRequest{
  request: TicketsComponent[] = [];
  queryData(departureCity: string, arrivalCity: string, dateStart: Date, dateFinish: Date, amount: number){
    this.request.push (new TicketsComponent( departureCity, arrivalCity, dateStart, dateFinish, amount));
 }
}*/
