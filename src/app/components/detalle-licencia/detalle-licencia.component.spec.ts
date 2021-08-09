import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLicenciaComponent } from './detalle-licencia.component';

describe('DetalleLicenciaComponent', () => {
  let component: DetalleLicenciaComponent;
  let fixture: ComponentFixture<DetalleLicenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleLicenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleLicenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
