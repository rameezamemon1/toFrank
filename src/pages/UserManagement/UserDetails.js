import React, { useState } from "react";
import Table from "./../../components/DetailTable/DetailTable";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Button,
  Typography,
  Dialog,
  Input,
  Tab,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  MenuItem,
  FormLabel,
  FormControl,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
} from "@mui/material";
import DesktopDateRangePicker from "@mui/lab/DesktopDateRangePicker";
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
  const [date, setdate] = React.useState([null, null]);

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
            <PersonIcon style={{ marginTop:-7 }} />
            <Typography>Jim Ou</Typography>
          </Box>

          <div
            style={{
              paddingTop: 20,
              paddingLeft: 40,
              paddingRight: 58,
              paddingBottom: 20,
            }}
          >
            {" "}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>User Information</Typography>
              </AccordionSummary>
              <AccordionSummary style={{ marginBottom: -20 }}>
                <Typography sx={{ width: "33%", flexShrink: 0, fontSize: 14 }}>
                  Name
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                  Jim
                </Typography>
              </AccordionSummary>
              <AccordionSummary style={{ marginBottom: -20 }}>
                <Typography sx={{ width: "33%", flexShrink: 0, fontSize: 14 }}>
                  Education
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                  University
                </Typography>
              </AccordionSummary>
              <AccordionSummary style={{ marginBottom: -20 }}>
                <Typography sx={{ width: "33%", flexShrink: 0, fontSize: 14 }}>
                  Email
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                  Jim@apxx.com.tw
                </Typography>
              </AccordionSummary>
              <AccordionSummary style={{ marginBottom: -20 }}>
                <Typography sx={{ width: "33%", flexShrink: 0, fontSize: 14 }}>
                  Occupation
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                  Engineer
                </Typography>
              </AccordionSummary>
              <AccordionSummary style={{ marginBottom: -20 }}>
                <Typography sx={{ width: "33%", flexShrink: 0, fontSize: 14 }}>
                  Birth
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                  1989/01/01
                </Typography>
              </AccordionSummary>
              <AccordionSummary style={{ marginBottom: -20 }}>
                <Typography sx={{ width: "33%", flexShrink: 0, fontSize: 14 }}>
                  Area of interest
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                  Java, DotNet
                </Typography>
              </AccordionSummary>
              <AccordionSummary>
                <Typography sx={{ width: "33%", flexShrink: 0, fontSize: 14 }}>
                  Note
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                  Have to call back
                </Typography>
              </AccordionSummary>
            </Accordion>
          </div>
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
            <Grid item xs={2} sm={3} md={3}>
              <TextField
                id="outlined-required"
                style={{ width:220 }}
                value={_name}
                onChange={(e) => setname(e.target.name)}
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                label="Test Name"
              />
            </Grid>
            <Grid item xs={2} sm={3} md={3}>
              <TextField
                style={{ width:220 }}
                id="outlined-required"
                select
                label="Field"
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
            <Grid item xs={2} sm={6} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDateRangePicker
                  startText="Test Date"
                  value={date}
                  onChange={(newValue) => {
                    setdate(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <React.Fragment>
                      <TextField
                        {...startProps}
                        size="small"
                        label="Test Date"
                        style={{width:195}}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <Box sx={{ mx: 2 }}> to </Box>
                      <TextField
                        {...endProps}
                        style={{width:200}}
                        size="small"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Box
            sx={{
              borderColor: "divider",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Grid style={{ marginRight: 25 }}>
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
          <Box
            style={{
              marginLeft: 50,
              marginRight: 55,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Table />
          </Box>
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
