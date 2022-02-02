import actionTypes from "./actionTypes";
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
