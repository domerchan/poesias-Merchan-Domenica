import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoemasPage } from './poemas.page';

describe('PoemasPage', () => {
  let component: PoemasPage;
  let fixture: ComponentFixture<PoemasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
