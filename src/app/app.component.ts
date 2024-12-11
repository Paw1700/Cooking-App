import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  template: `
    <div>
      <router-outlet/>
    </div>
  `,
  styles: `

  `
})
export class AppComponent {
  private readonly contexts = inject(ChildrenOutletContexts)

  protected getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['page_name'];
  }
}
