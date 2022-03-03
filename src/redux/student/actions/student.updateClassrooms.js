import { UPDATE_CLASSROOM } from "../types/student.types";

const updateClassroom = (data) => {
  console.log(data);
  return {
    type: UPDATE_CLASSROOM,
    payload: data,
  };
};

export default updateClassroom;
