import Grid2 from "@mui/material/Unstable_Grid2";
import CurrentTaskList from "./CurrentTaskList";

export default function MainCard() {
  return (
    <Grid2 container spacing={1}>
      <Grid2 lg={3}>Hello</Grid2>
      <Grid2 lg={6}>
        <CurrentTaskList />
      </Grid2>
      <Grid2 lg={3}>Hello 3</Grid2>
    </Grid2>
  );
}
