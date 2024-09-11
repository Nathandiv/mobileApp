import { Component } from '@angular/core';
import { NavComponent } from '../../UI/Shared-UI/nav/nav.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
