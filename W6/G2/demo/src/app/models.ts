export class Post {
  id: number;
  title: string;
  body: string;

  constructor(id: number=0, title: string = '', body: string = '') {
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
