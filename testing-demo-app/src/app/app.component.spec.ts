/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			//need to import RouterTestingModule to test the router-outlet
			imports: [ RouterTestingModule.withRoutes([]) ],
			declarations: [ AppComponent ],
			//tells angular to ignore any elements that it does recognize
			schemas: [ NO_ERRORS_SCHEMA ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges(); 
	});

	it('should have a router outlet', () => {
		let de = fixture.debugElement.query(By.directive(RouterOutlet));

		expect(de).not.toBe(null);
	});
});
