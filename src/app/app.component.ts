import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};

  data: any = [];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost/employee.php').subscribe(
      data => {
        this.data = data;
        console.log(data);
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
}
