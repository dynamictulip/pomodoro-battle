import { Schema, type } from '@colyseus/schema';

export class Task extends Schema {
  @type('number')
  public taskType: number;

  @type('number')
  public age: number

  constructor() {
    super();
    this.age = 0;
    this.taskType = 1;
  }
}