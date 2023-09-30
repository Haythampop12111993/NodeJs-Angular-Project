import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallProductComponent } from './showall-product.component';

describe('ShowallProductComponent', () => {
  let component: ShowallProductComponent;
  let fixture: ComponentFixture<ShowallProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowallProductComponent]
    });
    fixture = TestBed.createComponent(ShowallProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
