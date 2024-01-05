import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupComponent } from './lookup.component';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('LookupComponent', () => {
  let component: LookupComponent;
  let fixture: ComponentFixture<LookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookupComponent], 
      providers:[provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
