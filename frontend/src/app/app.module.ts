import { UserServiceService } from './user-service.service';
import { TypeServiceService } from './type-service.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TypeListComponent } from './type-list/type-list.component';
import { TypeFormComponent } from './type-form/type-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    TypeListComponent,
    TypeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserServiceService, TypeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
