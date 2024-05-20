import { Container } from "@mui/material";
import TaskList from "./TaskCard/TaskList";
import TaskCardHeader from "./TaskCard/TaskCardHeader";

export default function TaskCard() {
  return (
    <Container fixed>
      <TaskCardHeader />
      <TaskList />
    </Container>
  );
}
