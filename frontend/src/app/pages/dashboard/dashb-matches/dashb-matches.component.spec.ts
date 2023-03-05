import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbMatchesComponent } from './dashb-matches.component';

describe('DashbMatchesComponent', () => {
  let component: DashbMatchesComponent;
  let fixture: ComponentFixture<DashbMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
