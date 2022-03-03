import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import { setClassRooms, setStudents, setSubjects } from "./redux";
import Approutes from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  let endpoints = [
    "https://hamon-interviewapi.herokuapp.com/students/?api_key=10a7F",
    "https://hamon-interviewapi.herokuapp.com/subjects/?api_key=10a7F",
    "https://hamon-interviewapi.herokuapp.com/classrooms/?api_key=10a7F",
  ];
  const load = () =>
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(
        axios.spread((res1, res2, res3) => {
          dispatch(setStudents(res1));
          dispatch(setSubjects(res2));
          dispatch(setClassRooms(res3));
        })
      )
      .catch((err) => {
        console.log(err);
      });
  useEffect(() => {
    load();
  }, []);
  return (
    <div className="container">
      <Header>
        <Approutes />
      </Header>
    </div>
  );
}

export default App;
