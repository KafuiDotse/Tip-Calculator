import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSelectorComponent } from './people-selector.component';

describe('PeopleSelectorComponent', () => {
  let component: PeopleSelectorComponent;
  let fixture: ComponentFixture<PeopleSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
