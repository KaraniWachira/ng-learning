import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from "../model/course";

@Component({
  selector: 'course-card',
  standalone: true,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})

export class CourseCardComponent implements OnInit {

  @Input({ required: true })
  course: Course;

  // event emitter to emit an instance of course
  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() {}

    ngOnInit() {
  }

  onCourseViewed() {
    console.log("view course btn clicked");
    this.courseSelected.emit(this.course);

  }

}



