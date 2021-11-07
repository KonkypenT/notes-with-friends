import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ROUTE_NAMES } from '../routing/route-names.conts';
import { SharedModule } from '../shared/shared.module';
import { LoginPage } from './login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage,
        children: [
          {
            path: ROUTE_NAMES.welcome,
            component: WelcomeComponent,
          },
          {
            path: ROUTE_NAMES.signUp,
            component: SignUpComponent,
          },
        ],
      },
    ]),
  ],
  declarations: [LoginPage, SignUpComponent, WelcomeComponent],
  entryComponents: [],
})
export class LoginModule {}
