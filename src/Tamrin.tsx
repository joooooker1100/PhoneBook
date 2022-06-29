import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import "./App.css";

function Tamrin() {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [state, setState] = useState<any[]>([]);

  return (
    <>
      <div className="div1">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 490,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search contacts"
            id="Search"
            inputProps={{ "aria-label": "search contacts" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Box
          sx={{
            display: "flex",
            width: 500,
            maxWidth: "100%",
            paddingTop: "15px",
            paddingBottom: "15px",
            flexDirection: "row",
          }}
        >
          <TextField
            fullWidth
            label="FirstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            fullWidth
            label="LastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            fullWidth
            label="PhoneNumber"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Box>

        <Stack direction="row" spacing={2} width="100%">
          <Button
            variant="contained"
            onClick={() => {
              if (
                (firstName?.length ?? 0) > 0 &&
                (lastName?.length ?? 0) > 0 &&
                (phoneNumber?.length ?? 0) > 0
              ) {
                const user = {
                  name: firstName,
                  last: lastName,
                  phone: phoneNumber,
                };

                setState([...state, user]);
                setFirstName("");
                setLastName("");
                setPhoneNumber("");
              }
            }}
          >
            Save
          </Button>
          <Button
            className="buttom"
            variant="outlined"
            onClick={() => {
              setFirstName("");
              setLastName("");
              setPhoneNumber("");
            }}
          >
            Delete
          </Button>
        </Stack>

        <table>
          <tr>
            <th></th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>PhoneNumber</th>
          </tr>
          {state.map((a, index) => {
            return (
              <tr>
                <td>
                  <button
                    onClick={() => {
                      state.splice(index, 1);
                      setState([...state]);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>{a.name}</td>
                <td>{a.last}</td>
                <td>{a.phone}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Tamrin;
