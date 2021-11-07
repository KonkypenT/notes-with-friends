import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public form = new FormGroup({});
  public platformWeb = false;

  constructor(private navCtrl: NavController, private fb: FormBuilder, private platform: Platform) {}

  public ngOnInit(): void {
    this.initForm();
    this.platformWeb = this.platform.is('mobileweb');
  }

  public goToBack(): void {
    this.navCtrl.back();
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      nickname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
    });
  }
}
