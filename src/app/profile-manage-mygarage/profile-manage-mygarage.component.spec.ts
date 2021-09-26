import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileManageMygarageComponent } from './profile-manage-mygarage.component';

describe('ProfileManageMygarageComponent', () => {
  let component: ProfileManageMygarageComponent;
  let fixture: ComponentFixture<ProfileManageMygarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileManageMygarageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileManageMygarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
