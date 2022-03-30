import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  // The FormBuilder service has three methods: control(), group(), and array(). These are factory methods for generating instances in your component classes including form controls, form groups, and form arrays.

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // profileForm = new FormGroup({

  //   firstName: new FormControl(''),
  //   lastName:new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  profileForm=this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases:this.fb.array([
      this.fb.control('')
    ])
  });

  onSubmit(){
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName:'Vengi',
      address:{
        street: 'Sundaraiah Colony'
      }
    });
  //   this.profileForm.setValue({
  //     firstName:'Vengi',
  //     address:{
  //       street: 'Sundaraiah Colony'
  //     }
  //   });
  }

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
    this.aliases.push(this.fb.control(''));
  }

}
