import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Subject = () => {
  const subject = useLocation();
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h3">Name: {subject.state.name}</Typography>
        <Typography variant="h3">Id: {subject.state.id}</Typography>
        <Typography variant="h3">Teacher: {subject.state.teacher}</Typography>
        <Typography variant="h3">Credits: {subject.state.credits}</Typography>
      </Grid>
    </Grid>
  );
};

export default Subject;
