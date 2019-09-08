import {Injectable} from '@angular/core';
import {ChartData, PieChartData, PieChartItem} from 'app/pages/charts/models/data/pie-chart-data';
import { of as observableOf, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PieChartService implements PieChartData {

  private apiUrl = 'https://iminister.site/api/';
  private chartDataUrl = 'getalldata.php';

  private chartDataFile = 'app/pages/charts/models/services/pie-chart.json';

  // private data = {
  //   labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
  //   datasets: [{
  //     label: 'Доходы',
  //     data: [65, 59, 80]
  //   }]
  // };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }


  // getItems(): Observable<ChartData> {
  //   return observableOf(this.data);
  // }


  getChartData(): Observable<ChartData> {
    // console.log('Source : ' + this.apiUrl + this.chartDataUrl);
    // console.log(this.http.get<ChartData>(this.apiUrl + "getdatabyyear.php?year=2018", this.httpOptions));
    // this.http.get(this.apiUrl);
    return this.http.get<ChartData>(this.apiUrl + this.chartDataUrl, this.httpOptions)
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
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
