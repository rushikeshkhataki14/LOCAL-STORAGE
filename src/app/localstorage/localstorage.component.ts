import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})
export class LocalstorageComponent implements OnInit {

  invalid: any = false;

  tdate: any = '';
  ttime: any = '';
  ttask: any = '';
  tasks: any = new Array();
  index = -1;


  ngOnInit(): void {
    this.load();
  }

  submit() {
    if (this.tdate == '') {
      alert('Enter the Date');
      return;
    }
    if (this.ttime == '') {
      alert('Enter the Time');
      return;
    }
    if (this.ttask == '') {
      alert('Enter the Task');
      return;
    }
    if (this.ttask == '') {
      alert('Enter the Task');
      return;
    }

    let task = { date: this.tdate, Time: this.ttime, Task: this.ttask };

    if (this.index == -1) {
      this.tasks.push(task);
    } else {
      this.tasks[this.index] = task;
    }
    //  this.tasks = JSON.parse(localStorage.getItem("tasks") || '[]');

    localStorage.setItem('tasks', JSON.stringify(this.tasks));

    // console.log(this.tasks);
  }
  load() {
     this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
   this.tdate  == '';
    this.ttime == '';
   this.ttask == '';
  }

  deleteUser(i: number) {
    if (confirm('sure to delete')) {
      this.tasks.splice(i, 1);
    }

  }

  update(i: any) {
    this.index = i;
    this.tdate = this.tasks[i].date;
    this.ttime = this.tasks[i].Time;
    this.ttask = this.tasks[i].Task;
  }
}

