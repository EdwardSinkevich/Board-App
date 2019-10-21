import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.scss']
})
export class EditTaskPageComponent implements OnInit {

  public minDate = new Date();
  public routeParams;

  constructor( private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    this.routeParams = {
      listId: this.activatedRoute.snapshot.params.listId,
      cardId: this.activatedRoute.snapshot.params.cardId
    };
  }
}
