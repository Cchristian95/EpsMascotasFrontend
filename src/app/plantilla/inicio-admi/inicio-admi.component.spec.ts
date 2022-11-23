import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAdmiComponent } from './inicio-admi.component';

describe('InicioAdmiComponent', () => {
  let component: InicioAdmiComponent;
  let fixture: ComponentFixture<InicioAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioAdmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
