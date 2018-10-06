import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from '../shared/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  single: any[];
  multi: any[];

  // view: any[] = [850, 550];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Value';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }
}
