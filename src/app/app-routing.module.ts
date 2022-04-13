import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  { path: 'home', component: EmployeeDashboardComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: 'projectList', component: ProjectListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
