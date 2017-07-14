import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsandconditionsPage } from './termsandconditions';

@NgModule({
  declarations: [
    TermsandconditionsPage,
  ],
  imports: [
    IonicPageModule.forChild(TermsandconditionsPage),
  ],
  exports: [
    TermsandconditionsPage
  ]
})
export class TermsandconditionsPageModule {}
