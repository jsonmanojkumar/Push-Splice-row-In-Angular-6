import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  myform:FormGroup;
  UserData:any=[];
  isvalid:any=false;

  constructor(private fb:FormBuilder) { 
    this.myform=this.fb.group({
      name:[''],
      age:[''],
      address:['']
    })
  }
   
  ngOnInit() {
  }

  oncreate(){
    this.isvalid=true;
  }

  onadd(){
    this.UserData.push(this.myform.value);
    // this.isvalid=false;
    this.myform.reset();
  }
  
  onRemove(item){
    this.UserData.splice(item,1);

  }

}
