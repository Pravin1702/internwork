import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:"book",component:BookComponent},
  {path:"cart",component:CartComponent},
  {path:"order",component:OrderComponent},
  {path:"weather",component:WeatherComponent},
  {path:"products",component:ProductsComponent},
  {path:"addproduct",component:AddproductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
