import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShapeCalcComponent } from './shape-calc/shape-calc.component';
import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';

const routes: Routes = [
  { path: '', component: ShapeCalcComponent },
  { path: 'tasks', component: PdfReaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
