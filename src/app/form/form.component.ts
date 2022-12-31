import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  @Output() addCourseName: EventEmitter<string> = new EventEmitter<string>();
  courseName: string = "";
  createdTable: boolean = false;
  holes: number;

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onSubmitCourseName(value: string){
    this.courseName = value;
    this.addCourseName.emit(value);
  }

  onCreateTable(input: string){
    let value = Number(input);
    if (value % 1 == 0 && value >= 1 && value <= 18){
      if (this.courseName != ""){
        this.createdTable = true;
        this.holes = value;
      }
      else {
        alert("コース名を入力してください");
      }
    }
    else {
      alert("1~18までの整数を入力してください");
    }
  }

  reset(){
    this.createdTable = false;
  }
}
