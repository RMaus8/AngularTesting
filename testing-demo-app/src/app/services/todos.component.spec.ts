import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { empty, from, observable, Observable, throwError } from 'rxjs';

describe('TodosComponent', () => {
	let component: TodosComponent;
	let service: TodoService;

	beforeEach(() => {
		service = new TodoService(null);
		component = new TodosComponent(service);
	});

	//testing the ngOnInit()
	it('should set todos property with items returned from the server', () => {
		let todos = [1, 2, 3];
		
		//spies are used to 'stub' a service or watch for a call to what it is spying on
		//in this case we watch the getTodos method in TodoService and replace it with the fake method
		//this will avoid making any real calls to backend
		spyOn(service, 'getTodos').and.callFake(()=> {
			return from([ todos ])
		});

		component.ngOnInit();

		expect(component.todos).toBe(todos);
	});

	//testing the add() function
	it('should call the server to save the changes when a new todo item is added', () => {
		let spy = spyOn(service, 'add').and.callFake(todo => {
			return empty();
		});

		component.add();

		expect(spy).toHaveBeenCalled();
	});

	it('should add the new todo returned from the server', () => {
		let todo = { id: 1 }
		//stub on or spy on service add method and return observable to service to simulate server call
		let spy = spyOn(service, 'add').and.returnValue(from([ todo ]));

		component.add();

		expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
	});

	it('should set the message property if server returns an error when adding a new todo', () => {
		let error = 'error from the server'
		//spy on add method and simulate error from server
		let spy = spyOn(service, 'add').and.returnValue(throwError(error));

		component.add();

		expect(component.message).toBe(error);
	});

	//test delete method of service
	it('should call the server to delete a todo item if the user confirms', () => {
		//don't want to pop up modal on test, so create spy to simulate modal being confirmed
		spyOn(window, 'confirm').and.returnValue(true);
		//spy on delete method and return empty observable because doesn't matter whats returned for this test
		let spy = spyOn(service, 'delete').and.returnValue(empty());

		component.delete(1);

		expect(spy).toHaveBeenCalledWith(1);
	})

	it('should NOT call the server to delete a todo item if the user cancels', () => {
		//don't want to pop up modal on test, so create spy to simulate modal being canceled
		spyOn(window, 'confirm').and.returnValue(false);
		//spy on delete method and return empty observable because doesn't matter whats returned for this test
		let spy = spyOn(service, 'delete').and.returnValue(empty());

		component.delete(1);

		expect(spy).not.toHaveBeenCalled();
	})
});