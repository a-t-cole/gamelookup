import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanhandlerComponent } from './scanhandler.component';

describe('ScanhandlerComponent', () => {
  let component: ScanhandlerComponent;
  let fixture: ComponentFixture<ScanhandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanhandlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScanhandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
