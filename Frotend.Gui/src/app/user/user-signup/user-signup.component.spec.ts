import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignupComponent } from './user-signup.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/_services/login.service';

describe('UserSignupComponent', () => {
  let component: UserSignupComponent;
  let fixture: ComponentFixture<UserSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSignupComponent ],
      imports: [ FormsModule ],
      providers: [ LoginService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
