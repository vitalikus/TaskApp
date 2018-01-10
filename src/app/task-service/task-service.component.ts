import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-task-service',
  templateUrl: './task-service.component.html',
  styleUrls: ['./task-service.component.css']
})
export class TaskServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getTasks() {
    return this.http.get ('https://ldd-scheduler-test.mybluemix.net/api/scheduler/tasks')
    .map(
      (response: Response) => {
        const data = response.json();
        for (const task of data) {
          task.name = 'FETCHED_' + task.name;
        }
        return data;
      }
    )
    .catch(
      (error: Response) => {
        return Observable.throw('Something went wrong');
      }
    );
  }
}
