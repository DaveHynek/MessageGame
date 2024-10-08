import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterGridComponent } from './letter-grid.component';

describe('LetterGridComponent', () => {
  let component: LetterGridComponent;
  let fixture: ComponentFixture<LetterGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
