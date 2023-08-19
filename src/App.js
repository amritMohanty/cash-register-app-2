
import { useState } from 'react';
import './App.css';

function App() {

  const [bill,setBill] = useState(0)
  const [cash,setCash] = useState(0)
  const [message, setMessage] = useState(null)
  const [disable, setDisable] = useState(false)
  const availableDenominations = [2000,500,100,50,10,5,1]
  const [notes, setNotes] = useState(Array(7).fill(null))

  function clickHandler() {
  setMessage("")

  if(cash >= bill) {
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
        
        <label htmlFor='bill-amount'>Enter the bill amount</label>
        <input type='number' id='bill-amount' onChange={(event)=>{
          if(event.target.value>=0){
            setDisable(false)
            setMessage("")
            setBill(event.target.value)
  
          }
          else{
            setMessage("Invalid bill amount")
            setDisable(true)
          }
        }}/>

        <label htmlFor='cash-amount'>Enter the cash amount</label>
        <input type='number' id='cash-amount' onChange={(event)=>{
          if(event.target.value>=0){
            setDisable(false)
            setMessage("")
            setCash(event.target.value)
            
          }
          else{
            setDisable(true)
            setMessage("Invalid Cash amount")
          }
        }}/>

        <button id="check-btn" onClick={clickHandler} disabled={disable}>Check</button>

        <div id="message">{message}</div>
        <table>
          <tbody>
            <tr>
              <th>No. of notes</th>
              <td>{notes[0]}</td>
              <td>{notes[1]}</td>
              <td>{notes[2]}</td>
              <td>{notes[3]}</td>
              <td>{notes[4]}</td>
              <td>{notes[5]}</td>
              <td>{notes[6]}</td>
            </tr>
              <th>denominations</th>
              <td>{availableDenominations[0]}</td>
              <td>{availableDenominations[1]}</td>
              <td>{availableDenominations[2]}</td>
              <td>{availableDenominations[3]}</td>
              <td>{availableDenominations[4]}</td>
              <td>{availableDenominations[5]}</td>
              <td>{availableDenominations[6]}</td>
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
