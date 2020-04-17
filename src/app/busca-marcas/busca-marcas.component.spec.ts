import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaMarcasComponent } from './busca-marcas.component';

describe('BuscaMarcasComponent', () => {
  let component: BuscaMarcasComponent;
  let fixture: ComponentFixture<BuscaMarcasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaMarcasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
