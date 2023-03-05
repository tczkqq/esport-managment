import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbMatchesDialogComponent } from './dashb-matches-dialog.component';

describe('DashbMatchesDialogComponent', () => {
  let component: DashbMatchesDialogComponent;
  let fixture: ComponentFixture<DashbMatchesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashbMatchesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbMatchesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
