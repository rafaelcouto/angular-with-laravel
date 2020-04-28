import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) { }


  async ngOnInit(): Promise<any> {

    const response = await this.http.get(environment.API_URL + '/test').toPromise();
    console.log(response);
  }

}
