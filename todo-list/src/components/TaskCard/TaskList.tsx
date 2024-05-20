import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import tasks from "../../data.json";

const reactTasks = tasks.data.map((task) => {
  return (
    <FormControlLabel
      label={task.taskLabel}
      control={<Checkbox />}
      sx={{ paddingLeft: "0px" }}
    ></FormControlLabel>
  );
});

export default function TaskList() {
  return (
    <Container>
      <FormGroup>{reactTasks}</FormGroup>
    </Container>
  );
}
