import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
	let component: VoterComponent;
	let fixture: ComponentFixture<VoterComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ VoterComponent ]
		});

		fixture = TestBed.createComponent(VoterComponent);
		component = fixture.componentInstance;
	});

	it('should render total votes', () => {
		component.othersVote = 20;
		component.myVote = 1;
		// in test env, angular's change detection doesn't run automatically
		// so you must trigger the change detection so that the dom element is updated
		fixture.detectChanges();

		const de = fixture.debugElement.query(By.css('.vote-count'));
		const html: HTMLElement = de.nativeElement;

		expect(html.innerText).toContain('21');
	});

	it('should highlight the upvote button if I have upvoted', () => {
		component.myVote = 1;
		fixture.detectChanges();

		const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

		expect(de.classes.highlighted).toBeTruthy();
	});

	it('should increase total votes when I click the upvote button', () => {
		const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
		button.triggerEventHandler('click', null);

		expect(component.totalVotes).toBe(1);
	});
});
