import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './todo.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
import { from } from 'rxjs';


describe('TodosComponent', () => {
	let component: TodosComponent;
	let fixture: ComponentFixture<TodosComponent>;

	beforeEach(async(() => {
		// must import dependencies and declare them here in the testbed configuration
		TestBed.configureTestingModule({
			imports: [ HttpClientModule ],
			declarations: [ TodosComponent ],
			providers: [ TodoService ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TodosComponent);
		component = fixture.componentInstance;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should load todos from the server', () => {
		// get the service from the testbed - this only works if service is registered via app.module
		const service = TestBed.get(TodoService);
		// if the service is registered to the component you get the service this way:
		// fixture.debugElement.injector.get(TodoService);

		// spy on service and change implementation to prevent service call
		spyOn(service, 'getTodos').and.returnValue(from([ [1, 2, 3] ]));

		// removed the detect changes from before each and moved it here to control when the ngOnInit is run
		// need the ngOnInit to run after we've spied on service and changed implementation
		fixture.detectChanges();
		expect(component.todos.length).toBe(3);
	});
});
