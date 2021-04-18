import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss']
})
export class FavoriteButtonComponent {
  isActive: boolean = false;

  toggleActive(): void { this.isActive = !this.isActive }
}