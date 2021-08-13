import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private selectedPage = "home";

  constructor() { }

  ngOnInit(): void {
  }

  public setSelectedPage(selectedPage: string): void {
    this.selectedPage = selectedPage;
  }

}
