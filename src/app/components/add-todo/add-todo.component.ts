import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo, updateTodo } from '../../store/actions/todo.actions';
import { selectTodos } from '../../store/selectors/todo.selectors';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center p-4">
      <div class="card w-full max-w-md">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
          {{ isEditMode ? 'Edit Todo' : 'Add New Todo' }}
        </h2>

        <form (ngSubmit)="submitTodo()" #todoForm="ngForm" class="space-y-4">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
              Todo Title
            </label>
            <input 
              id="title" 
              name="title" 
              [(ngModel)]="title" 
              required 
              class="input"
              placeholder="e.g. Buy bread, Call a friend..."
            />
          </div>

          <button 
            type="submit" 
            [disabled]="!title"
            class="btn btn-add w-full flex justify-center items-center"
            [class.opacity-50]="!title"
            [class.cursor-not-allowed]="!title"
          >
            <svg *ngIf="!isEditMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <svg *ngIf="isEditMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            {{ isEditMode ? 'Update' : 'Add' }}
          </button>
        </form>

        <div *ngIf="success" class="mt-4 p-3 bg-[#C4B5FD] bg-opacity-20 text-[#7C3AED] rounded-lg text-center flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ isEditMode ? 'Todo updated successfully!' : 'New todo added successfully!' }}
        </div>

        <div class="mt-6 text-center">
          <a routerLink="/todos" class="text-[#5EEAD4] hover:text-[#2DD4BF] transition-colors font-bold flex items-center justify-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Todo List
          </a>
        </div>
      </div>
    </div>
  `
})
export class AddTodoComponent implements OnInit {
  title = '';
  success = false;
  isEditMode = false;
  editIndex: number | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.editIndex = +params['id'];
        this.loadTodoData();
      }
    });
  }

  private loadTodoData() {
    this.store.select(selectTodos)
      .pipe(take(1))
      .subscribe(todos => {
        if (this.editIndex !== null && todos[this.editIndex]) {
          this.title = todos[this.editIndex];
        }
      });
  }

  submitTodo() {
    if (this.isEditMode && this.editIndex !== null) {
      this.store.dispatch(updateTodo({ index: this.editIndex, title: this.title }));
    } else {
      this.store.dispatch(addTodo({ title: this.title }));
    }
    
    this.success = true;
    setTimeout(() => {
      this.router.navigate(['/todos']);
    }, 1000);
  }
} 