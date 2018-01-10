import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {
  @ViewChild ('f') signedForm 
  constructor() { }

  ngOnInit() {
  }

  onSubmit () {

  }

}
