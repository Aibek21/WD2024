import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  taskList: Task[];
  doneTaskList: Task[];
  currentTask: Task;

  constructor() {
    this.taskList = [new Task('Task 1'), new Task('Task 2')]
    this.doneTaskList = [];
    this.currentTask = new Task()
  }



  addTask() {
    this.taskList.push(this.currentTask);
    this.currentTask = new Task();
  }

  onTaskRemove(id: number) {
    this.taskList = this.taskList.filter((x) => x.id != id);
  }

  onDoneTaskRemove(id: number) {
    this.doneTaskList = this.doneTaskList.filter((x) => x.id != id);
  }

  onDoneChange(task: Task) {
    if (task.isDone) {
      this.onTaskRemove(task.id);
      this.doneTaskList.push(task)
      this.doneTaskList.sort((a, b) => a.id > b.id ? 1 : -1);
    } else {
      this.onDoneTaskRemove(task.id);
      this.taskList.push(task);
      this.taskList.sort((a, b) => a.id > b.id ? 1 : -1);
    }
  }
}
