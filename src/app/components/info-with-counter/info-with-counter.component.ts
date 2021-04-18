import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-with-counter',
  templateUrl: './info-with-counter.component.html',
  styleUrls: ['./info-with-counter.component.scss']
})
export class InfoWithCounterComponent {
  @Input() name: string;
  @Input() counter: number;
  @Input() icon: string;
}
