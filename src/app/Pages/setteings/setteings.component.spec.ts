import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetteingsComponent } from './setteings.component';

describe('SetteingsComponent', () => {
  let component: SetteingsComponent;
  let fixture: ComponentFixture<SetteingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetteingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetteingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
