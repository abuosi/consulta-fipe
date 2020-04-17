import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaAnoModeloComponent } from './busca-ano-modelo.component';

describe('BuscaAnoModeloComponent', () => {
  let component: BuscaAnoModeloComponent;
  let fixture: ComponentFixture<BuscaAnoModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaAnoModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaAnoModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
