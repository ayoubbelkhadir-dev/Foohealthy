import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFoodFormComponent } from './update-food-form.component';

describe('UpdateFoodFormComponent', () => {
  let component: UpdateFoodFormComponent;
  let fixture: ComponentFixture<UpdateFoodFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFoodFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
