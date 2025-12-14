import { Injectable } from '@angular/core';

export type CalendarEntity =
  | { type: 'task'; title: string; completed: boolean }
  | { type: 'note'; title: string; content: string }
  | { type: 'event'; title: string; date: string };

@Injectable({
  providedIn: 'root', // makes this service global (singleton)
})

// @Injectable() → marks class as a service
// providedIn: 'root' → one global instance



export class AppDataService {
  
  // Global typed properties
  appName: string = 'Personal Calendar App';
  currentUser: {
    name: string;
    role: string;
  } = {
    name: 'John Doe',
    role: 'User',
  };

  totalTasks: number = 10;
  completedTasks: number = 4;

  // Calculation method
  getPendingTasks(): number {
    return this.totalTasks - this.completedTasks;
  }
  getAchievedPercentage():string {
    return ((this.completedTasks / this.totalTasks) * 100).toFixed(2);
  }

  entities: CalendarEntity[] = [
    { type: 'task', title: 'Study Angular', completed: false },
    { type: 'note', title: 'Lecture Notes', content: 'ngIf and ngFor' },
    { type: 'event', title: 'Exam', date: '2025-12-20' },
    { type: 'task', title: 'Submit Assignment', completed: true }
  ];
}