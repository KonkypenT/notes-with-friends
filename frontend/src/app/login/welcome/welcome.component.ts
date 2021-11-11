import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ROUTE_NAMES } from '../../routing/route-names.conts';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  constructor(private navCtrl: NavController) {}

  public goToSignUp(): void {
    this.navCtrl.navigateForward([ROUTE_NAMES.login, ROUTE_NAMES.signUp]);
  }
}
