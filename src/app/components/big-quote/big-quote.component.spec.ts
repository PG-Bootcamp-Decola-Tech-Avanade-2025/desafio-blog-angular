import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigQuoteComponent } from './big-quote.component';

describe('BigQuoteComponent', () => {
  let component: BigQuoteComponent;
  let fixture: ComponentFixture<BigQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigQuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
