import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  parentMessage: string = 'Message changed';
  message: string | undefined;
  fromChildOutput: string | undefined;
  @ViewChild(PostComponent) childComp: any;

  constructor() {
    console.log(this.childComp);
  }

  ngAfterViewInit() {
    console.log(this.childComp);
    this.message = this.childComp.childMessageComp;
  }

  recieveMessage($event: any) {
    this.fromChildOutput = $event;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
