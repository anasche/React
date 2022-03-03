import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <div
        style={{
          height: 55,
          background: "lightblue",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          style={{ width: 150, margin: 2, padding: 0, height: 50 }}
        >
          <Link to={"/students"}>Students</Link>
        </Button>
        <Button
          variant="contained"
          style={{ width: 150, margin: 2, padding: 0, height: 50 }}
        >
          <Link to={"/subjects"}>Subjects</Link>
        </Button>
        <Button
          variant="contained"
          style={{ width: 150, margin: 2, padding: 0, height: 50 }}
        >
          <Link to={"/classrooms"}>Class Rooms</Link>
        </Button>
      </div>
      <div style={{ padding: 10 }}>{props.children}</div>
    </div>
  );
};

export default Header;
