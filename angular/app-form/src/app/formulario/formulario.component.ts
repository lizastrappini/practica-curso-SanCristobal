import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VisualizarFormService } from '../visualizar-form.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  validarEmails(control: AbstractControl): { [key: string]: any } | null {
    const email = control.get('email');
    const confirmacionEmail = control.get('confirmacionEmail');

    if (email && confirmacionEmail && email.value !== confirmacionEmail.value) {
      confirmacionEmail.setErrors({ emailsNoCoinciden: true });
      return { emailsNoCoinciden: true };
    } else {
      confirmacionEmail?.setErrors(null);
      return null;
    }
  }
  

  constructor(private fb: FormBuilder, private suscripcion: VisualizarFormService) { }

    formulario = this.fb.group({
      
      nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
      apellido: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
     
      emails: new FormGroup({
        'email': new FormControl('', [Validators.required, Validators.email]),
        'confirmacionEmail': new FormControl('', [Validators.required, Validators.email]),
      },{validators: [this.validarEmails]}),
     
      
      telefono: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      password: new FormControl('', [Validators.required]),
      notificaciones: new FormControl(false, [Validators.required]),
      terminos: new FormControl(false, [Validators.requiredTrue]),
  });

  onSubmit() {
    if (this.formulario.valid) {
      // Envio al servicio
      this.suscripcion.suscribir(this.formulario.value);
    }
  }

  
}
