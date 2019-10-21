import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatExpansionModule,
  MatSelectModule,
  MatOptionModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,
} from '@angular/material';

import { BoardPageComponent } from './pages/board-page/board-page.component';
import { BoardRoutingModule } from './board-routing.module';
import { CardsService } from './services/cards.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BoardComponent } from './components/board/board.component';
import { CardListComponent } from './components/board/card-list/card-list.component';
import { CardItemComponent } from './components/board/card-item/card-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { StruckThroughDirective } from './directives/struck-through.directive';
import { DueDateBackgroundDirective } from './directives/due-date-background.directive';
import { CreateTaskPageComponent } from './pages/create-task-page/create-task-page.component';
import { EditTaskPageComponent } from './pages/edit-task-page/edit-task-page.component';
import { CardFormComponent } from './components/card-form/card-form.component';


@NgModule({
  declarations: [
    BoardPageComponent,
    ToolbarComponent,
    BoardComponent,
    CardListComponent,
    CardItemComponent,
    FilterPipe,
    StruckThroughDirective,
    DueDateBackgroundDirective,
    CreateTaskPageComponent,
    EditTaskPageComponent,
    CardFormComponent,
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatExpansionModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  providers: [
    CardsService,
  ]
})
export class BoardModule { }
