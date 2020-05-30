import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <!-- Footer Start -->
  <footer class="navbar text-white bg-primary navbar-expand-sm fixed-bottom">
    <div>
        Copyright © 2020
    </div>
  </footer>
  <!-- Footer End -->
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
