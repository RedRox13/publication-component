import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rectangular-button',
  templateUrl: './rectangular-button.component.html',
  styleUrls: ['./rectangular-button.component.scss']
})
export class RectangularButtonComponent {
  @Input() name: string;
  @Input() color: string;
}
