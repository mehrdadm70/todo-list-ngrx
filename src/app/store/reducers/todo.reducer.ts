import { createReducer, on } from '@ngrx/store';
import { addTodo, loadTodos, removeTodo, updateTodo } from '../actions/todo.actions';

export interface TodoState {
  todos: string[];
}

export const initialState: TodoState = {
  todos: ['نمونه کار ۱', 'نمونه کار ۲']
};

export const todoReducer = createReducer(
  initialState,
  on(loadTodos, state => ({ ...state })),
  on(addTodo, (state, { title }) => ({
    ...state,
    todos: [...state.todos, title]
  })),
  on(removeTodo, (state, { index }) => ({
    ...state,
    todos: state.todos.filter((_, i) => i !== index)
  })),
  on(updateTodo,(state ,{index, title})=> ({
    ...state,
    todos: state.todos.map((todo, i) => i === index ? title : todo)
  }) )
); 