import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyDashboard } from './dashboard/my-dashboard/my-dashboard';
import { MyTasks } from './tasks/my-tasks/my-tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyDashboard, MyTasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-basic-app');
}
