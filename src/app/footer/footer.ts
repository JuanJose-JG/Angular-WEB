import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styles: ``,
  template: `
  <div class="flex justify-center my-10">
    <p class="text-white">Copyright {{ year() }} - Angular Web</p>
  </div>
  `,
})
export class Footer {
  year = signal(new Date().getFullYear());
}
