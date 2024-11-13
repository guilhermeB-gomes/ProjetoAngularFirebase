import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmadurasPage } from './armaduras.page';

describe('ArmadurasPage', () => {
  let component: ArmadurasPage;
  let fixture: ComponentFixture<ArmadurasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArmadurasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
