import { SET_SUBJECTS } from "../types/student.types";

const setSubjects = (res) => {
  console.log("subjects",res);
  return {
    type: SET_SUBJECTS,
    payload: res,
  };
};

export default setSubjects;