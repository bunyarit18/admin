import { Component, OnInit } from '@angular/core';
import { ScriptService } from './script.service';

const url = 'http://127.0.0.1:8080/calendar.js';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})

export class CalendarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    this.loadScript();
  }

  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}

