import { Component } from '@angular/core';

export interface Todo{
  id: number
  title: string
  completed: boolean
  date?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Angular todo application'
  // закоментували для того щоб не видаляти і цей блок перенесли в todos.service.ts( переносимо всю логіку яка звязаня з todo до todos.service.ts)
  // public todos: Todo[] = [//todos - масив предмтавлений із елементів Todo //додаємо динаміки
  // {id: 1, title: 'Вивчити Angular', completed: false, date: new Date()},
  // {id: 2, title: 'Вивчення Angular', completed: false, date: new Date()},
  // {id: 3, title: 'Вивчив Angular', completed: true, date: new Date()},
  // ]
  
  // закоментували для того щоб не видаляти і цей блок перенесли в todos.service.ts( переносимо всю логіку яка звязаня з todo до todos.service.ts)
// onToggle(id: number){
//   const idx = this.todos.findIndex(t => t.id === id)
//   console.log('idx = ' + this.todos[idx].completed)
//   this.todos[idx].completed = !this.todos[idx].completed
// }

  }
