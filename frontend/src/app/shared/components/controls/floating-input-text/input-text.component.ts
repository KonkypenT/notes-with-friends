import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent {
  @Input() public form = new FormGroup({});
  @Input() public placeholder = '';
  @Input() public controlName = '';
  @Input() public position = 'floating';
}
