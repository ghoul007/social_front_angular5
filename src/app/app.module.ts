import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component'
import { MatInputModule, MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { NetworkService } from './network.service';
import { LoginComponent } from './login/login.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { UsersFriendsComponent } from './users-friends/users-friends.component'

const appRoute: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "feed", component: SocialFeedComponent },
  { path: "users", component: UsersFriendsComponent },
  { path: "", redirectTo: "/register", pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SocialFeedComponent,
    AddEntryComponent,
    SinglePostComponent,
    UsersFriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute, { enableTracing: true })
  ],
  providers: [AuthService, NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
