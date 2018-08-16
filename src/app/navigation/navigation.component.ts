import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  background = 'primary';

  navLinks = [
    {
      path: '/home',
      label: 'Home'
    },
    {
      path: '/about',
      label: 'About'
    },
    {
      path: '/contact',
      label: 'Contact Us'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
