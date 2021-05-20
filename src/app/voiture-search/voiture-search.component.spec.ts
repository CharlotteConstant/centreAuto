import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureSearchComponent } from './voiture-search.component';

describe('VoitureSearchComponent', () => {
  let component: VoitureSearchComponent;
  let fixture: ComponentFixture<VoitureSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitureSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoitureSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
