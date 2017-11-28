import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { SentComponent } from './sent/sent.component';
import { DraftComponent} from './draft/draft.component';
import { StartedComponent } from './started/started.component';
import { ImportantComponent } from './important/important.component';
const routes: Routes = [
	{ path:'mail/inbox', 
	component: InboxComponent, 
	data: { animation: 'mail/inbox' },
	children: [
      
      {
        path: 'sent',
        component: SentComponent
      },
      {
        path: 'drafts',
        component: DraftComponent
      },
      {
        path: 'started',
        component: StartedComponent
      },
      {
        path: 'important',
        component: ImportantComponent
      }
      
    ]
}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
