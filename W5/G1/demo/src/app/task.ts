export class Task {
  static currentID = 1;
  id: number;
  title: string;
  isDone: boolean;

  constructor(title: string = '') {
    this.id = Task.currentID++;
    this.title = title;
    this.isDone = false;
  }
}
