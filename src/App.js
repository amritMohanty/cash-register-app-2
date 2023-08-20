
import { useState } from 'react';
import './App.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material'

function App() {

  const [bill,setBill] = useState(0)
  const [cash,setCash] = useState(0)
  const [message, setMessage] = useState(null)
  const [disable, setDisable] = useState(false)
  const availableDenominations = [2000,500,100,50,10,5,1]
  const [notes, setNotes] = useState(Array(7).fill(null))
  const [color, setColor] = useState("")


  function clickHandler() {
  setMessage("")

  if(cash >= bill) {
    console.log(cash>=bill)
    var amountToBeReturned = cash - bill;
    var arr = Array(7).fill(null)
    for(let i=0; i<arr.length;i++){
      const noOfNotes = Math.trunc(amountToBeReturned/availableDenominations[i]);
      arr[i] = noOfNotes
      amountToBeReturned %= availableDenominations[i]
    }
    setNotes(arr);
  }
  else{
    setMessage("you are "+(bill - cash)+" bucks short")
  }
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Welcome to the Cash Register Application</h1>
        
        {/* <label htmlFor='bill-amount'>Enter the bill amount</label> */}
        <TextField 
        type='number' 
        id='bill-amount'
        className='inputs'
        label="Enter the Bill Amount"
        color={color}
        margin="dense"
        onChange={(event)=>{
          if(event.target.value>=0){
            setDisable(false)
            setMessage("")
            setBill(Number(event.target.value))
            setColor("success")
          }
          else{
            setMessage("Invalid bill amount")
            setDisable(true)
            setColor("warning")
          }
        }}/>

        {/* <label htmlFor='cash-amount'>Enter the cash amount</label> */}
        <TextField
        label="Enter the Cash Amount"
        type='number' 
        id='cash-amount'
        className='inputs'
        margin="dense"
        color={color} 
        onChange={(event)=>{
          if(event.target.value>=0){
            setDisable(false)
            setMessage("")
            setCash(Number(event.target.value))
            setColor("success")
          }
          else{
            setDisable(true)
            setMessage("Invalid Cash amount")
            setColor("warning")
          }
        }}/>

        <Button
        margin="normal"
        // startIcon={<Dele/>}
        variant="contained"
        id="check-btn" 
        onClick={clickHandler} 
        disabled={disable}>Check</Button>

        <div id="message">{message}</div>
        <table>
          <tbody>
            <tr>
              <th className='table-box'>No. of notes</th>
              <td className='table-box'>{notes[0]}</td>
              <td className='table-box'>{notes[1]}</td>
              <td className='table-box'>{notes[2]}</td>
              <td className='table-box'>{notes[3]}</td>
              <td className='table-box'>{notes[4]}</td>
              <td className='table-box'>{notes[5]}</td>
              <td className='table-box'>{notes[6]}</td>
            </tr>
              <th className='table-box'>Denominations</th>
              <td className='table-box'>{availableDenominations[0]}</td>
              <td className='table-box'>{availableDenominations[1]}</td>
              <td className='table-box'>{availableDenominations[2]}</td>
              <td className='table-box'>{availableDenominations[3]}</td>
              <td className='table-box'>{availableDenominations[4]}</td>
              <td className='table-box'>{availableDenominations[5]}</td>
              <td className='table-box'>{availableDenominations[6]}</td>
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
