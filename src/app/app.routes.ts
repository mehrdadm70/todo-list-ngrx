import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', loadComponent: () => import('./components/todo-list/todo-list.component').then(m => m.TodoListComponent) },
  { path: 'add', loadComponent: () => import('./components/add-todo/add-todo.component').then(m => m.AddTodoComponent) },
  { path: 'edit/:id', loadComponent: () => import('./components/add-todo/add-todo.component').then(m => m.AddTodoComponent) },
  { path: '**', redirectTo: 'todos' }
]; 