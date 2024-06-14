import { Paper, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function MainCard() {
  const theme = useTheme();

  return (
    <Grid2
      margin={10}
      sx={{
        color: theme.palette.primary.contrastText,
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
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
          My ToDo's
        </Typography>
      </Grid2>
      <Grid2 container spacing={4} sx={{ direction: "row", minHeight: "100%" }}>
        <Grid2 lg={5}>
          <Paper
            elevation={3}
            sx={{ minHeight: "60vh", borderRadius: "20px" }}
          ></Paper>
        </Grid2>
        <Grid2 lg={7}>
          <Paper
            elevation={3}
            sx={{ height: "60vh", borderRadius: "20px" }}
          ></Paper>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}
