import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngOrganismComponent } from './ang-organism.component';

describe('AngOrganismComponent', () => {
  let component: AngOrganismComponent;
  let fixture: ComponentFixture<AngOrganismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngOrganismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
