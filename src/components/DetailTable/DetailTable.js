import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Button,
  Dialog,
  Checkbox,
  Grid,
  TextField,
  MenuItem,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

function createData(field, testname, correct, rate, time, date, ip) {
  return { field, testname, correct, rate, time, date, ip };
}

const rows = [
  createData(
    "Java",
    "Java primary 1",
    "7/10",
    "70%",
    "00:50:22",
    "2021/11/02",
    "214.39.11.123"
  ),
  createData(
    "Java",
    "Java primary 2",
    "10/10",
    "100%",
    "01:50:22",
    "2021/19/02",
    "214.39.11.123"
  ),
  createData(
    "Java",
    "Java primary 3",
    "10/10",
    "100%",
    "02:50:22",
    "2021/16/02",
    "214.39.11.123"
  ),
];

export default function BasicTable() {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [_name, setname] = useState("Jim");
  const [_email, setemail] = useState("jim@apxx.com.tw");
  const [_note, setnote] = useState();
  const [_mmbrship, setmmbrship] = useState();
  const [_finTest, setfinTest] = useState();
  const [_score, setScore] = useState();
  const [_education, seteducation] = useState();
  const [_interest, setinterest] = useState();
  const [_bday, setbday] = useState();
  const [value, setValue] = React.useState("1");
  const [open, setOpen] = React.useState(false);
  const [date, setdate] = React.useState(new Date("2014-08-18T21:11:54"));

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

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
 
  const handleChangeDrop = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Field</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Test Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Correct
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Correct Rate
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Time
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Date
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                IP
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.field}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  {row.field}
                </TableCell>
                <TableCell align="center">{row.testname}</TableCell>
                <TableCell align="center">{row.correct}</TableCell>
                <TableCell align="center">{row.rate}</TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.ip}</TableCell>
                <TableCell align="center">
                  {
                    <IconButton
                      variant="contained"
                      style={{
                        backgroundColor: "#00ACC1",
                        color: "white",
                        width: 28,
                        height: 28,
                        padding: 2,
                        margin: 2,
                      }}
                    >
                      <PersonIcon fontSize="small" />
                    </IconButton>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* EDIT CODE MODAL */}
      <Dialog
        open={openEdit}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"md"}
      >
        <DialogTitle id="alert-dialog-title">{"Jim Ou"}</DialogTitle>
        <DialogContent>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            <Grid item xs={2} sm={6} md={6}>
              <TextField
                id="outlined-required"
                style={{ width: 400 }}
                value={_name}
                onChange={(e) => setname(e.target.name)}
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                label="Nick Name"
              />
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <TextField
                id="outlined-required"
                size="small"
                value={_email}
                style={{ width: 400 }}
                InputLabelProps={{
                  readOnly: true,
                }}
                label="Email"
              />
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Birthday"
                  value={date}
                  onChange={(value) => setdate(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      style={{ width: 400 }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>{" "}
            <Grid item xs={2} sm={6} md={6}>
              <TextField
                style={{ width: 400 }}
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
            <Grid item xs={2} sm={6} md={6}>
              <TextField
                style={{ width: 400 }}
                id="outlined-required"
                select
                label="Education"
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
              <TextField
                style={{ width: 400 }}
                id="outlined-required"
                select
                label="Area of interest"
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
              <TextField
                id="outlined-required"
                select
                style={{ width: 400 }}
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
            <Grid item xs={2} sm={6} md={6}>
              <TextField
                size="small"
                id="outlined-required"
                style={{ width: 400 }}
                value={_score}
                onChange={(e) => setScore(e.target.value)}
                multiline
                rows={4}
                InputLabelProps={{
                  shrink: true,
                }}
                label="Note"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid style={{ margin: "auto" }}>
            <Button
              onClick={handleCloseEdit}
              style={{
                marginRight: 10,
                backgroundColor: "#00ACC1",
                color: "white",
                height: 30,
                width: 100,
              }}
            >
              Save
            </Button>
            <Button
              onClick={handleCloseEdit}
              style={{
                marginRight: 30,
                border: "1px solid #00ACC1",
                color: "#00ACC1",
                height: 30,
                width: 100,
              }}
            >
              Cancel
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
}
