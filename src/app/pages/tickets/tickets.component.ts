import { Component } from '@angular/core';

export class TicketComponent {
   /*departureCity: string;
  arrivalCity: string;
  dateStart: Date;
  dateFinish: Date;
  amount: number;*/
  constructor(
    public departureCity: string,
    public arrivalCity: string,
    public dateStart: Date,
    public dateFinish: Date,
    public amount: number,
    ) {
         /*this.departureCity = departureCity;
         this.arrivalCity = arrivalCity;
         this.dateStart =  dateStart;
         this.dateFinish = dateFinish;
         this.amount = amount;*/
    }
  /*queryData(departureCity: string, arrivalCity: string, dateStart: Date, dateFinish: Date, amount: number) {
    this.departureCity = departureCity;
    console.log(departureCity);
  }*/
}
@Component({
  selector: 'ngx-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['tickets.component.scss'],
})
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
export class TicketsComponent {
  cities: string[] = ['Ульяновск', 'Москва', 'Казань'];
  requests: TicketComponent[] = [];
  queryData(departureCity: string, arrivalCity: string, dateStart: Date, dateFinish: Date, amount: number) {
    this.requests.push(new TicketComponent(departureCity, arrivalCity, dateStart, dateFinish, amount));
 }
}
