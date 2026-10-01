import { effect, Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    darkMode = signal<boolean>(true);

    constructor() {
        effect(() => {
            document.documentElement.classList.toggle('dark', this.darkMode());
        });
    }

    toggle() {
        this.darkMode.update(v => !v);
    }
}
