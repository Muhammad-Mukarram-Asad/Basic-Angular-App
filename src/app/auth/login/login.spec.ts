import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login } from './login';
import { FormsModule } from '@angular/forms';

describe('Login Component', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('should mark form as submitted when valid', () => {
    component.username = 'testuser';
    component.password = '1234';

    component.onSubmit({ valid: true, value: {} } as any);
   expect(component.submitted).toBe(true);

  });
});
