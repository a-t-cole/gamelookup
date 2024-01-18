import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BggSearchComponent } from './bgg-search.component';

describe('BggSearchComponent', () => {
  let component: BggSearchComponent;
  let fixture: ComponentFixture<BggSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BggSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BggSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
