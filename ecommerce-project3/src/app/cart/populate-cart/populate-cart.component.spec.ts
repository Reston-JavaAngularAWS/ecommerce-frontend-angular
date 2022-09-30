import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulateCartComponent } from './populate-cart.component';

describe('UserProfileComponent', () => {
  let component: PopulateCartComponent;
  let fixture: ComponentFixture<PopulateCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulateCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulateCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
