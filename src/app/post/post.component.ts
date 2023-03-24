//OnInit nằm trong lifecycle hooks
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title: string = 'List of Posts';
  messagePost: string = 'Message from Post';
  fromPostParentMessage: string = 'Message coming from Post Parent';
  childMessageComp: string = 'Message from child Post Component';
  outputChildMessage: string =
    'Message from Child Component Via Output Emitter';
  //Muốn nhận dữ liệu từ cha (app.component) phải mở cổng khai báo Input cho biến fromParentMessage
  @Input() fromParentMessage: string | undefined;
  @Output() messageEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  sendMessage() {
    this.messageEvent.emit(this.outputChildMessage);
  }
}
