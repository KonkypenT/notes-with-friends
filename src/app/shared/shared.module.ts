import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { controls } from './components/controls';

@NgModule({
  imports: [IonicModule, FormsModule, ReactiveFormsModule, CommonModule],
  exports: [...controls],
  declarations: [...controls],
  providers: [],
})
export class SharedModule {}
