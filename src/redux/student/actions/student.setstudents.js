import axios from "axios";
import { SET_STUDENTS } from "../types/student.types";

const setStudents = (res1) => {
  console.log("students",res1);
  return {
    type: SET_STUDENTS,
    studentData: res1,
  };
};

export default setStudents;
