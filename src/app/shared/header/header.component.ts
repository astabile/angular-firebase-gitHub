import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _page : PageService,
              private router: Router) { }

  ngOnInit() {
  }

  public search(entry: string) {
    if(entry.length < 1)
      return;

    this.router.navigate(['/search', entry]);
  }

}
