import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';

import { MatSliderModule }  from '@angular/material/slider';
import { MatButtonModule }  from '@angular/material/button';
import { MatSelectModule }  from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule }    from '@angular/material/icon';
import { MatCardModule }    from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatSliderModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule { }
