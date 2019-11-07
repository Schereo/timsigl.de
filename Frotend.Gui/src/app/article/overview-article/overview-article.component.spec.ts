import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewArticleComponent } from './overview-article.component';

describe('OverviewArticleComponent', () => {
  let component: OverviewArticleComponent;
  let fixture: ComponentFixture<OverviewArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
