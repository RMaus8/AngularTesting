import { Observable, EMPTY, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';

//some people also refer to these stub classes as "test drivers"

// stub class to replace the actual router component from angular
class RouterStub {
	navigate(params) {

	}
}

// stub class to replace the ActivatedRoute component from angular
class ActivatedRouteStub {
	// subject() is a type of observable that allows us to cast values
	private subject = new Subject();

	//method to feed a value to observable
	push(value) {
		this.subject.next(value);
	}

	get params() {
		return this.subject.asObservable();
	}
}

describe('UserDetailsComponent', () => {
	let component: UserDetailsComponent;
	let fixture: ComponentFixture<UserDetailsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ UserDetailsComponent ],
			providers: [
				{ provide: Router, useClass: RouterStub },
				{ provide: ActivatedRoute, useClass: ActivatedRouteStub }
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	// test the redirect after save() method is called
	it('should redirect to the users page after saving', () => {
		// get the router (which is stubbed with our fake class) from TestBed
		let router = TestBed.get(Router);
		// stub on to the fake navigate method so we can ensure it was called in our test
		let spy = spyOn(router, 'navigate');

		// call the component method
		component.save();

		// the component method passes ['users'] into the navigate method so we check that it was called with it
		expect(spy).toHaveBeenCalledWith(['users']);
	});
	
	// test the ngOnInit()
	it('should navigate the user to the not found page when an invalid user id is passed', () => {
		// get the router (which is stubbed with our fake class) from TestBed
		let router = TestBed.get(Router);
		// stub on to the fake navigate method so we can ensure it was called in our test
		let spy = spyOn(router, 'navigate');

		// stub on to route and push an object into the observable
		let route: ActivatedRouteStub = TestBed.get(ActivatedRoute)
		route.push({ id: 0 });

		expect(spy).toHaveBeenCalledWith(['not-found']);
	});

	//test that we have the route configured for this component, create app.route.spec.ts file
});
