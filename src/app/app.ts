import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
// import { MyDashboard } from './dashboard/my-dashboard/my-dashboard';
// import { MyTasks } from './tasks/my-tasks/my-tasks';

@Component({
  selector: 'app-root',
  // imports: [MyDashboard, MyTasks],
  // after adding routes in main.ts file, the above import is no longer needed
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-basic-app');
}
