import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Classrooms = () => {
  const classrooms = useSelector((state) => state.classrooms);
  console.log(classrooms);
  return (
    <div style={{ marginLeft: 100, marginTop: 20 }}>
      {classrooms.map((classroom) => {
        return (
          <Button
            key={classroom.id}
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
              to={`/classrooms/${classroom.id}`}
              state={classroom}
            >
              <p>{classroom.name}</p>
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default Classrooms;
