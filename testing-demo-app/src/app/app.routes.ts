import { HomeComponent } from './Integration Tests/home/home.component';
import { TodosComponent } from './Integration Tests/todos/todos.component';
import { UsersComponent } from './Integration Tests/users/users.component'; 
import { UserDetailsComponent } from './Integration Tests/user-details/user-details.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent },
];