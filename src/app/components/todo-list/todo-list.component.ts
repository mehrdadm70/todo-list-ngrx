import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTodos } from '../../store/selectors/todo.selectors';
import { removeTodo, updateTodo } from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="card w-full max-w-2xl">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Todo List</h2>
        
        <ul *ngIf="(todos$ | async)?.length; else emptyList" class="space-y-4">
          <li *ngFor="let todo of (todos$ | async); let i = index"
              class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <span class="text-gray-700">{{ todo }}</span>
            <div class="flex gap-2 sm:gap-2 w-full sm:w-auto">
              <button (click)="removeTodo(i)" class="btn btn-delete flex-1 sm:flex-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Delete
              </button>
              <button [routerLink]="['/edit', i]" class="btn btn-edit flex-1 sm:flex-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2h2" />
                </svg>
                Edit
              </button>
            </div>
          </li>
        </ul>

        <ng-template #emptyList>
          <div class="text-center py-8">
            <p class="text-gray-500">No todos found.</p>
          </div>
        </ng-template>

        <div class="mt-6 text-center">
          <a routerLink="/add" class="btn btn-add w-full flex justify-center items-center gap-2">
           
            Add New Todo
          </a>
        </div>
      </div>
    </div>
  `
})
export class TodoListComponent {
  todos$: Observable<string[]>;
  
  constructor(private store: Store) {
    this.todos$ = this.store.select(selectTodos);
  }

  removeTodo(index: number) {
    this.store.dispatch(removeTodo({ index }));
  }

  updateTodo(index: number) {
    this.store.dispatch(updateTodo({ index, title: 'ویرایش شده' }));
  }
} 