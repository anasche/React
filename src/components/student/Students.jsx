import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Students = () => {
  const students = useSelector((state) => state.students);
  console.log(students);
  return (
    <div style={{ marginLeft: 100, marginTop: 20 }}>
      {students.map((student) => {
        return (
          <Button
            key={student.id}
            variant="contained"
            style={{ width: 250, margin: 2, padding: 0, height: 50 }}
          >
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                width: "100%",
                height: "100%",
              }}
              to={`/students/${student.id}`}
              state={student}
            >
              <p>{student.name}</p>
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default Students;
