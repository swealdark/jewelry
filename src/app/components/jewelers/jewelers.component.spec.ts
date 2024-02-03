import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelersComponent } from './jewelers.component';

describe('JewelersComponent', () => {
  let component: JewelersComponent;
  let fixture: ComponentFixture<JewelersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JewelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
