import { Component, signal } from '@angular/core';
import { User } from './user/user';
import { Footer } from './footer/footer';

@Component({
  imports: [User, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular web');
  protected user = signal('juan');
}
