import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [
  {path:"", redirectTo:"register",pathMatch:"full"},
  {path:"register",component:RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
