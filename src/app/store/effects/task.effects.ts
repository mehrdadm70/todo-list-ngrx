import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { TaskService } from '../../services/task.service';
import * as TaskActions from '../actions/task.actions';

@Injectable()
export class TaskEffects {
  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}

  // دریافت تسک‌ها
  loadTasks$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      switchMap(() => 
        this.taskService.getTasks().pipe(
          map(tasks => TaskActions.loadTasksSuccess({ tasks })),
          catchError(error => 
            of(TaskActions.loadTasksFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // افزودن تسک جدید
  addTask$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      mergeMap(({ title }) => 
        this.taskService.addTask(title).pipe(
          map(task => TaskActions.addTaskSuccess({ task })),
          catchError(error => 
            of(TaskActions.addTaskFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // به‌روزرسانی وضعیت تسک
  updateTaskStatus$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TaskActions.updateTaskStatus),
      mergeMap(({ id, completed }) => 
        this.taskService.updateTaskStatus(id, completed).pipe(
          map(task => TaskActions.updateTaskStatusSuccess({ task })),
          catchError(error => 
            of(TaskActions.updateTaskStatusFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // حذف تسک
  deleteTask$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      mergeMap(({ id }) => 
        this.taskService.deleteTask(id).pipe(
          map(() => TaskActions.deleteTaskSuccess({ id })),
          catchError(error => 
            of(TaskActions.deleteTaskFailure({ error: error.message }))
          )
        )
      )
    )
  );
} 