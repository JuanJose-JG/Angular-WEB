import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styles: ``,
  template: `
  <div class="flex justify-center items-center py-6">
    <p class="dark:text-slate-200">Copyright {{ year() }} - Angular Web</p>
  </div>
  `,
})
export class Footer {
  year = signal(new Date().getFullYear());
}
