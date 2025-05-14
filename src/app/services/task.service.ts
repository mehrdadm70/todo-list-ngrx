import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() { }

  // شبیه‌سازی دریافت تمام تسک‌ها از API
  getTasks(): Observable<Task[]> {
    return of([...this.tasks]).pipe(delay(500));
  }

  // شبیه‌سازی اضافه کردن تسک جدید
  addTask(title: string): Observable<Task> {
    if (!title.trim()) {
      return throwError(() => new Error('عنوان تسک نمی‌تواند خالی باشد'));
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: title.trim(),
      completed: false,
      createdAt: new Date()
    };

    this.tasks.push(newTask);
    return of(newTask).pipe(delay(500));
  }

  // شبیه‌سازی به‌روزرسانی وضعیت تسک
  updateTaskStatus(id: string, completed: boolean): Observable<Task> {
    const task = this.tasks.find(t => t.id === id);
    
    if (!task) {
      return throwError(() => new Error('تسک یافت نشد'));
    }

    task.completed = completed;
    return of({...task}).pipe(delay(500));
  }

  // شبیه‌سازی حذف تسک
  deleteTask(id: string): Observable<string> {
    const index = this.tasks.findIndex(t => t.id === id);
    
    if (index === -1) {
      return throwError(() => new Error('تسک یافت نشد'));
    }

    this.tasks.splice(index, 1);
    return of(id).pipe(delay(500));
  }
} 