import { HomeComponent } from './integration-tests/home/home.component';
import { TodosComponent } from './integration-tests/todos/todos.component';
import { UsersComponent } from './integration-tests/users/users.component'; 
import { UserDetailsComponent } from './integration-tests/user-details/user-details.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent },
];