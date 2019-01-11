import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRecipesDetailComponent } from './profile-recipes-detail.component';

describe('ProfileRecipesDetailComponent', () => {
  let component: ProfileRecipesDetailComponent;
  let fixture: ComponentFixture<ProfileRecipesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileRecipesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRecipesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
