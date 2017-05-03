import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MaterialsPage } from './materials';

@NgModule({
  declarations: [
    MaterialsPage,
  ],
  imports: [
    IonicModule.forRoot(MaterialsPage),
  ],
  exports: [
    MaterialsPage
  ]
})
export class MaterialsModule {}
