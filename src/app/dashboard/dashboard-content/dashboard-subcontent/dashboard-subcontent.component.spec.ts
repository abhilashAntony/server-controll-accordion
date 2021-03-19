import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSubcontentComponent } from './dashboard-subcontent.component';

describe('DashboardSubcontentComponent', () => {
  let component: DashboardSubcontentComponent;
  let fixture: ComponentFixture<DashboardSubcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSubcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSubcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
