import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//силку копіювати звідси компілятор її не підказує
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


export interface Todo{
    id: number
    title: string
    completed: boolean
    date?: any
  }

@Injectable({providedIn: 'root'})//для того щоб Angular визначив що це є серіс треба оголосити @Injectable({providedIn: 'root'} 
// @Injectable({providedIn: 'root'} - для того щоб він був автоматично зареєстрований  і щоб ми його не реєстрували в модулі)
export class TodosService{
  public todos: Todo[]// робимо масив пустим для того щоб по api тягнути звідти дані і записати в масив
   /* public todos: Todo[] = [//todos - масив предмтавлений із елементів Todo(interface) //додаємо динаміки
        {id: 1, title: 'Вивчити Angular', completed: false, date: new Date()},
        {id: 2, title: 'Вивчення Angular', completed: false, date: new Date()},
        {id: 3, title: 'Вивчив Angular', completed: true, date: new Date()},
        ]
*/
         constructor(private http: HttpClient){} //http - запит 
       //HttpClient треба цей модель зареєструвати в app.modele.ts(imports -> HttpClientModule)
         fetchTodos(): Observable<Todo[]>{//метод який буде загружати в Todo
         return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')//cntr + click відкриє нову папку з даними які нам приходять
         //при дописанні query param ?_limit=3 - нам виведе лише 3 компонента
         .pipe(tap(todos => this.todos = todos))// метод pipe - ми зберігаємо stream який нам пышов в масив | в tap я принімаю callback функцію
         }


        onToggle(id: number){
            const idx = this.todos.findIndex(t => t.id === id)
            console.log('idx = ' + this.todos[idx].completed)
            this.todos[idx].completed = !this.todos[idx].completed
          }

          removeTodo(id: number){
         this.todos = this.todos.filter(t => t.id !== id)//ми не видаляємо елемент ми робимо фільтр в якого не буде того елелмента який нам приходить 
          }

          addTodo(todo: Todo){
      this.todos.push(todo);
          }
          
}