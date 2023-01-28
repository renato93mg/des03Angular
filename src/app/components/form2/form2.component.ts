import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CapitalLetter } from '../CustomValidator/CapitalLetter';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  
  constructor(private fb:FormBuilder) { }

  perfil:FormGroup


  ngOnInit(): void {
    this.perfil=this.fb.group({
      nombre:['',[Validators.required,CapitalLetter()]],
      edad:['',Validators.required]
    })
  }
  

  enviar():void{
    //console.log(this.perfil.value)
    console.log(this.perfil.valid)
    if(this.perfil.valid){
      alert('Todo correcto')
    }
  }
}

