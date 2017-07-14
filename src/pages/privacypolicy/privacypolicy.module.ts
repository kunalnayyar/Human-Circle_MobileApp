import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivacypolicyPage } from './privacypolicy';

@NgModule({
  declarations: [
    PrivacypolicyPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivacypolicyPage),
  ],
  exports: [
    PrivacypolicyPage
  ]
})
export class PrivacypolicyPageModule {}
