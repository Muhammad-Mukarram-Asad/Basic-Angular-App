import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityItem } from './entity-item';

describe('EntityItem', () => {
  let component: EntityItem;
  let fixture: ComponentFixture<EntityItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
