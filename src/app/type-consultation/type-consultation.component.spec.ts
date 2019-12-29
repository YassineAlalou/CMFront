import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeConsultationComponent } from './type-consultation.component';

describe('TypeConsultationComponent', () => {
  let component: TypeConsultationComponent;
  let fixture: ComponentFixture<TypeConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
