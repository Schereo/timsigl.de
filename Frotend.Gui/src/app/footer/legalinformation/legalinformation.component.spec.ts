import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalinformationComponent } from './legalinformation.component';

describe('LegalinformationComponent', () => {
  let component: LegalinformationComponent;
  let fixture: ComponentFixture<LegalinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
