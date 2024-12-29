import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../core/Model/residence';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css']
})
export class UpdateResidenceComponent {
residence: Residence = {
  id: 0,
  name: "",
  address: "",
  image: "",
  status: ""
}
residenceForm!: FormGroup
constructor(private residenceService: ResidenceService, private activatedRoute: ActivatedRoute, private router: Router){}
id!: any
ngOnInit(){
  this.id = this.activatedRoute.snapshot.params['id']
  this.residenceService.getResidenceById(this.id).subscribe((data)=>{
    this.residence = data
    this.residenceForm= new FormGroup({
      name: new FormControl(this.residence.name, [Validators.required, Validators.minLength(3)]),
  
      address: new FormControl(this.residence.address, Validators.required)
    })
  })
}

get name(){ return this.residenceForm.get('name')}
get address(){ return this.residenceForm.get('address')}

updateResidence(){
  console.log("Add Residence")
  console.log(this.residenceForm.value);
  this.residenceService.updateResidence(this.id, this.residenceForm.value).subscribe(()=>{
    console.log("Residence updated !");
    this.router.navigateByUrl('/residence')
  })
}

}
