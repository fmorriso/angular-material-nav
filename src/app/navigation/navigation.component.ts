import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  background = '';
  links = ['Home', 'About', 'Contact'];

  navLinks = [{
    path: '/home',
    label: 'Home'
  },{
    path: '/about',
    label: 'About'
  },
    {
      path: '/contact',
      label: 'Contact Us'
    }];

  activeLink = this.links[0];
  constructor() { }

  ngOnInit() {
    this.background = 'primary';
  }

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

}
