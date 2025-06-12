import { bindActionCreators } from 'redux';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};

export const boundSelectCourse = (dispatch) =>
  bindActionCreators(selectCourse, dispatch);

export const boundUnSelectCourse = (dispatch) =>
  bindActionCreators(unSelectCourse, dispatch);
