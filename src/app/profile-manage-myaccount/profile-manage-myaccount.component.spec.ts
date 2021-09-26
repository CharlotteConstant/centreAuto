import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileManageMyaccountComponent } from './profile-manage-myaccount.component';

describe('ProfileManageMyaccountComponent', () => {
  let component: ProfileManageMyaccountComponent;
  let fixture: ComponentFixture<ProfileManageMyaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileManageMyaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileManageMyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
