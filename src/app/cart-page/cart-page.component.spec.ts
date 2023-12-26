import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartpageComponent } from './cart-page.component';

describe('CartpageComponent', () => {
  let component: CartpageComponent;
  let fixture: ComponentFixture<CartpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
