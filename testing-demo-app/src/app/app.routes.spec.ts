import { UsersComponent } from './integration-tests/users/users.component';
import { routes } from './app.routes';

describe('routes', () => {
	// unit test for all routes configured - sort alphabetical; can test by commenting out app.routes.ts route
	// testing routes will make sure nothing breaks them in the future.
	it('should contain a route for /users', () => {
		expect(routes).toContain({ path: 'users', component: UsersComponent});
	});
})