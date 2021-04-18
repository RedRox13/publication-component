import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  @Input() data: any;
  @Input() shorten: boolean;

  isSmallScreen$: Observable<BreakpointState>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.shorten = false;
  }

  ngOnInit(): void {
    this.isSmallScreen$ = this.breakpointObserver.observe('(max-width: 699px)');
  }
}
