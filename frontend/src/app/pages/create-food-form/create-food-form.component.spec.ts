import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFoodFormComponent } from './create-food-form.component';

describe('CreateFoodFormComponent', () => {
  let component: CreateFoodFormComponent;
  let fixture: ComponentFixture<CreateFoodFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFoodFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
