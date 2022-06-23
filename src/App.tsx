import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [entries, setEntries] = useState<any>([]);
  const addEntryToPhoneBook = (entry: any) => {
    setEntries(
      [...entries, entry].sort((a: any, b: any) =>
        a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
      )
    );
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <EntryForm/>
      <DisplayEntries/>
    </div>
  );
}
function EntryForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const handleSubmit: any = (w: any) => {
    w.preventDefault();
  };
  return (
    <form
     
      style={{ display: "flex", flexDirection: "column" }}
    >
      <button
        onClick={(w) => {
          w.preventDefault();
        }}
      >
        Save
      </button>
      <input
        type={"text"}
        name="firstName"
        id="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={(w) => setFirstName(w.target.value)}
      />
      <input
        type={"text"}
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={(w) => setLastName(w.target.value)}
      />
      <input
        type={"text"}
        name="phoneNumer"
        id="phoneNumer"
        placeholder="PhoneNumber"
        value={phoneNumber}
        onChange={(w) => setPhoneNumber(w.target.value)}
      />
    </form>
  );
}
function DisplayEntries() {
  return (
    <table>
      <thead>
        <tr>FirstName</tr>
        <tr>LastName</tr>
        <tr>PhoneNumber</tr>
      </thead>
    
      
    </table>
  );
}

export default App;
