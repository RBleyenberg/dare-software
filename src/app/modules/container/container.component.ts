import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { State } from '../modules.state';
import { routeAnimations } from '../../core/core.module';

@Component({
  selector: 'dare-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {
 // isAuthenticated$: Observable<boolean>;

  modules = [
    { link: 'dashboard', label: 'modules.dashboard.title' },
    { link: 'crm', label: 'modules.crm.title' }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
  //  this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}