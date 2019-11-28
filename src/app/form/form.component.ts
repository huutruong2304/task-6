import { Component, OnInit,ViewChild } from '@angular/core';
import {DataTableComponent} from '../data-table/data-table.component'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  @ViewChild(DataTableComponent,{static:false})
  dataTable:DataTableComponent;

  onSubmit(data:any){
    console.log(data.value);
    this.dataTable.dataList.push(data.value);
    data.reset();
  }



}
