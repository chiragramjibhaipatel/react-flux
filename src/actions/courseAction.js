import { actionTypes } from "./actionTypes";
import dispacher from "../appDispacher";
import * as courseApi from "../api/courseApi";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispacher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      data: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    dispacher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      data: courses,
    });
  });
}

export function updateCourse(course) {
  return courseApi.saveCourse(course).then((course) => {
    dispacher.dispatch({
      actionType: actionTypes.UPDATE_COURSE,
      data: course,
    });
  });
}
