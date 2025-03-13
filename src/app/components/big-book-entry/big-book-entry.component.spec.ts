import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBookEntryComponent } from './big-book-entry.component';

describe('BigBookEntryComponent', () => {
  let component: BigBookEntryComponent;
  let fixture: ComponentFixture<BigBookEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigBookEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigBookEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
