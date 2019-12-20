import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretairehomeComponent } from './secretairehome.component';

describe('SecretairehomeComponent', () => {
  let component: SecretairehomeComponent;
  let fixture: ComponentFixture<SecretairehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretairehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretairehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
