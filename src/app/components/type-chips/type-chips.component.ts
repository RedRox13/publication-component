import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-chips',
  templateUrl: './type-chips.component.html',
  styleUrls: ['./type-chips.component.scss']
})
export class TypeChipsComponent {
  @Input() types: string[];
}
