import {Component, OnInit} from '@angular/core';
import {Tier5XegonyKeyQuest} from "../model/tier5-xegony-key-quest";
import {Tier5QuestTrackerService} from "../service/tier5-quest-tracker.service";
import {Tier5PoAAugmentQuest} from "../model/tier5-po-aaugment-quest";

@Component({
  selector: 'app-tier5-quest-tracker',
  templateUrl: './tier5-quest-tracker.component.html',
  styleUrls: ['./tier5-quest-tracker.component.css']
})
export class Tier5QuestTrackerComponent implements OnInit{

  xegony_key_quests : Tier5XegonyKeyQuest[] = []
  poa_augment_quests: Tier5PoAAugmentQuest[] = []

  constructor(private tier5QuestService: Tier5QuestTrackerService) {
  }

  ngOnInit(): void {
    this.getXegonyKeyQuests();
    this.getPoAAugmentQuests();
  }

  getXegonyKeyQuests() {
    this.tier5QuestService.getAllXegonyKeyQuests().subscribe({
       next: (value: Tier5XegonyKeyQuest[]) => {
         this.xegony_key_quests = value;
      },
        error: (x:any) => console.log('Error', x),
    });
  }

  getPoAAugmentQuests() {
    this.tier5QuestService.getAllPoAAugmentQuests().subscribe({
      next:(value: Tier5PoAAugmentQuest[]) => {
        this.poa_augment_quests = value
      },
      error: (x:any) => console.log('Error', x),
    });
  }

}

