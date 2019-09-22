import { Injectable } from '@angular/core';
import { Employee } from 'app/models/data/employee-data';
import { EmployeeData } from 'app/models/data/employee-data';
import { of as observableOf, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class EmployeeService implements EmployeeData {
// tslint:disable:trailing-comma
  private apiUrl = 'http://iminister.site/rest/';
  private chartDataUrl = 'persons';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  add(entity: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl + this.chartDataUrl, entity, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  delete(id: number) {
    return this.http.get<Employee>(this.apiUrl + this.chartDataUrl + '/' + id + '/delete', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl + this.chartDataUrl, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  getOne(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.apiUrl + this.chartDataUrl + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  update(entity: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl + this.chartDataUrl + '/' + entity.id, entity, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // tslint:disable-next-line:no-console
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
