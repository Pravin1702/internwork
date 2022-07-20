import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prod } from '../Models/products';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  
  constructor(private productservice:ProductsService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  sowProducts(){
    this.productservice.getProductsData().subscribe(data=>
      {
        console.log(data);
        this.products=data as Prod[];
      })
  }
  AddProduct(){
    this.router.navigateByUrl("addproduct");
  }

}
