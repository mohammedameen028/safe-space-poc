import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import YoutubeEmbed from "./YoutubeEmbed";
import QuizSharpIcon from '@mui/icons-material/QuizSharp';
import ReportSharpIcon from '@mui/icons-material/ReportSharp';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#00bfff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width: "80%",
  marginTop: "12rem",
  marginLeft: "30px",
  height: "12rem",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item style={{backgroundColor: '#20124d', color: '#da4360', fontWeight: 'bold', display: 'flex'}} elevation={24}>
          <QuizSharpIcon fontSize="large" style={{marginTop: '70px', marginLeft: '50px', marginRight: '50px'}}/>
          <h1 style={{ marginTop: '65px' }} onClick={() => window.open('https://www.resourcesforliving.com/login', '_blank')}>Get Help</h1>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item style={{backgroundColor: '#20124d', color: '#da4360', fontWeight: 'bold', display: 'flex'}} elevation={24}>
          <ReportSharpIcon fontSize="large" style={{marginTop: '70px', marginLeft: '50px', marginRight: '50px'}}/>
          <h1 style={{ marginTop: '65px' }} onClick={() => window.location.href = '/reportForm'}>
            Report an Issue
          </h1>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item style={{backgroundColor: '#20124d', color: '#da4360', fontWeight: 'bold', display: 'flex'}} elevation={24}>
          <LocalLibrarySharpIcon fontSize="large" style={{marginTop: '70px', marginLeft: '50px', marginRight: '50px'}}/>
          <h1 style={{ marginTop: '65px' }} onClick={() => window.location.href = '/learnMore'}>Learn More</h1>
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
