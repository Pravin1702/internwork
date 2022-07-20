import { Book } from "../Models/Book";

export class BookService{
    books:Book[];
    constructor() {
        this.books = [
            new Book(101,"KGF","Rocky",2000,2,0),
            new Book(102,"Beast","jim",1500,5,0),
            new Book(102,"Crase","rote",1250,0,0),
            new Book(103,"007","Tim",1200,10,0)
        ]
    } 
    public addBook(book:Book){
        this.books.push(book);
    }
    public getBooks(){
        return this.books;
    }
    public getBookById(id:number){
        var book;
        for (let index = 0; index < this.books.length; index++) {
            if(this.books[index].id==id)
             book= this.books[index];  
        }
        return book;  
    }
    public incrementLike(id:number){
      for (let index = 0; index < this.books.length; index++) {
          if(this.books[index].id==id)
          {
              this.books[index].likes= (this.books[index].likes??0)+1;
              break;
          }
          
      }
    }
}