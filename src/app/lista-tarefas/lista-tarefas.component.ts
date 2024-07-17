import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css',
})
export class ListaTarefasComponent implements OnInit {
  public txtTitle: string = 'Lista de tarefas';
  public txtBtnReiniciar: string = 'Reiniciar lista';
  public txtBtnConcluir: string = 'Concluir';
  public tarefas: string[] = ['Estudar C#', 'Estudar NodeJS', 'Ler Duna'];

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.tarefas = this.localStorage.getTasks();
  }

  restartList() {
    //alert('Teste de Botão Reiniciar');

    this.localStorage.cleanTasks();
  }

  completedTask(tarefa: string) {
    //alert('Teste de Botão Concluir');
    this.tarefas = this.tarefas.filter((item) => item !== tarefa);
    this.localStorage.saveTasks(this.tarefas);
  }

  addTasks(novaTarefa: string) {
    this.tarefas.push(novaTarefa);
    this.localStorage.saveTasks(this.tarefas);
  }
}
