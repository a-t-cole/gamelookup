import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListPickerComponent } from './modal-list-picker.component';

describe('ModalListPickerComponent', () => {
  let component: ModalListPickerComponent;
  let fixture: ComponentFixture<ModalListPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalListPickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalListPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
