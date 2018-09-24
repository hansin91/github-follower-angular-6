import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { AppErrorHandler } from './common/app-error-handler';
import { HttpModule } from '@angular/http';

@NgModule({
	declarations: [ AppComponent, GithubFollowersComponent ],
	imports: [ BrowserModule, HttpModule ],
	providers: [ GithubFollowersService, { provide: ErrorHandler, useClass: AppErrorHandler } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
