import { Autocomplete, Grid, TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setClassRooms, updateClassroom } from "../../redux";

const Classroom = () => {
  const classroom = useLocation();
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subjects);
  const [subject, setSubject] = useState();
  useEffect(() => {
    const s = subjects.find((sub) => sub.id === classroom.state.subject);
    setSubject(s);
  }, []);
  const applySubjectHandler = () => {
    axios
      .patch(
        `https://hamon-interviewapi.herokuapp.com/classrooms/${classroom.state.id}?api_key=10a7F`,
        `subject=${subject.id}`
      )
      .then((res) => {
        console.log("r", res);
        dispatch(updateClassroom(res));
      })
      .catch((e) => {
        console.log("error", e.response.data);
      });
  };
  const option = (option) => option.name ?? option;

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
            value={classroom.state.name}
            label="Name"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            value={classroom.state.id}
            label="Id"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            value={classroom.state.layout}
            label="Layout"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            value={classroom.state.size}
            label="size"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            style={{ width: 222 }}
            size="small"
            options={subjects}
            value={subject || null}
            getOptionLabel={option}
            onChange={(event, newValue) => {
              setSubject(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Subject" />}
          />
        </Grid>
      </Grid>
      <div>
        <Button onClick={applySubjectHandler}> Apply subject </Button>
      </div>
      <Box>
        <h2>Students</h2>
      </Box>
    </div>
  );
};

export default Classroom;
