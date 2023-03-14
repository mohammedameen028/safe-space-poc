import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

const ReportForm = () => {
  const [userPref, setUserPref] = useState(false);

  const handleClick = ({target : {value}}) => {
    if (value === "anonymousUser") {
      setUserPref(!userPref);
    }
  };

  return (
    <>
      <DashboardHeader />
      <Paper
        style={{ marginLeft: "10%", width: "80%", height: "100%", backgroundColor: '#20124d', color: '#da4360' }}
        elevation={24}
        
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ paddingTop: "20px" }}>Report Form</h1>
          <div style={{ paddingBottom: "10px"}}>
            <input
              onClick={(e) => handleClick(e)}
              type="checkbox"
              id="anonymousUser"
              name="anonymousUser"
              value="anonymousUser"
            />
            <label> Report as an Anonymous User</label>
          </div>
          {!userPref && (
            <>
              <div style={{ padding: "20px" }}>
                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  sx={{ input: { color: '#b4a7d6'} }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={{ input: { color: '#b4a7d6'} }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  sx={{ input: { color: '#b4a7d6'} }}
                />
              </div>
            </>
          )}

          <div>
            <textarea
              id="w3review"
              name="w3review"
              rows="20"
              cols="70"
              placeholder="Type detail description here..."
              style={{ color: '#b4a7d6', backgroundColor: '#20124d'}}
            ></textarea>
          </div>
          <div style={{ padding: "20px", display: 'flex', justifyContent: 'center'}}>
            <Button style = {{width: '80px', color: '#20124d', backgroundColor: '#b4a7d6', fontWeight: 'bolder'}} variant="contained">Submit</Button>
            <Button style = {{width: '80px', marginLeft: '20px', color: '#20124d', backgroundColor: '#b4a7d6', fontWeight: 'bolder'}} variant="contained">Cancel</Button>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default ReportForm;
