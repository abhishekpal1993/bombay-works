import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfReaderComponent } from './pdf-reader.component';
import { CoreModule } from '@bw/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PdfReaderComponent', () => {
  let component: PdfReaderComponent;
  let fixture: ComponentFixture<PdfReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        BrowserAnimationsModule
      ],
      declarations: [ PdfReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
