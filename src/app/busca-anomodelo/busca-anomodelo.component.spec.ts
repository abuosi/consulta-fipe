import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaAnomodeloComponent } from './busca-anomodelo.component';

describe('BuscaAnomodeloComponent', () => {
  let component: BuscaAnomodeloComponent;
  let fixture: ComponentFixture<BuscaAnomodeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaAnomodeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaAnomodeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
