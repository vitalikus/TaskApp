import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
  h3 { color: blue;
  }
  `]
})
export class AppComponent {
  name = '';

  tasks = {
    "models": [
      {
        "Body": "string",
        "ConflictTasks": [
          "string"
        ],
        "Cron": "0 * * * * ?",
        "Headers": {},
        "MaxDuration": 15,
        "ScheduledUrl": "string",
        "TaskName": "string",
        "_id": "string",
        "_rev": "string"
      }
    ],
    "pageToken": "string"
  };
  
  /*[{'Body':"", 'ConflictTasks':"", 'Cron':"", 'Headers':"", 'MaxDuration':"", 
  'ScheduledUrl':"", 'TaskName':"", '_id':"", '_rev':""}
*/
  ]
}
