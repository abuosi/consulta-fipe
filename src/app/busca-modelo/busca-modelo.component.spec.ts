import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaModeloComponent } from './busca-modelo.component';

describe('BuscaModeloComponent', () => {
  let component: BuscaModeloComponent;
  let fixture: ComponentFixture<BuscaModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
