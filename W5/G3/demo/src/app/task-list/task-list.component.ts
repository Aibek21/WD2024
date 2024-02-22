import {Component} from '@angular/core';
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
    this.doneTaskList = []
    this.currentTask = new Task()
    this.currentTask.title = 'hello';
  }

  addTask() {
    this.taskList.push(this.currentTask);
    this.currentTask = new Task();
  }

  removeTask(id: number) {
    this.taskList = this.taskList.filter((x) => x.id != id);
  }

  removeDoneTask(id: number) {
    this.doneTaskList = this.doneTaskList.filter((x) => x.id != id);
  }

  onDoneChanged(task: Task) {
    if (task.isDone) {
      this.removeTask(task.id);
      this.doneTaskList.push(task);
      this.doneTaskList.sort((a, b) => a.id > b.id ? 1 : -1);
    } else {
      this.removeDoneTask(task.id);
      this.taskList.push(task);
      this.taskList.sort((a, b) => a.id > b.id ? 1 : -1);
    }
  }
}
