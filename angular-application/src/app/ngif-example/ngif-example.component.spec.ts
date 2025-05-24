import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifExampleComponent } from './ngif-example.component';

describe('NgifExampleComponent', () => {
  let component: NgifExampleComponent;
  let fixture: ComponentFixture<NgifExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgifExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
