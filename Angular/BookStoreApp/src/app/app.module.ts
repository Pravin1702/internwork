import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { BookService } from './Services/book.service';
import { CartBookService } from './Services/cartbook.service';
import { WeatherComponent } from './weather/weather.component';
import {WeatherService} from './Services/weather.service'
import { ProductsService } from './Services/products.service';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BookComponent,
    CartComponent,
    OrderComponent,
    WeatherComponent,
    ProductsComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService,CartBookService,WeatherService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
