import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <!-- Footer Start -->
  <footer class="page-footer font-small pt-4">
      <div class="footer-copyright text-center text-white" style="background-color: rgb(0, 26, 255);">Copyright 2020</div>
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
