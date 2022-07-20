import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Models/Book';
import { BookService } from '../Services/book.service';
import { CartBookService } from '../Services/cartbook.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:Book[];
  count:number;


  constructor(private bookservice:BookService,
    private cartService:CartBookService,
    private router:Router
    ) { 
    this.books=this.bookservice.getBooks();
    this.count = this.cartService.getCart().length;

  }

  ngOnInit(): void {
  }
  like(id:any){
    this.bookservice.incrementLike(id);
  }
  goToCart(){
    this.router.navigateByUrl("cart");
  }

  buy(id:any){
    var pizza = this.bookservice.getBookById(id);
    this.cartService.addToCart(pizza);
    console.log(this.cartService.getCart());
    this.count = this.cartService.getCart().length;
  }

}
