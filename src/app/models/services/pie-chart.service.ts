import {Injectable} from '@angular/core';
import {PieChartData, PieChartItem} from '../data/pie-chart-data';
import {Observable} from 'rxjs';

@Injectable()
export class PieChartService extends PieChartData {
  getItems(): Observable<PieChartItem[]> {
    return undefined;
  }

}
