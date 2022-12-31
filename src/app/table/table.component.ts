import { Component, Input, OnInit } from '@angular/core';



import { Player } from '../models/player';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  
  @Input() holes: number;

  header: string[] = [];
  // 空白行を形成する
  row: string[] = [];

  players: Player[] = [];
  parForHole: Player = new Player("parForHole", 18);

  
  constructor() {

  }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    this.createRow(this.holes);
    this.changeAllPlayerScores(this.holes);
  }


  onAddPlayer(){
    let newMan = new Player("", this.holes);
    this.players.push(newMan);
  }

  setParNum(target: any, i: number){
    this.parForHole.setScore(target.value, i);
  }

  setPlayerName(target: any, i: number){
    this.players[i].setName(target.value);
  }

  setPlayerNum(target: any, i: number, j: number){
    this.players[i].setScore(target.value, j);
  }

  // セルの色を変化させる
  checkScore(i: number, j: number){
    const parNum: number = Number(this.parForHole.scores[j]);
    const playerNum: number = Number(this.players[i].scores[j]);

    let difference = parNum - playerNum;

    if (difference < 0) return "#FF6666";
    else if (difference > 0 ) return "#33FFFF";
    else return "";
  }

  // Under/Over Parの表示
  getResult(i: number){
    return this.players[i].total - this.parForHole.total;
  }

  // 最初のtable描画のための準備
  createRow(holes: number){
    this.header = [];
    this.row = [];
    for (let i = 0; i < holes; i++){
      this.header.push(String(i+1));
      this.row.push(" ");
    }
  }

  // holesが変化した際に、プレイヤーとparForHoleのholesと配列を再設定する
  // これがないと、holes変更前に設定した値が残ってしまう
  changeAllPlayerScores(holes: number){
    for (let i = 0; i < this.players.length; i++){
      this.players[i].setNumOfHoles(holes);
      this.players[i].changeArray(holes);
    }
    this.parForHole.setNumOfHoles(holes);
    this.parForHole.changeArray(holes)
  }
}
