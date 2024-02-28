import {Component} from '@angular/core';
import {isEmpty} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my app';
  num: number;
  str: string;
  arr: number[];
  students: any[];
  todos: string[];
  isEmpty: boolean;
  displayText: string;

  constructor() {
    this.num = 5;
    this.str = 'Hello';
    this.arr = [1, 2, 3, 5, 6, 7, 10];
    this.students = [
      {
        id: '220BD002',
        name: 'John',
        gpa: 4
      },
      {
        id: '220BD003',
        name: 'Bob',
        gpa: 3.6
      },
      {
        id: '220BD003',
        name: 'Bob2',
        gpa: 3.9
      }
    ]
    this.isEmpty = false;
    this.displayText = 'asdf';
    this.todos = [];
  }


  btnClick() {
    console.log('btn clicked')
    this.isEmpty = true;
    this.displayText = 'Hello';
  }


  addItem() {
    this.todos.push(this.displayText);
    this.displayText = '';
  }

  removeItem(i: number) {
    this.todos.splice(i, 1);
  }
}
