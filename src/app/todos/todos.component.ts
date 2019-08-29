import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';
import { TodosService } from '../shared/todos.service';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
//@Input() todos: Todo[] = []// передаємо із app.component.ts в todos.components.ts масив @Input - принімаємо якийсь масив | todos - змінна куда записуємо масив |  // простий приклад імпорту даних
//Todo[] - елемент який хочемо получити | [] - за замовчеванням буде пустим 
//@Output() onToggle = new EventEmitter<number>() //@Output - призначения для того щоб змінювати елементи які ми отримуємо з front і будемо записувати зміни в app.component.ts 

  constructor(private todosService: TodosService) { //DI inject class TodosService(todos.service.ts) можна public or private буз різниці

  }
   
  private loading: boolean = true
  private searchString: string = '' //або запис private searchString "" - але краще так не писати

  ngOnInit() {//коли компонент стартує
   this.todosService.fetchTodos()
   .pipe(delay(500))//робимо затримку на 2000 = 2 сек після чого виводиться масив і під час затримки робиться загрузка даних в масив
   .subscribe( () =>{//тут вкажемо що всі елементи загрузили і поставимо що загрузка закінчена
   this.loading = false
    }

   )
  }

  onChange(id: number){
//this.onToggle.emit(id);  простий приклад імпорту даних
this.todosService.onToggle(id)
  }

  removeToDo(id: number){
    this.todosService.removeTodo(id)
  }

}
