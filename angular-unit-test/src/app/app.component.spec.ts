import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('componentComponent', () => {

	//Declare your component and TestBed variables
	//never put any code other than declarations directly in 'describe' block, with 1 exception:
	//to parameterize 'it' functions - like if you were going to run multiple 'it' tests with just different variables passed in.
	let fixture: ComponentFixture<AppComponent>;
	let component: AppComponent;
	let templateHTML: HTMLElement;

	/*beforeEach() is a function that will run before every individual test. 
	Used for initializing modules and variables to avoid having to initialize in every test
	called a 'setup' function - beforeAll() is another setup function that runs once before all tests.
	-beforeEach() is safer unit tests because you get a fresh/unaltered component or data before each test
	-beforeAll() is usually used for making one-time data requests so it only requests one time instead of every test

	There are also 'teardown' functions - afterEach() and afterAll()
	-these are used to revert conditions after tests to ensure they don't interfere with other tests
	*/
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();

		//note: 'debugElement' is just a wrapper that allows the tests to work safely across all supported platforms
		//without it, for example, tests designed for browser platforms wouldn't be able to run in non-browser platforms
		fixture = TestBed.createComponent(AppComponent); //this just creates an instance of component in test environment
		component = fixture.debugElement.componentInstance; //this variable allows us to interact with component class and class methods
		templateHTML = fixture.debugElement.nativeElement; //this variable contains component's html for use to interact with
	}));

	
	//'it' is the individual test method that accepts a test description and callback as its parameters
	it('should create the component', () => {
		//expect takes a variable and then chains on a method that will test for a particular condition
		//this test is taking component class and verifying that it exists/was initialized.
		expect(component).toBeTruthy();
	});
	
	it(`should have as title 'angular-unit-test'`, () => {
		expect(component.title).toEqual('angular-unit-test');
	});
	
	it('should render title in a h1 tag', () => {
		fixture.detectChanges();
		//to test html elements you use 'querySelector' to navigate the html like vanilla-js
		expect(templateHTML.querySelector('h1').textContent).toContain('Welcome to angular-unit-test!');
	});
	
	//test for something in function body
	it('should have break statement', () => {
		expect(component.test.toString()).toContain('break;');
	})
});
