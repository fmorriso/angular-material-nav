import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
//
import { CustomLink } from './custom-link';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: false
})
export class NavigationComponent implements OnInit {
  background = 'primary';
  links: CustomLink[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // build the navigation links using the Angular route config that was defined in app-routing.module.ts
    // and dependency-injected into this component, which effectively shares that route information without
    // having to define a separate Angular service component.
    for (const route of this.router.config) {
      // we only care about the ones that have a title attribute,
      // since the others are not going to be rendered in our navigation bar
      if (route.title) {
        //WARNING: must use string interpolation to convert title from Resolve<string> to just string
        const link: CustomLink = {
          path: `/${route.path}`,
          label: `${route.title}`
        };
        this.links.push(link);
      }
    }
    console.log(JSON.stringify(this.links));
  }
}
