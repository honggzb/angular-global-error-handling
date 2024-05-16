import { OnInit, Component, ViewChild, AfterViewInit } from '@angular/core';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'qh-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {

  constructor(private http: HttpClient) {}

  localError() {
    throw Error('The app component has thrown an error!');
  }

  async failingRequest() {
    const req$ = this.http.get('https://httpstat.us/404?sleep=2000');
    await lastValueFrom(req$);
  }

  async successfulRequest() {
    const req$ = this.http.get('https://httpstat.us/200?sleep=2000');
    await lastValueFrom(req$);
  }

}
