import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreatePerson } from 'src/app/models/create-person/create-person';
import { CreatePersonService } from 'src/app/providers/create-person/create-person.service';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {

  genders: any[] = [
    {value: '0', viewValue: 'Masculino'},
    {value: '1', viewValue: 'Femenino'},
  ];

  hobbies: any[] = [
    {value: '0', viewValue:'Leer'},
    {value: '1', viewValue:'Caminar'},
    {value: '2', viewValue:'Dormir'},
  ];

  public isNew: boolean = true;

  public form:FormGroup = new FormGroup({
    'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'lastName': new FormControl('', [Validators.minLength(3)]),
    'id': new FormControl('', [Validators.required, Validators.minLength(10)]),
    'email': new FormControl('', [Validators.required]),
    'gender': new FormControl(0, [Validators.required]),
    'age': new FormControl(0, [Validators.min(0), Validators.max(100)]),
    'hobbie': new FormControl(0, [Validators.required])
  }); 

  constructor(public readonly createPersonService: CreatePersonService) {}

  ngOnInit(): void {
  }

  submit(){
    console.log('HOLA', this.form!.value);
     let dataItem: CreatePerson = {
      name: this.form!.value.name,
      lastName: this.form!.value.lastName,
      id: this.form!.value.id,
      email: this.form!.value.email,
      gender: this.form!.value.gender,
      age: this.form!.value.age,
      hobbie: this.form!.value.hobbie 
    } 
    if (this.isNew) {
      this.isNew = false;
      this.createPersonService.postCreatePerson(dataItem).subscribe((response: CreatePerson) => { 
        response.name = dataItem.name,
        response.lastName = dataItem.lastName,
        response.id = dataItem.id,
        response.email = dataItem.email,
        response.gender = dataItem.gender,
        response.age = dataItem.age,
        response.hobbie = dataItem.hobbie
        alert('Registro Exitoso');
      });
    }else {
      alert('El usuario ingresado ya existe');
    }
  }
}
