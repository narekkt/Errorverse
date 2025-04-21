import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import {AboutComponent} from './features/about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'Errorverse';
}
