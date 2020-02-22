import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyRecPage } from './my-rec.page';

describe('MyRecPage', () => {
  let component: MyRecPage;
  let fixture: ComponentFixture<MyRecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyRecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
