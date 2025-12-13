import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { App } from './app';
import { routes } from './app.routes';

describe('App Routing', () => {
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should navigate to /dashboard', async () => {
    await router.navigate(['/dashboard']);
    expect(location.path()).toBe('/dashboard');
  });

  it('should navigate to /tasks', async () => {
    await router.navigate(['/tasks']);
    expect(location.path()).toBe('/tasks');
  });
});
