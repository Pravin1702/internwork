import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MenuComponent } from './menu/menu.component';
import { DoctorService } from 'src/Service.ts/Doctor.Service';
import { FavComponent } from './fav/fav.component';
import { FavDoctor } from 'src/Models.ts/FavDoctor';
import { FavDoctorService } from 'src/Service.ts/FavDoctor.Service';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    AppointmentsComponent,
    MyProfileComponent,
    MenuComponent,
    FavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DoctorService,FavDoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
