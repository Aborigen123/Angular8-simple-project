import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../shared/todos.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
//an-form но сам концепт називається ng-model котра позволяє відслідковувати стан input і створювати 2WayBanding

title: string = '';

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }


  addTodo(){//для додавання обєкта todo в todo | після чого треба перейти в todos.service.ts щою додати метод addTodo
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()

    }
    this.todosService.addTodo(todo)
    this.title=''//щоб додавати title
  }
}
