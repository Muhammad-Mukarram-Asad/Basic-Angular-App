import { TestBed } from '@angular/core/testing';
import { AppDataService } from './app-data';

describe('AppDataService', () => {
  let service: AppDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct pending tasks', () => {
    service.totalTasks = 10;
    service.completedTasks = 4;

    expect(service.getPendingTasks()).toBe(6);
  });

  it('should return correct achieved percentage', () => {
    service.totalTasks = 10;
    service.completedTasks = 4;

    expect(service.getAchievedPercentage()).toBe('40.00');
  })
});
