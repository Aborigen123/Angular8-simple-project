import { Pipe } from '@angular/core'

@Pipe({//Pipe повинні задекларувати в app.module.ts (TodosFilterPipe) в полі declarations
    name:'todosFilter'
})

export class TodosFilterPipe{

}