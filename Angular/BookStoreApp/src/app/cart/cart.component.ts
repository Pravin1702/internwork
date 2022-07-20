import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartBook } from '../Models/cartbook';
import { CartBookService } from '../Services/cartbook.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:CartBook[];

  constructor(private cartService:CartBookService,
    private router:Router
    ) {
    this.cart = this.cartService.getCart();
   }

  ngOnInit(): void {
  }
  goToBook(){
    this.router.navigateByUrl("book");
  }

 

}
