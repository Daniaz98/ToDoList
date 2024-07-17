import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-tarefa',
  templateUrl: './add-tarefa.component.html',
  styleUrl: './add-tarefa.component.css',
})
export class AddTarefaComponent {
  public newTask: string = '';
  public txtBtnAddTarefa: string = 'Adicionar tarefa';

  @Output() novaTarefaAdicionada = new EventEmitter<string>();

  addTasks() {
    //alert(this.newTask);
    if (this.newTask.trim() !== '') {
      this.novaTarefaAdicionada.emit(this.newTask);
      this.newTask = '';
    }
  }
}
