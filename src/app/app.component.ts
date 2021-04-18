import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orvium';
  darkTheme = false;

  mockData = {
    types: [
      { text: 'Published', color: 'green' },
      { text: 'Open Review', color: 'blue' },
    ],
    versionData: {
      icons: [ 'check_circle_outline', 'change_circle', 'error' ],
      text:  'version 2'
    },
    categorySection: {
      upperText: 'Software Documentation',
      lowerText: 'The Evolving Scholar'
    },
    nameSection: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quae sequi rem earum obcaecati enim atque qui sunt.'
    },
    authorsSection: {
      date: '14 Jun 2020',
      users: [
        { name: 'User name1', image: '/assets/img/avatar1.png' },
        { name: 'User name2', image: '/assets/img/avatar2.png' },
        { name: 'User user', image: '' },
        { name: 'User user', image: '' },
        { name: 'User user', image: '' },
        { name: 'User user', image: '' },
        { name: 'User user', image: '' },
        { name: 'User user', image: '' },
        { name: 'User user', image: '' },
        { name: 'User user', image: '' },
        { name: 'User user', image: '' },
        { name: 'User user', image: '' },
        { name: 'User user', image: '' },
      ]
    },
    secondarySection: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quae sequi rem earum obcaecati enim atque qui sunt culpa, beatae amet nulla ea consectetur quis asperiores magni exercitationem voluptatum. Amet.'
    },
    comments: [
      { mock: 'mock' },
      { mock: 'mock' },
      { mock: 'mock' }
    ],
    views: 43,
  }

  @HostBinding('class')
  get themeMode() {
    return this.darkTheme ? 'dark-theme' : 'light-theme'
  }

  switchMode(): void { this.darkTheme = !this.darkTheme }
}
