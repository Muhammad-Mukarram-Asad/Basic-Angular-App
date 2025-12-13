import { Component } from '@angular/core';
import { AppDataService } from '../../shared/app-data';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.html',
  styleUrl: './my-tasks.scss',
})
export class MyTasks {

  constructor(public appData: AppDataService) {}
}


// 🔑 What just happened

// AppDataService is injected via constructor

// Angular creates and provides the instance

// public allows use directly in the template

// This is Dependency Injection.