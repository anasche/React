import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Subjects = () => {
  const subjects = useSelector((state) => state.subjects);
  console.log(subjects);
  return (
    <div style={{ marginLeft: 100, marginTop: 20 }}>
      {subjects.map((subject) => {
        return (
          <Button
            key={subject.id}
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
              to={`/subjects/${subject.id}`}
              state={subject}
            >
              <p>{subject.name}</p>
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default Subjects;
