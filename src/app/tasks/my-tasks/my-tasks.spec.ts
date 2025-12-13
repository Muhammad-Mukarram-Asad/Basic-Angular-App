import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyTasks } from './my-tasks';
import { AppDataService } from '../../shared/app-data';

describe('MyTasks', () => {
  let component: MyTasks;
  let fixture: ComponentFixture<MyTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTasks],
      providers: [AppDataService],
    }).compileComponents();

    fixture = TestBed.createComponent(MyTasks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the MyTasks component', () => {
    expect(component).toBeTruthy();
  });

  it('should render application name in HTML', () => {
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.textContent).toContain('Personal Calendar App');
});

it('should display pending tasks', () => {
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.textContent).toContain('Pending tasks');
});

});
