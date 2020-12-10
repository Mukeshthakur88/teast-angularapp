import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private dashboard: DashboardService) {
  }
  ngOnInit() {
    this.returnData() 
  }
isLoading:boolean= false;
  todos: any = undefined;
  returnData() {
    this.isLoading=true;
    this.dashboard.getData().subscribe((data) => {
      this.todos = data;
      this.isLoading=false;
    })
  }

}