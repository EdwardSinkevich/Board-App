import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IUser } from '../../models/user';
import { CardsService } from '../../services/cards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  @Input() routeParams;

  public usersData: IUser[];
  public taskFrom: FormGroup;
  public minDate = new Date();

  private isEditing: boolean;

  constructor(
    private cardsService: CardsService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.setInitState();
    this.usersData = this.cardsService.getUsers();
    this.setFormCardData();
  }

  private setInitState() {
    if (this.routeParams) {
      this.isEditing = true;
    }
  }

  public submit() {
    if (this.taskFrom.valid && !this.isEditing) {
      this.cardsService.addCard(this.taskFrom.value);
    } else {
      this.cardsService.editCard(this.taskFrom.value, this.routeParams);
    }
    this.router.navigate(['board']);
  }

  public cancel() {
    this.router.navigate(['board']);
  }

  private setFormCardData() {
    if (this.isEditing) {
      const cardData = this.cardsService.getCardData(this.routeParams);

      this.taskFrom = this.fb.group({
        name: [cardData.name, Validators.required],
        description: [cardData.description, Validators.required],
        assignee: [this.usersData.find(user => user.id === cardData.assignee.id), Validators.required],
        dueDate: [cardData.dueDate, Validators.required],
      });
    } else {
      this.taskFrom = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        assignee: ['', Validators.required],
        dueDate: ['', Validators.required],
      });
    }
  }
}
