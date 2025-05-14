import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from '../reducers/task.reducer';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectAllTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);

export const selectTasksLoading = createSelector(
  selectTaskState,
  (state: TaskState) => state.loading
);

export const selectTasksError = createSelector(
  selectTaskState,
  (state: TaskState) => state.error
);

export const selectCompletedTasks = createSelector(
  selectAllTasks,
  tasks => tasks.filter(task => task.completed)
);

export const selectIncompleteTasks = createSelector(
  selectAllTasks,
  tasks => tasks.filter(task => !task.completed)
); 