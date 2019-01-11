import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRecipesListComponent } from './profile-recipes-list.component';

describe('ProfileRecipesListComponent', () => {
  let component: ProfileRecipesListComponent;
  let fixture: ComponentFixture<ProfileRecipesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileRecipesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
