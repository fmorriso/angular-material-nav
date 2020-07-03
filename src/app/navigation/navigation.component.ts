import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomLink } from './custom-link';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  background = 'primary';
  links: CustomLink[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // build the navigation links using the Angular route config that was defined in app-routing.module.ts
    // and dependency-injected into this component, which effectively shares that route information without
    // having to define a separate Angular service component.
    for (const route of this.router.config) {
      // we only care about the ones that have a data.label since the others are not going to be rendered in our navigation bar
      if (route.data && route.data.label) {
        const link: CustomLink = {
          path: `/${route.path}`,
          label: route.data.label
        };
        this.links.push(link);
      }
    }
    console.log(JSON.stringify(this.links));
  }
}
