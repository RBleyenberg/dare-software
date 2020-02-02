import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'dare-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrmComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;


  constructor( ) {}

  ngOnInit() {

  }

}