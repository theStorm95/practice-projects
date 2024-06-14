import { Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import MainCard from "./TaskCard";

export default function MainPage() {
  return (
    <Grid2
      sx={{
        background: "linear-gradient(135deg, #7780c9 30%, #2d3469 70%)",
        minHeight: "100vh",
      }}
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={0}
    >
      <Paper
        elevation={3}
        square={false}
        sx={{
          width: "60vw",
          padding: "15px",
          minHeight: "70vh",
          borderRadius: "30px",
          backgroundColor: "black",
        }}
      >
        <MainCard></MainCard>
      </Paper>
    </Grid2>
  );
}
