import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { IUser } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  public minDate = new Date();
  public usersData: IUser[];
  public taskFrom: FormGroup;

  constructor(
    private cardsService: CardsService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.usersData = this.cardsService.getUsers();

    this.taskFrom = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      assignee: ['', Validators.required],
      dueDate: ['', Validators.required],
    });
  }

  public submit() {
    if (this.taskFrom.valid) {
      this.cardsService.addCard(this.taskFrom.value);
      this.router.navigate(['board']);
    }
  }

  public cancel() {
    this.router.navigate(['board']);
  }
}
