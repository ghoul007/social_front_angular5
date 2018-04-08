import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFriendsComponent } from './users-friends.component';

describe('UsersFriendsComponent', () => {
  let component: UsersFriendsComponent;
  let fixture: ComponentFixture<UsersFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
