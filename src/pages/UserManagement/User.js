import React, { useState } from "react";
import Table from "./../../components/Table/Table";
import {
  Box,
  Button,
  Dialog,
  Input,
  Tab,
  Grid,
  TextField,
  MenuItem,
  FormLabel,
  FormControl,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ArticleIcon from "@mui/icons-material/Article";

const Users = () => {
  const [_name, setname] = useState();
  const [_email, setemail] = useState();
  const [_note, setnote] = useState();
  const [_mmbrship, setmmbrship] = useState();
  const [_finTest, setfinTest] = useState();
  const [_score, setScore] = useState();
  const [value, setValue] = React.useState("1");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  const [currency, setCurrency] = React.useState("EUR");

  const handleChangeDrop = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <Box style={{ marginTop: 100 }}>
        <Box style={{ backgroundColor: "white", borderRadius: 5, padding: 2 }}>
          <Box
            style={{
              backgroundColor: "#E22D6D",
              width: 100,
              height: 40,
              borderRadius: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              marginTop: -20,
              marginLeft: 10,
            }}
          >
            <ArticleIcon />
            <Typography>Users</Typography>
          </Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{
              paddingLeft: 40,
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="outlined-required"
                style={{ width: 275 }}
                value={_name}
                onChange={(e) => setname(e.target.name)}
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                label="Name"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="outlined-required"
                size="small"
                value={_email}
                onChange={(e) => setemail(e.target.value)}
                style={{ width: 275 }}
                InputLabelProps={{
                  shrink: true,
                }}
                label="Email"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                size="small"
                id="outlined-required"
                value={_note}
                onChange={(e) => setemail(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: 275 }}
                label="Note"
              />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                style={{ width: 275 }}
                id="outlined-required"
                select
                label="MemberShip"
                size="small"
                value={currency}
                onChange={handleChangeDrop}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                id="outlined-required"
                select
                style={{ width: 275 }}
                label="Finished task"
                size="small"
                value={currency}
                onChange={handleChangeDrop}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <TextField
                size="small"
                id="outlined-required"
                style={{ width: 275 }}
                value={_score}
                onChange={(e) => setScore(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                label="Score"
              />
            </Grid>
          </Grid>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                style={{ marginLeft: 30 }}
              >
                <Tab
                  label="Add Membership"
                  value="1"
                  style={{ fontSize: 12 }}
                />
                <Tab
                  label="Remove Membership"
                  value="2"
                  style={{ fontSize: 12 }}
                />
              </TabList>
              <Grid style={{ marginRight: 20 }}>
                <Button
                  style={{
                    marginRight: 10,
                    backgroundColor: "#00ACC1",
                    color: "white",
                    height: 30,
                    width: 100,
                  }}
                >
                  Search
                </Button>
                <Button
                  style={{
                    marginRight: 30,
                    backgroundColor: "#00ACC1",
                    color: "white",
                    height: 30,
                    width: 100,
                  }}
                >
                  Reset
                </Button>
              </Grid>
            </Box>
            <TabPanel value="1" style={{paddingRight:50,paddingLeft:40}}>
              <Table />
            </TabPanel>
            <TabPanel value="2">
              <Table />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
      {/* FILTER CODE MODAL*/}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Filter Results"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <FormControl component="fieldset">
              <FormLabel component="legend">Name</FormLabel>
              <Input defaultValue="Hello world" />
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Users;
