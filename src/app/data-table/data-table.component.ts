import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() editClick= new EventEmitter();


  dataList=[];
  removeData(index:number){
    this.dataList=this.dataList.filter((item,i)=>i!==index);
  }
  // editData(i:number){
  //   this.editClick.emit();
  //   console.log('work!');
  // }

}
