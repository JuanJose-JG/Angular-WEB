import { Component, computed, signal } from '@angular/core';
import { Book } from '../book/book';

@Component({
  standalone: true,
  imports: [Book],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  protected isLogged = signal(false);
  protected userName = signal('');

  protected isNameValid = computed(() => this.userName().trim().length > 0);

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;

    const filteredValue = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    input.value = filteredValue;
    this.userName.set(filteredValue);
  }

  onKeyDown(event: KeyboardEvent) {

    const allowedKeys = ['Backspace', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (allowedKeys.includes(event.key) || event.ctrlKey || event.metaKey) {
      return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/.test(event.key)) {
      event.preventDefault();
    }
  }

  login() {
    if (this.isNameValid()) {
      this.isLogged.set(true);
    }
  }

  logout() {
    this.isLogged.set(false);
    this.userName.set('');
  }
}
