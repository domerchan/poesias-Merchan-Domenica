import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubirPoemaPage } from './subir-poema.page';

describe('SubirPoemaPage', () => {
  let component: SubirPoemaPage;
  let fixture: ComponentFixture<SubirPoemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirPoemaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubirPoemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
