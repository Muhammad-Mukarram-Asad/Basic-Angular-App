import { Component } from '@angular/core';
import { AppDataService, CalendarEntity } from '../../shared/app-data';
import { EntityItem } from '../../shared/entity-item/entity-item';
import { NgFor } from '@angular/common';


// Logic goes here of the component in the .ts file

@Component({
  selector: 'app-my-dashboard',
  imports: [EntityItem, NgFor],
  templateUrl: './my-dashboard.html',
  styleUrl: './my-dashboard.scss',
})
export class MyDashboard {
 entities: CalendarEntity[];

  constructor(private dataService: AppDataService) {
    this.entities = dataService.entities;
  }
}
