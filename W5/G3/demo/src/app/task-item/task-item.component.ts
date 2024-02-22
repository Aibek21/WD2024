import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Task} from "../task";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() task!: Task;
  @Output() remove = new EventEmitter<number>();
  @Output() done = new EventEmitter<Task>();

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    // fetch data from server here
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }


  removeTask(id: number) {
    this.remove.emit(id);
  }


  onDoneChanged() {
    this.done.emit(this.task);
  }
}
