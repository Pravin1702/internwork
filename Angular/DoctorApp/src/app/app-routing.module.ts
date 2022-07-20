import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { FavComponent } from './fav/fav.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {path:'doctor',component:DoctorsComponent},
  {path:'appointments',component:AppointmentsComponent},
  {path:'myprofile',component:MyProfileComponent},
  {path:'fav',component:FavComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
