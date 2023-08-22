import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudencrudComponent } from './studencrud.component';

describe('StudencrudComponent', () => {
  let component: StudencrudComponent;
  let fixture: ComponentFixture<StudencrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudencrudComponent]
    });
    fixture = TestBed.createComponent(StudencrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
