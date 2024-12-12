import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav_bar/nav_bar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavBar
  ],
  template: `
    <div>
      <router-outlet/>
    </div>
    <nav_bar />
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
