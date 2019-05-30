import { Component, OnInit } from '@angular/core';

import { HomeHeroComponent } from '../home-hero/home-hero.component';
import { HomeBannerComponent } from '../home-banner/home-banner.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
