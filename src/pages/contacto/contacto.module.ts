import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactoPage } from './contacto';

@NgModule({
  declarations: [
    ContactoPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactoPage),
  ],
  exports: [
    ContactoPage
  ]
})
export class ContactoPageModule {}
