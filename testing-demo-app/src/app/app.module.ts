import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './integration-tests/home/home.component';
import { TodosComponent } from './integration-tests/todos/todos.component';
import { UserDetailsComponent } from './integration-tests/user-details/user-details.component';
import { VoterComponent } from './integration-tests/voter/voter.component';
import { UsersComponent } from './integration-tests/users/users.component';
import { HighlightDirective } from './highlight.directive';
import { NavComponent } from './integration-tests/nav/nav.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		TodosComponent,
		UserDetailsComponent,
		VoterComponent,
		UsersComponent,
		NavComponent,
		HighlightDirective
	],
	imports: [
		RouterModule.forRoot(routes),
		BrowserModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
