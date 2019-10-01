import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/board/toolbar/toolbar.component';
import { BoardComponent } from './components/board/board.component';
import { CardListComponent } from './components/board/card-list/card-list.component';
import { CardItemComponent } from './components/board/card-list/card-item/card-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { StruckThroughDirective } from './directives/struck-through.directive';
import { DueDateBackgroundDirective } from './directives/due-date-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToolbarComponent,
    BoardComponent,
    CardListComponent,
    CardItemComponent,
    FooterComponent,
    FilterPipe,
    StruckThroughDirective,
    DueDateBackgroundDirective,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
