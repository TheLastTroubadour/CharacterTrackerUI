import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {
  users: User[] = []

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => this.users = data);
  }
}
