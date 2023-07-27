import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosTopFasComponent } from './proximos-top-fas.component';

describe('ProximosTopFasComponent', () => {
  let component: ProximosTopFasComponent;
  let fixture: ComponentFixture<ProximosTopFasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProximosTopFasComponent]
    });
    fixture = TestBed.createComponent(ProximosTopFasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
