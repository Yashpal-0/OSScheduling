import React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import JOBPOOL from './FCFS';
import CPU from './cpu';
import READYPOOL from './readypool';



function App() {
  const [jobs, setJobs] = useState([{
    id: 1,
    arrivalTime: 0,
    burstTime: 2,
    priority: 1,
    timeQuanta: 2
},
{
    id: 2,
    arrivalTime: 0,
    burstTime: 2,
    priority: 1,
    timeQuanta: 2
},
{
    
    id: 3,  
    arrivalTime: 0,
    burstTime: 2,
    priority: 1,
    timeQuanta: 2
},
{
    id: 4,
    arrivalTime: 0,
    burstTime: 2,
    priority: 1,
    timeQuanta: 2
},{
  id: 4,
  arrivalTime: 0,
  burstTime: 2,
  priority: 1,
  timeQuanta: 2
},]);

const simulate = () => {
  
}

  return (
    <>
    <div className='container bg-secondary bg-gradient rounded'>
      <table className='inline bg-secondary bg-gradient rounded'>
        <tbody>
        <tr>
          <td>Mode</td>
          <td>
            <select>
              <option >Please Select the mode</option>
              <option value="1">Premptive</option>
              <option value="2">Non-Premptive</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            Algorithm
          </td>
          <td>
            <select>
              <option >Please Select the Algorithm</option>
              <option value="1">FCFS</option>
              <option value="2">SJF</option>
              <option value="3">Priority</option>
              <option value="4">Round Robin</option>
            </select>
          </td>
            </tr>
            <tr>
              <td><div className="container bg-primary bg-gradient rounded">
                CPU Utilisation time:0
              </div>
              </td>
            </tr>
            </tbody>
        </table> 
    </div>
    <JOBPOOL job={jobs} setJob={setJobs}/>
    <CPU/>
    <button className="btn btn-primary" onClick={simulate}>Start</button>
    </>
  );
}

export default App;
