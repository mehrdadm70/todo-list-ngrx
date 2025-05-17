import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ title: string }>()
);

export const loadTodos = createAction(
  '[Todo] Load Todos'
);

export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ index: number }>()
); 

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ index: number, title: string }>()
);
