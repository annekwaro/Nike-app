import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  user: any = {
    name: '',
    password: '',
    email: '',
  };

  onSubmit() {
    console.log(this.user);
  }
}
