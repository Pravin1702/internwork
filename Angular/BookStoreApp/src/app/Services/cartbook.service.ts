import { CartBook } from "../Models/cartbook";

export class CartBookService{
    itemsinCart:CartBook[];

    constructor(){
        this.itemsinCart=[];
    }
    
    public getCart(){
        return this.itemsinCart;
    }
    public addToCart(book:any){
        var flag=0;
     for (let index = 0; index < this.itemsinCart.length; index++) {
        if(book.id== this.itemsinCart[index].book.id)
        {
            flag=1;
            this.itemsinCart[index].quantity +=1;
            break;
        } 
     }
     if(flag==0)
     {
         var cartItem = new CartBook();
         cartItem.book = book;
         cartItem.quantity = 1;
         this.itemsinCart.push(cartItem);
     }
    }
    
}