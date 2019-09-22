import {Component, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import {EmployeeService} from 'app/models/services/employee.service';
import { Employee } from 'app/models/data/employee-data';

@Component({
  selector: 'ngx-test-page',
  templateUrl: './persons.component.html',
})
export class PersonsComponent implements OnInit {
  // themeSubscription: any;
  dataSource: EmployeeService;
  dataFromServer: Employee[];

  constructor(private theme: NbThemeService, private _dataSource: EmployeeService) {
    // this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
    //
    // });
    this.dataSource = _dataSource;
  }

  settings = {
    // mode: 'external',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
      delete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
      },
      fio: {
        title: 'Full Name',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  // constructor(private service: SmartTableData) {
  //   const data = this.service.getData();
  //   this.source.load(data);
  // }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.dataSource.delete(event.newData).subscribe((data) => {
        console.log(data);
      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    console.log(event.newData);
    this.dataSource.add(event.newData).subscribe((data) => {
      console.log(data);
    });
    event.confirm.resolve();
  }

  onEditConfirm(event): void {
    console.log(event.newData);
    this.dataSource.update(event.newData).subscribe((data) => {
      console.log(data);
    });
    event.confirm.resolve();
  }

  delete(event): void {
    console.log(event);
  }

  edit(event): void {
    console.log(event);
  }

  create(event): void {
    console.log(event);
  }

  ngOnInit() {
    this.dataSource.getAll().subscribe((data) => {
      this.dataFromServer = data;
      console.log(data);
      this.source.load(data);
    });
  }

}
