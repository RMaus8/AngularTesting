import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { NavComponent } from './nav.component';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NavComponent', () => {
	let component: NavComponent;
	let fixture: ComponentFixture<NavComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ RouterTestingModule.withRoutes([])],
			declarations: [ NavComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have a link to todos page', () => {
		let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

		let index = debugElements.findIndex(de => de.attributes['routerLink'] === 'todos');
		expect(index).toBeGreaterThan(-1);
	});
});
