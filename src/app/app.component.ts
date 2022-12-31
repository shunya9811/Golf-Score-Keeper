import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Golf Score Keeper';
  course: string = "";

  addCourseName(input: string) {
    this.course = input;
  }

  displayTitle() {
    return this.course == "" ? this.title: this.title + " For " + this.course;
  }
}
