import { SET_CLASSROOMS } from "../types/student.types";

const setClassRooms = (res) => {
  console.log("classrooms",res);
  return {
    type: SET_CLASSROOMS,
    payload: res,
  };
};

export default setClassRooms;