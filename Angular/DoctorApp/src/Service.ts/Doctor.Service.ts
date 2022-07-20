import { Doctor } from "src/Models.ts/Doctor";

export class DoctorService{
    Doctors:Doctor[];

    constructor(){
        this.Doctors=[
            new Doctor(101,"Tim","Brain specilist",2.4,0),
            new Doctor(102,"Rocky","Child specilist",4,0),
            new Doctor(103,"Ammu","Covid specilist",3,0)

        ]
    }
    
  public addDoctor(doctor:Doctor){
      this.Doctors.push(doctor);
  }
  public getDoctor(){
      return this.Doctors;
  }
  public getDoctorById(Id:number){
      var doctor;
      for (let index = 0; index < this.Doctors.length; index++) {
          if(this.Doctors[index].Id==Id)
           doctor= this.Doctors[index];  
      }
      return doctor;  
  }
 
  public LikeDoctor(Id:number)
  {
    for (let index = 0; index < this.Doctors.length; index++) {
        if(this.Doctors[index].Id==Id)
        {
            this.Doctors[index].like= (this.Doctors[index].like??0)+1;
            break;
        }
    }
  }
 

}