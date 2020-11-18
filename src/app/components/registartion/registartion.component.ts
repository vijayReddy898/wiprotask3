import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['./registartion.component.scss'],
})
export class RegistartionComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  registeredUsers = [];
  checkedItems = [];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required]],
      state: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  saveRegistartionData(){
    this.registeredUsers.push(this.registerForm.value);
    this.registerForm.reset();
  }

  resetForm(){
    this.registerForm.reset();
  }

  deleteRow(index){
    this.registeredUsers.splice(index, 1)
  }

  checkboxChange(event, item){
    if(event.target.checked){
      this.checkedItems.push(item)
    }else{
      this.checkedItems.splice(this.checkedItems.indexOf(item),1);
    }
  }

  deleteSelectedItems(){
    this.checkedItems.forEach(item=>{
      this.deleteRow(this.registeredUsers.indexOf(item));
    });
    this.checkedItems = [];
  }

  checkAllItems(){
    document.querySelectorAll('td input[type="checkbox"]').forEach((item: HTMLElement)=>{
      item.click();
    });
  }
}
