import { Paper, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function MainCard() {
  const theme = useTheme();

  return (
    <Grid2
      margin={5}
      sx={{
        color: theme.palette.primary.contrastText,
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
      }}
    >
      <Grid2>
        <Typography
          gutterBottom={true}
          variant="h3"
          sx={{
            color: theme.palette.primary.contrastText,
          }}
        >
          ToDo App
        </Typography>
      </Grid2>
      <Grid2 container spacing={4}>
        <Grid2 lg={4}>
          <Paper
            elevation={3}
            sx={{
              minHeight: "60vh",
              borderRadius: "20px",
              backgroundColor: "#1E1E1E",
            }}
          ></Paper>
        </Grid2>
        <Grid2 lg={8}>
          <Paper
            elevation={3}
            sx={{
              minHeight: "60vh",
              borderRadius: "20px",
              backgroundColor: "#1E1E1E",
            }}
          ></Paper>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
