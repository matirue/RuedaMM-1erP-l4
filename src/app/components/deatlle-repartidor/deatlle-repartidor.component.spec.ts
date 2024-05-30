import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatlleRepartidorComponent } from './deatlle-repartidor.component';

describe('DeatlleRepartidorComponent', () => {
  let component: DeatlleRepartidorComponent;
  let fixture: ComponentFixture<DeatlleRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatlleRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatlleRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
