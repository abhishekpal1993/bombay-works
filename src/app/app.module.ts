import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// core and shared modules
import { CoreModule } from '@bw/core';
import { AppRoutingModule } from './app-routing.module';

// material-angular imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShapeCalcComponent } from './shape-calc/shape-calc.component';
import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    ShapeCalcComponent,
    PdfReaderComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
