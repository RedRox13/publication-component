import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWithCounterComponent } from './info-with-counter.component';

describe('InfoWithCounterComponent', () => {
  let component: InfoWithCounterComponent;
  let fixture: ComponentFixture<InfoWithCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoWithCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWithCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
