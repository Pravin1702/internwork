import { Component, OnInit } from '@angular/core';
import { FavDoctor } from 'src/Models.ts/FavDoctor';
import { FavDoctorService } from 'src/Service.ts/FavDoctor.Service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  favdoctor:FavDoctor[];

  constructor(private favService:FavDoctorService) { 
    this.favdoctor = this.favService.getCart();
  }

  ngOnInit(): void {
  }

}
