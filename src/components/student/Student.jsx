import { Autocomplete, Grid, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateStudent } from "../../redux";

const Classroom = () => {
  const student = useLocation();
  const dispatch = useDispatch();
  const classrooms = useSelector((state) => state.classrooms).filter(
    (classroom) => typeof classroom.subject !== "undefined"
  );
  const [classroom, setClassroom] = useState();
  useEffect(() => {
    const c = classrooms.find(
      (classroom) => classroom.id === student.state.classroom
    );
    setClassroom(c);
  }, []);

  const applyClassroomHandler = () => {
    const s = { ...student.state, classroom: classroom.id }
    console.log(s);
    dispatch(updateStudent(s));
  };

  return (
    <div>
      <Grid
        container
        spacing={5}
        style={{ width: "70%", marginLeft: 200, marginTop: 30 }}
      >
        <Grid item xs={4}>
          <TextField
            disabled
            value={student.state.name}
            label="Name"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            value={student.state.id}
            label="Id"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            value={student.state.age}
            label="Age"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            value={student.state.email}
            label="Email"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            style={{ width: 222 }}
            size="small"
            options={classrooms}
            value={classroom || null}
            onChange={(event, newValue) => {
              setClassroom(newValue);
            }}
            getOptionLabel={(option) => option.name ?? option}
            renderInput={(params) => (
              <TextField {...params} label="classroom" />
            )}
          />
        </Grid>
      </Grid>
      <div>
        <Button onClick={applyClassroomHandler}> Apply classroom </Button>
      </div>
    </div>
  );
};

export default Classroom;
