import { Routes } from '@angular/router';
import { MyDashboard } from './dashboard/my-dashboard/my-dashboard';
import { MyTasks } from './tasks/my-tasks/my-tasks';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MyDashboard },
  { path: 'tasks', component: MyTasks },
];
