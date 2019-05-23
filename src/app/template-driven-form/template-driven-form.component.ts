import { Component, OnInit } from '@angular/core';

interface Client {
  firstName: string,
  lastName: string,
  birthday: Date,
  gender: string,
  street: string,
  city: string,
  state: string,
  phone1: string,
  phone2: string
};

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  states = [ "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", 
             "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", 
             "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

  client: Client = { firstName: '', lastName: '', birthday: new Date(), gender: '', 
                     street: '', city: '', state: '', phone1: '', phone2: '' };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.client);

  }

}
