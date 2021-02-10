import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // @Input() loggedIn: boolean;
  // @Input() firstName: string;
  // @Output() loginBtnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // emitLoginClick() {
  //   this.loginBtnClick.emit();
  // }
}
