import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRecipesEditComponent } from './profile-recipes-edit.component';

describe('ProfileRecipesEditComponent', () => {
  let component: ProfileRecipesEditComponent;
  let fixture: ComponentFixture<ProfileRecipesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileRecipesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRecipesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
