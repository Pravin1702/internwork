import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/Models.ts/Doctor';
import { DoctorService } from 'src/Service.ts/Doctor.Service';
import { FavDoctorService } from 'src/Service.ts/FavDoctor.Service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  Doctors:Doctor[];
  count:number;

  constructor(private doctorService:DoctorService,
    private FavDoctorService:FavDoctorService,
              private router:Router
    ) {
    this.Doctors = this.doctorService.getDoctor();
    this.count = this.FavDoctorService.getCart().length;
   }

   like(Id:any)
   {
      this.doctorService.LikeDoctor(Id);
   }

  
  buy(id:any){
    var pizza = this.doctorService.getDoctorById(id);
    this.FavDoctorService.addToCart(pizza);
    console.log(this.FavDoctorService.getCart());
    this.count = this.FavDoctorService.getCart().length;
  }
  goToCart(){
    this.router.navigateByUrl("appointments");
  }


  ngOnInit(): void {
  }

}
