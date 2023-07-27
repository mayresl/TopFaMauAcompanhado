import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoTopFaComponent } from './novo-top-fa.component';

describe('NovoTopFaComponent', () => {
  let component: NovoTopFaComponent;
  let fixture: ComponentFixture<NovoTopFaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoTopFaComponent]
    });
    fixture = TestBed.createComponent(NovoTopFaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
