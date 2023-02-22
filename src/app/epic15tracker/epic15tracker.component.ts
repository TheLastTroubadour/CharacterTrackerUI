import {Component, OnInit} from '@angular/core';
import {Epic15Quest} from "../model/epic1-5-quest";
import {Epic15Service} from "../service/epic1-5.service";

@Component({
  selector: 'app-epic15tracker',
  templateUrl: './epic15tracker.component.html',
  styleUrls: ['./epic15tracker.component.css']
})
export class Epic15trackerComponent implements OnInit{
  epic1_5Quests: Epic15Quest[] = []

  constructor(private epic15Service: Epic15Service) {
  }

  ngOnInit(): void {
    this.getEpic15Array();
  }

  getEpic15Array(){
    this.epic15Service.getAllEpic15()
      .subscribe({
          next: (value: Epic15Quest[]) => {
            this.epic1_5Quests = value;
          },
          error: (x: any) => console.log('Error', x),
        }
      );
  }
}
