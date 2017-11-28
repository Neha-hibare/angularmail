import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { MailRoutingModule } from './mail/mail-routing.module';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './mail/inbox/inbox.component';
import { HeaderComponent } from './component/header/header.component';
import { SidebarNavComponent } from './component/sidebar-nav/sidebar-nav.component';
import { ComposeComponent } from './mail/compose/compose.component';
import { SentComponent } from './mail/sent/sent.component';
import { StartedComponent } from './mail/started/started.component';
import { DraftComponent } from './mail/draft/draft.component';
import { ImportantComponent } from './mail/important/important.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InboxComponent,
    HeaderComponent,
    SidebarNavComponent,
    ComposeComponent,
    SentComponent,
    StartedComponent,
    DraftComponent,
    ImportantComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    AppRoutingModule,
    MailRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
