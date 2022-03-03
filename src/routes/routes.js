import { Route, Routes } from "react-router-dom";
import Classroom from "../components/classrooms/classroom";
import Classrooms from "../components/classrooms/classrooms";
import Student from "../components/student/Student";
import Students from "../components/student/Students";
import Subject from "../components/subjects/subject";
import Subjects from "../components/subjects/subjects";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Students />} />
      <Route path="/students" element={<Students />} />
      <Route path="/students/:id" element={<Student />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/subjects/:id" element={<Subject />} />
      <Route path="/classrooms" element={<Classrooms />} />
      <Route path="/classrooms/:id" element={<Classroom />} />
    </Routes>
  );
};

export default Approutes;
