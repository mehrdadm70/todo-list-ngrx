import { createAction, props } from '@ngrx/store';
import { Task } from '../../models/task.model';

// دریافت تسک‌ها
export const loadTasks = createAction('[Task] Load Tasks');
export const loadTasksSuccess = createAction(
  '[Task] Load Tasks Success',
  props<{ tasks: Task[] }>()
);
export const loadTasksFailure = createAction(
  '[Task] Load Tasks Failure',
  props<{ error: string }>()
);

// افزودن تسک جدید
export const addTask = createAction(
  '[Task] Add Task',
  props<{ title: string }>()
);
export const addTaskSuccess = createAction(
  '[Task] Add Task Success',
  props<{ task: Task }>()
);
export const addTaskFailure = createAction(
  '[Task] Add Task Failure',
  props<{ error: string }>()
);

// تغییر وضعیت تسک
export const updateTaskStatus = createAction(
  '[Task] Update Task Status',
  props<{ id: string, completed: boolean }>()
);
export const updateTaskStatusSuccess = createAction(
  '[Task] Update Task Status Success',
  props<{ task: Task }>()
);
export const updateTaskStatusFailure = createAction(
  '[Task] Update Task Status Failure',
  props<{ error: string }>()
);

// حذف تسک
export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ id: string }>()
);
export const deleteTaskSuccess = createAction(
  '[Task] Delete Task Success',
  props<{ id: string }>()
);
export const deleteTaskFailure = createAction(
  '[Task] Delete Task Failure',
  props<{ error: string }>()
); 