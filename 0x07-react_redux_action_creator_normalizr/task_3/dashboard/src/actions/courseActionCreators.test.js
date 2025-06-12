// task_3/dashboard/src/actions/courseActionCreators.test.js

import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreators', () => {
  it('selectCourse returns correct action', () => {
    const expected = { type: SELECT_COURSE, index: 1 };
    expect(selectCourse(1)).toEqual(expected);
  });

  it('unSelectCourse returns correct action', () => {
    const expected = { type: UNSELECT_COURSE, index: 1 };
    expect(unSelectCourse(1)).toEqual(expected);
  });
});
