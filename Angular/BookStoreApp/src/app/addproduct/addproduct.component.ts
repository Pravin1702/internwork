import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prod } from '../Models/products';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  pro:Prod;

  constructor(private productservice:ProductsService,
    private router:Router) {
      this.pro=new Prod();
     }

  ngOnInit(): void {
  }

  addproduct(){
    var addproductss= this.productservice.AddProduct(this.pro);
    console.log(addproductss);
    if(addproductss != null)
    {
      this.router.navigateByUrl("products");
    }
  }
  reset(){
    this.pro=new Prod();
  }

}
