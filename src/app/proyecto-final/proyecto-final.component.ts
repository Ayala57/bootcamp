import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [GoogleMapsModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.scss'
})
export class ProyectoFinalComponent {
  usuarios: any = [];
  id: any = [];
  position: any={};
  formulariouser: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  })
  name = ''
  description = ''

  getcoords(event:any){
  this.position= {
  lat: event.latLng.lat(),
  lng: event.latLng.lng(),
}
  }

  submitForm() {
    let obj = {
    ...this.formulariouser.value,
    position: this.position
    }
    this.usuarios.push(obj),
    console.log(this.formulariouser.value);
  }

  deletecard(){
    
  }
}
