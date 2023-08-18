
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1>Welcome to the Cash Register application</h1>
        <label for="bill-amount">Enter the bill amount below</label>
        <input id='bill-amount' placeholder='enter bill amount'></input>

        <label for="cash-amount">Enter the cash amount below</label>
        <input id='cash-amount' placeholder='enter cash amount'></input>

        <button id="check-btn">Check</button>

        <table>
          <tr>
            <th>No. of notes</th>
          </tr>
        </table>

      </div>
    </div>
  );
}

export default App;
