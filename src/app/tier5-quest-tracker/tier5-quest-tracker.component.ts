import {Component, OnInit} from '@angular/core';
import {Tier5XegonyKeyQuest} from "../model/tier5-xegony-key-quest";
import {Tier5QuestTrackerService} from "../service/tier5-quest-tracker.service";
import {Tier5PoAAugmentQuest} from "../model/tier5-po-aaugment-quest";
import {Observable, catchError, of} from "rxjs";

@Component({
  selector: 'app-tier5-quest-tracker',
  templateUrl: './tier5-quest-tracker.component.html',
  styleUrls: ['./tier5-quest-tracker.component.css']
})
export class Tier5QuestTrackerComponent implements OnInit{

  xegony_key_quests$: Observable<Tier5XegonyKeyQuest[]> = new Observable();
  poa_augment_quests$: Observable<Tier5PoAAugmentQuest[]> = new Observable();
  xegonyError: string | null = null;
  poaError: string | null = null;

  constructor(private tier5QuestService: Tier5QuestTrackerService) {
  }

  ngOnInit(): void {
    this.xegony_key_quests$ = this.tier5QuestService.getAllXegonyKeyQuests().pipe(
      catchError(() => {
        this.xegonyError = 'Failed to load Xegony Key quests.';
        return of([]);
      })
    );
    this.poa_augment_quests$ = this.tier5QuestService.getAllPoAAugmentQuests().pipe(
      catchError(() => {
        this.poaError = 'Failed to load PoA Augment quests.';
        return of([]);
      })
    );
  }

}

