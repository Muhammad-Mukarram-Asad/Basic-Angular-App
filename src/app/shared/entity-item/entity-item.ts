import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { CalendarEntity } from '../app-data';

@Component({
  selector: 'app-entity-item',
  imports: [NgIf],   // 👈 REQUIRED
  templateUrl: './entity-item.html',
  styleUrl: './entity-item.scss',
})
export class EntityItem {
  @Input() entity!: CalendarEntity;

  isTask(entity: CalendarEntity): entity is { type: 'task'; title: string; completed: boolean } {
    return entity.type === 'task';
  }

  isNote(entity: CalendarEntity): entity is { type: 'note'; title: string; content: string } {
    return entity.type === 'note';
  }

  isEvent(entity: CalendarEntity): entity is { type: 'event'; title: string; date: string } {
    return entity.type === 'event';
  }
}
