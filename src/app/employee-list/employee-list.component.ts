import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  users: any;

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.user.getUser()
      .subscribe(res => {
        this.users = res;
      })
  }

}
