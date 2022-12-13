import { UserFormComponent } from './../user-form/user-form.component';
import { UserListComponent } from './../user-list/user-list.component';
import { TypeListComponent } from './../type-list/type-list.component';
import { TypeFormComponent } from './../type-form/type-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
	{ path: 'userlist', component: UserListComponent },
	{ path: 'adduser', component: UserFormComponent },
	{ path: 'typelist', component: TypeListComponent },
	{ path: 'addtype', component: TypeFormComponent }
];


@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
