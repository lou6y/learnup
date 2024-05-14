import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding">
        <img src="../../../../assets/images/logo.png" alt="Girl in a jacket" width="200" height="100">
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
