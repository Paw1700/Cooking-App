import { Component, inject, OnInit } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav_bar/nav_bar.component';
import { APP_SERVICE } from './app.service';

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
export class AppComponent implements OnInit{
  private readonly contexts = inject(ChildrenOutletContexts)
  private APP = inject(APP_SERVICE)

  ngOnInit(): void {
    this.APP.startApp()
  }

  protected getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['page_name'];
  }
}
