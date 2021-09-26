import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileManageMyadComponent } from './profile-manage-myad.component';

describe('ProfileManageMyadComponent', () => {
  let component: ProfileManageMyadComponent;
  let fixture: ComponentFixture<ProfileManageMyadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileManageMyadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileManageMyadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
