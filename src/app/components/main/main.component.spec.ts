import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { NgxPaginationModule } from 'ngx-pagination';

import { MainComponent } from './main.component';
import { ListingComponent } from '../listing/listing.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent, ListingComponent ],
      imports: [
        MatToolbarModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        NgxPaginationModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show populate allJobs list', () => {
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable()
    .then(() => {
      expect(component.showError).toBeTruthy();
    });
  });

  it('should show error if no search parameters are added', () => {
    component.onSearch();
    fixture.detectChanges();
    expect(component.showError).toBeTruthy();
  });

  it('should execute oneSearch function appropriately', () => {
    component.location = 'Nowhere';
    spyOn(component, 'oneSearch');
    component.onSearch();
    fixture.detectChanges();
    expect(component.oneSearch).toHaveBeenCalled();
  });

  it('should execute twoSearch function appropriately', () => {
    component.location = 'Nowhere';
    component.skill = 'Angular';
    spyOn(component, 'twoSearch');
    component.onSearch();
    fixture.detectChanges();
    expect(component.twoSearch).toHaveBeenCalled();
  });

  it('should execute allSearch function appropriately', () => {
    component.location = 'Nowhere';
    component.skill = 'Angular';
    component.experience = '2';
    spyOn(component, 'allSearch');
    component.onSearch();
    fixture.detectChanges();
    expect(component.allSearch).toHaveBeenCalled();
  });
});
