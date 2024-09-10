import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskComponent } from './pages/task/task.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'task', component: TaskComponent },
  { path: '**', component: NotFoundComponent },
];
