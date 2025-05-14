import { createReducer, on } from '@ngrx/store';
import { Task } from '../../models/task.model';
import * as TaskActions from '../actions/task.actions';

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

export const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null
};

export const taskReducer = createReducer(
  initialState,
  
  // دریافت تسک‌ها
  on(TaskActions.loadTasks, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    loading: false
  })),
  on(TaskActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  
  // افزودن تسک جدید
  on(TaskActions.addTask, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TaskActions.addTaskSuccess, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
    loading: false
  })),
  on(TaskActions.addTaskFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  
  // به‌روزرسانی وضعیت تسک
  on(TaskActions.updateTaskStatus, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TaskActions.updateTaskStatusSuccess, (state, { task }) => ({
    ...state,
    tasks: state.tasks.map(t => t.id === task.id ? task : t),
    loading: false
  })),
  on(TaskActions.updateTaskStatusFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  
  // حذف تسک
  on(TaskActions.deleteTask, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(TaskActions.deleteTaskSuccess, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id),
    loading: false
  })),
  on(TaskActions.deleteTaskFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
); 