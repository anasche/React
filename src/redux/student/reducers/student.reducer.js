import {
  SET_CLASSROOMS,
  SET_STUDENTS,
  SET_SUBJECTS,
  UPDATE_CLASSROOM,
  UPDATE_STUDENT,
} from "../types/student.types";

const initialState = {
  students: [],
  classrooms: [],
  subjects: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return { ...state, students: action.studentData.data.students };
    case SET_SUBJECTS:
      return { ...state, subjects: action.payload.data.subjects };
    case SET_CLASSROOMS:
      return { ...state, classrooms: action.payload.data.classrooms };
    case UPDATE_CLASSROOM:
      state.classrooms.forEach((classroom, idx) => {
        if (classroom.id === action.payload.data.id) {
          state.classrooms[idx] = action.payload.data;
        }
        return {
          ...state,
          classrooms: [...state.classrooms],
        };
      });
    case UPDATE_STUDENT:
      state.students.forEach((student, idx) => {
        if (student.id === action.payload.id) {
          state.students[idx] = action.payload;
        }
        return {
          ...state,
          students: [...state.students],
        };
      });
    default:
      return state;
  }
};

export default studentReducer;
