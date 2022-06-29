import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./App.css";


function Tamrin() {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const[phoneNumber,setPhoneNumber]=useState<string>();
  const[state,setState]=useState<any[]>([""]);
  
  



  return (
    <><div className="div1">
      
      <Box
        sx={{
          display: "flex",
          width: 500,
          maxWidth: '100%',
          paddingTop: "15px",
          paddingBottom: "15px",
          flexDirection: "row"
        }}
      >
        <TextField fullWidth label="FirstName" value={firstName} onChange={(e) => {
          setFirstName(e.target.value);
        } } /><br /><br />
        <TextField fullWidth label="LastName" value={lastName} onChange={(e) => {
          setLastName(e.target.value);
        } } /><br /><br />
        <TextField fullWidth label="PhoneNumber" value={phoneNumber} onChange={(e) => {
          setPhoneNumber(e.target.value);
        } } />
      </Box>
      

      <Stack direction="row" spacing={2} width="100%">
        <Button variant="contained" onClick={() => {
          const user={name:firstName,last:lastName,phone:phoneNumber}
          
          setState([...state,user])
         
          
        } }>
          Save
        </Button>
        <Button className="buttom" variant="outlined">
          Delete
        </Button>
      </Stack>



  <table>
  <tr>
    <th>FirstName</th>
    <th>LastName</th>
    <th>PhoneNumber</th>
  </tr>
{state.map((a)=>{
  
  return(
    <tr>
  <td>{a.name}</td>
  <td>{a.last}</td>
  <td>{a.phone}</td>
</tr>)



})}
  

  </table>


    </div>
    </>
  );
 
  
    
}

export default Tamrin;
