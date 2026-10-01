import { Component, inject } from '@angular/core';
import { User } from './user/user';
import { Footer } from './footer/footer';
import { ThemeService } from './services/theme-service';

@Component({
  imports: [User, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  themeService = inject(ThemeService)
}
