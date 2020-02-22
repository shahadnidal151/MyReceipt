import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MylimitPage } from './mylimit.page';

describe('MylimitPage', () => {
  let component: MylimitPage;
  let fixture: ComponentFixture<MylimitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylimitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MylimitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
