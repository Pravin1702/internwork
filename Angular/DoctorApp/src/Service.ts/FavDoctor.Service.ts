import { FavDoctor } from "src/Models.ts/FavDoctor";

export class FavDoctorService{
itemsInCart:FavDoctor[];

    constructor() {
    this.itemsInCart = [];  
    }
    public getCart(){
        return this.itemsInCart;
    }
    public addToCart(doctor:any){
        var flag=0;
     for (let index = 0; index < this.itemsInCart.length; index++) {
        if(doctor.id== this.itemsInCart[index].doctor.Id)
        {
            flag=1;
            this.itemsInCart[index].quantity +=1;
            break;
        } 
     }
     if(flag==0)
     {
         var cartItem = new FavDoctor();
         cartItem.doctor = doctor;
         cartItem.quantity = 1;
         this.itemsInCart.push(cartItem);
     }
    }
}