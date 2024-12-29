import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appartement } from '../core/Model/appartement';

@Component({
  selector: 'app-form-appartement',
  templateUrl: './form-appartement.component.html',
  styleUrls: ['./form-appartement.component.css']
})
export class FormAppartementComponent {
  appartement: Appartement = {
    id: 0,
    appartNumber: 0, 
    floorNumber: 0, 
    surface: 0, 
    terrace: "", 
    terraceSurface: 0, 
    category: "", 
    description: "", 
    residence: 0
  }
  appartForm!: FormGroup
  ngOnInit(){
    this.appartForm= new FormGroup({
      appartNumber: new FormControl(this.appartement.appartNumber, [Validators.required, Validators.min(0)]),
      floorNumber: new FormControl(this.appartement.floorNumber, Validators.required),
      surface: new FormControl(this.appartement.surface, Validators.required),
      terrace: new FormControl(this.appartement.terrace, Validators.required),
      terraceSurface: new FormControl(this.appartement.terraceSurface, Validators.required),
      category: new FormControl(this.appartement.category, Validators.required),
      residence: new FormControl(this.appartement.residence, Validators.required),

  })
}

get appartNumber(){ return this.appartForm.get('appartNumber')}
get floorNumber(){ return this.appartForm.get('floorNumber')}
get surface(){ return this.appartForm.get('surface')}
get terrace(){ return this.appartForm.get('terrace')}
get terraceSurface(){ return this.appartForm.get('terraceSurface')}
get category(){ return this.appartForm.get('category')}
get residence(){ return this.appartForm.get('residence')}

addAppartement(){
  console.log("Add Appartement")
  console.log(this.appartForm.value);
}

}
