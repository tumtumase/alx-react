import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes';

// Define the initial state - empty array
const initialState = [];

// Create the course reducer function
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Add isSelected property to each course and set it to false
      return action.data.map(course => ({
        ...course,
        isSelected: false
      }));
    
    case SELECT_COURSE:
      // Update the course with matching id to set isSelected to true
      return state.map(course => ({
        ...course,
        isSelected: course.id === action.index ? true : course.isSelected
      }));
    
    case UNSELECT_COURSE:
      // Update the course with matching id to set isSelected to false
      return state.map(course => ({
        ...course,
        isSelected: course.id === action.index ? false : course.isSelected
      }));
    
    default:
      return state;
  }
};

export default courseReducer;
