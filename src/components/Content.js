import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import YoutubeEmbed from "./YoutubeEmbed";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#00bfff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width: "80%",
  marginTop: "12rem",
  marginLeft: "30px",
  height: "18rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>
          <h1 style={{ textAlign: "center", marginTop: "20%" }} onClick={() => window.open('https://www.resourcesforliving.com/login', '_blank')}>Get Help</h1>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <h1 style={{ textAlign: "center", marginTop: "20%" }} onClick={() => window.location.href = '/reportForm'}>
            Report an Issue
          </h1>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <h1 style={{ textAlign: "center", marginTop: "20%" }} onClick={() => window.location.href = '/learnMore'}>Lear More</h1>
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
