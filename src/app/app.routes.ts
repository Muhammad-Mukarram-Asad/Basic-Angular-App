import { Routes } from '@angular/router';
import { MyDashboard } from './dashboard/my-dashboard/my-dashboard';
import { MyTasks } from './tasks/my-tasks/my-tasks';
import { Login } from './auth/login/login';

export const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },  
 { path: 'dashboard', component: MyDashboard },
  { path: 'tasks', component: MyTasks },
  {path: 'login', component: Login}
];
