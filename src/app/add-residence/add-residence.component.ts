import { Component } from '@angular/core';
import { Residence } from '../core/Model/residence';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
residence: Residence = {
  id: 0,
  name: "",
  address: "",
  image: "../../assets/images/R3.jpg",
  status: "Vendu"
}
residenceForm!: FormGroup
constructor(private residenceService: ResidenceService, private router: Router){}
ngOnInit(){
  this.residenceForm= new FormGroup({
    name: new FormControl(this.residence.name, [Validators.required, Validators.minLength(3)]),
    address: new FormControl(this.residence.address, Validators.required),
    image: new FormControl(this.residence.image),
    status: new FormControl(this.residence.status),
  })
}

get name(){ return this.residenceForm.get('name')}
get address(){ return this.residenceForm.get('address')}

addResidence(){
  console.log("Add Residence")
  console.log(this.residenceForm.value);
  this.residenceService.addResidence(this.residenceForm.value).subscribe(()=>{
    console.log("Residence added !");
    this.router.navigateByUrl('/residence')
  })
}

}
