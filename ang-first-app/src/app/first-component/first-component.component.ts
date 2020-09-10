import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-h',
  //template: '<h2> hellow</h2> <br> <p> paf</p>',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  text: string = 'My first text wooo'
  numbers: number[] = [1, 3, 4, 6, 9]
  isGreen: boolean = true
  cash: number = 1.99
  date = new Date();
  title: string = 'new title'
  title2: string = 'another one'

  isDisabled: boolean = false

  onClick(){
    console.log("button cliked");
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
