import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {
  mobileData = [
    {"path": "assets/nokia.jpg", "name": "Nokia", "price": "12000"},
    {"path": "assets/samsung.jpg", "name": "Samsung", "price": "13000"},
    {"path": "assets/sony.jpg", "name": "Sony", "price": "14000"},
    {"path": "assets/motorola.jpg", "name": "Motorola", "price": "15000"},
    {"path": "assets/apple.jpg", "name": "Apple", "price": "16000"},
  ]


  constructor() { }

  ngOnInit() {
  }

}
