import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerlistComponent } from './partnerlist.component';

describe('PartnerlistComponent', () => {
  let component: PartnerlistComponent;
  let fixture: ComponentFixture<PartnerlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerlistComponent]
    });
    fixture = TestBed.createComponent(PartnerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
