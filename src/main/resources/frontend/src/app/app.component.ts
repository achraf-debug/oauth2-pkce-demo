import {Component, OnDestroy} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./auth.config";
import {AppService} from "./app.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  title = 'frontend';
  text = '';
  helloSubscription: Subscription;

  constructor(private oauthService: OAuthService, private appService: AppService) {
    this.configure()
    this.helloSubscription = this.appService.hello().subscribe(response => {
      this.text = response;
    })
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  ngOnDestroy() {
    this.helloSubscription.unsubscribe();
  }
}
