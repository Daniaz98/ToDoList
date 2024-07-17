import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveTasks(tarefas: string[]) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
  }

  getTasks(): string[] {
    if (typeof localStorage !== 'undefined') {
      const tarefasString = localStorage.getItem('tarefs');
      return tarefasString ? JSON.parse(tarefasString) : [];
    } else {
      return [];
    }
  }

  cleanTasks() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('tarefas');
      location.reload();
    }
  }
}
