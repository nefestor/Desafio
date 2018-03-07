import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  now = moment().format('LLLL');

  constructor(private httpClient: HttpClient) {}
}
