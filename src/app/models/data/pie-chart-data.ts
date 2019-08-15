import { Observable } from 'rxjs';

export interface PieChartItem {
  name: string;
  value: number;
}

export abstract class PieChartData {
  abstract getItems(): Observable<PieChartItem[]>;
}
