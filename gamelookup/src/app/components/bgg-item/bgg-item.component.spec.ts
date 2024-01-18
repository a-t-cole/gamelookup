import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BggItemComponent } from './bgg-item.component';

describe('BggItemComponent', () => {
  let component: BggItemComponent;
  let fixture: ComponentFixture<BggItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BggItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BggItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
