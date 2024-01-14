import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamelookupItemComponent } from './gamelookup-item.component';

describe('GamelookupItemComponent', () => {
  let component: GamelookupItemComponent;
  let fixture: ComponentFixture<GamelookupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamelookupItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamelookupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
