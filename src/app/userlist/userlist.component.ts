import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../service/user.service";
import {Observable, catchError, of} from "rxjs";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {
  users$: Observable<User[]> = new Observable();
  error: string | null = null;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers().pipe(
      catchError(() => {
        this.error = 'Failed to load users.';
        return of([]);
      })
    );
  }
}
