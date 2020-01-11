import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TryPagePage } from './try-page.page';

describe('TryPagePage', () => {
  let component: TryPagePage;
  let fixture: ComponentFixture<TryPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TryPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
