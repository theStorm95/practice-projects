import { Paper } from "@mui/material";
import React from "react";

function App() {
  return (
    <div style={{ backgroundColor: "#175e5d", padding: "10%" }}>
      <Paper
        elevation={3}
        square={false}
        sx={{
          width: "75vw",
          padding: "15px",
          minHeight: "75vh",
          borderRadius: "30px",
          // margin: "10%",
        }}
      ></Paper>
    </div>
  );
}

export default App;
