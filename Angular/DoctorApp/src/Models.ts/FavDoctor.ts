import { Doctor } from "src/Models.ts/Doctor";

export class FavDoctor{
    public doctor:Doctor;
    public quantity:number;
    constructor() {
        this.doctor = new Doctor();
        this.quantity = 0;

     }
}