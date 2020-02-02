import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dare-dashboard',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Widget', cols: 4, rows: 1 },
          { title: 'Widget', cols: 4, rows: 1 },
          { title: 'Widget', cols: 4, rows: 1 },
          { title: 'Widget', cols: 4, rows: 1 }
        ];
      }

      return [
        { title: 'Widget', cols: 1, rows: 1 },
        { title: 'Widget', cols: 1, rows: 1 },
        { title: 'Widget', cols: 1, rows: 1 },
        { title: 'Widget', cols: 1, rows: 1 }
      ];
    })
  );


  constructor(private breakpointObserver: BreakpointObserver ) {}

  ngOnInit() {

  }

}