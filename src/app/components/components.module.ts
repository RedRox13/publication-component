import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationComponent } from './publication/publication.component';
import { TypeChipsComponent } from './type-chips/type-chips.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { VersionChipComponent } from './version-chip/version-chip.component';
import { FavoriteButtonComponent } from './favorite-button/favorite-button.component';
import { InfoWithCounterComponent } from './info-with-counter/info-with-counter.component';
import { RectangularButtonComponent } from './rectangular-button/rectangular-button.component';
import { MatDividerModule } from '@angular/material/divider';
import { AuthorsComponent } from './authors/authors.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    PublicationComponent,
    TypeChipsComponent,
    VersionChipComponent,
    FavoriteButtonComponent,
    InfoWithCounterComponent,
    RectangularButtonComponent,
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    LayoutModule
  ],
  exports: [
    PublicationComponent,
    TypeChipsComponent,
    VersionChipComponent,
    FavoriteButtonComponent,
    InfoWithCounterComponent,
    RectangularButtonComponent,
    AuthorsComponent
  ]
})
export class ComponentsModule { }
