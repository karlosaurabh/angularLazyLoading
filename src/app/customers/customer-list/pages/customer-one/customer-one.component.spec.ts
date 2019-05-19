import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOneComponent } from './customer-one.component';

describe('CustomerOneComponent', () => {
  let component: CustomerOneComponent;
  let fixture: ComponentFixture<CustomerOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
