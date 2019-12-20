import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from '../interfaces/page.interface';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  info: Page = {};
  loaded: boolean = false;
  team: any[] = []; 

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  private loadInfo() {
    this.http.get('assets/data/page.json')
      .subscribe((resp: Page) => {
        this.loaded = true;
        this.info = resp;
      })
  }

  private loadTeam() {
    this.http.get('https://angular-firebase-github.firebaseio.com/team.json')
      .subscribe((resp: any[]) => {
        this.loaded = true;
        this.team = resp;
      })
  }
}
