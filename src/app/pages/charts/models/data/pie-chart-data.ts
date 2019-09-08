import { Observable } from 'rxjs';

export interface PieChartItem {
  name: string;
  value: number;
}

export interface ChartDataItem {
  label: string;
  data: number[];
}

export interface ChartData {
  labels: string[];
  dataset: ChartDataItem[];
}

export abstract class PieChartData {
  abstract getItems(): Observable<ChartData>;
  abstract getChartData(): Observable<ChartData>;
}
