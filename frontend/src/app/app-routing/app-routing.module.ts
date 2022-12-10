import { UserFormComponent } from './../user-form/user-form.component';
import { UserListComponent } from './../user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
	{ path: 'users', component: UserListComponent },
	{ path: 'adduser', component: UserFormComponent }
];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
