import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchooldetailsPage } from './schooldetails.page';

describe('SchooldetailsPage', () => {
  let component: SchooldetailsPage;
  let fixture: ComponentFixture<SchooldetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchooldetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchooldetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
