import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DashboardHeader from "./DashboardHeader";
import YoutubeEmbed from "./YoutubeEmbed";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>
          {" "}
          <YoutubeEmbed embedId="4viXOGvvu0Y" />{" "}
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          {" "}
          <YoutubeEmbed embedId="HKk-pbeW3ic" />{" "}
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          {" "}
          <YoutubeEmbed embedId="3AF9Rjki0DE" />{" "}
        </Item>
      </Grid>
    </React.Fragment>
  );
}

export default function LearnMore() {
  return (
    <div>
      <DashboardHeader />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
