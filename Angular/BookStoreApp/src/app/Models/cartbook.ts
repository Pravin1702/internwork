import { Book } from "./Book";

export class CartBook{
    public book:Book;
    public quantity:number;
    constructor(){
        this.book=new Book();
        this.quantity=0;
    }
}