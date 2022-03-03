import { UPDATE_STUDENT } from "../types/student.types";

const updateStudent = (data) => {
  return {
    type: UPDATE_STUDENT,
    payload: data,
  };
};

export default updateStudent;