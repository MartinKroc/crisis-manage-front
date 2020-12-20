import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../shared/api-service.service';
import {Watermeasureimgw} from '../models/watermeasureimgw';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
}
