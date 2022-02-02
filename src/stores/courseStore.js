import { EventEmitter } from "events";
import { Dispatcher } from "../appDispacher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _course = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourse(){
      return _course;
  }

  getCourseBySlug(slug){
      return _course.find(course => course.slug === slug);
  }
}
const store = CourseStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CHANGE_EVENT:
      _course.push(action.data);
      store.emitChange();
      break;
    default:
    //nothig to do
}
});

export default store;
