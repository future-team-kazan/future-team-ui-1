import { Component } from '@angular/core';
import {NbThemeService} from '@nebular/theme';
import {EmployeeService} from 'app/models/services/employee.service';

@Component({
  selector: 'ngx-test-page',
  templateUrl: './persons.component.html',
})
export class PersonsComponent {
  themeSubscription: any;
  dataFromServer: any;

  constructor(private theme: NbThemeService, private dataSource: EmployeeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

    });

    dataSource.getAll().subscribe((data) => {
      this.dataFromServer = data;
      console.log(data);
    });
  }

}
