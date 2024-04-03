import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';

@Injectable({

  providedIn: 'root'
})
export class NavigationService {

  // TODO: Needs to go in a configuration
  authEndpoint = "http://localhost:5223/api/meeting";
  // TODO: This is my personal and it works: Remove before merge.
  // meetingNumber = '5688892491'
  // passWord = 'enH96n'

  constructor(private httpClient: HttpClient) { }


  navigate(routerLink: string, section: string = '') {
    const navigateToNewWithUser: NavigationExtras = {
      fragment: section,
    };
    window.location.hash = '';
    window.location.hash = section;

    // this.router.navigate([routerLink], navigateToNewWithUser);
  }

  async example(meetingNumber: string, role: string): Promise<string> {
    const data = await fetch(this.authEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role
      })
    });
    return await data.json() ?? '';
  }
}

