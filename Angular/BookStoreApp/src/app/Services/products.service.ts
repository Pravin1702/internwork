import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Prod } from "../Models/products";

@Injectable()

export class ProductsService{

    constructor(private httpClient:HttpClient){
        
    }
    getProductsData(){
        return this.httpClient.get("http://localhost:5154/api/Products/GetAll_Products");
    }
    AddProduct(product:Prod){
        return this.httpClient.post("http://localhost:5154/api/Products/Product_Adding",product);
    }
}