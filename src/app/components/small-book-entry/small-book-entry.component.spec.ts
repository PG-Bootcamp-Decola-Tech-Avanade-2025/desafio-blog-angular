import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBookEntryComponent } from './small-book-entry.component';

describe('SmallBookEntryComponent', () => {
  let component: SmallBookEntryComponent;
  let fixture: ComponentFixture<SmallBookEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallBookEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallBookEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
