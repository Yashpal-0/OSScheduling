import react from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function JOBPOOL(props: any){
    return(
        <div>
            <table className='inline-block border table table-striped-columns'>
                <thead>
                    <tr>
                        <th>ProcessID</th>
                        <th>Arrival Time</th>
                        <th>Burst Time</th>
                        <th>Priority</th>
                        <th>Time Quanta</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>{props.job[0].id}</td>
                        <td>{props.job[0].arrivalTime}</td>
                        <td>{props.job[0].burstTime}</td>
                        <td>{props.job[0].priority}</td>
                        <td>{props.job[0].timeQuanta}</td>

                        
                    
                    </tr>
                    <tr>
                        <td>{props.job[1].id}</td>
                        <td>{props.job[1].arrivalTime}</td>
                        <td>{props.job[1].burstTime}</td>
                        <td>{props.job[1].priority}</td>
                        <td>{props.job[1].timeQuanta}</td>

                        
                    
                    </tr>
                    <tr>
                        <td>{props.job[2].id}</td>
                        <td>{props.job[2].arrivalTime}</td>
                        <td>{props.job[2].burstTime}</td>
                        <td>{props.job[2].priority}</td>
                        <td>{props.job[2].timeQuanta}</td>

                        
                    
                    </tr><tr>
                        <td>{props.job[3].id}</td>
                        <td>{props.job[3].arrivalTime}</td>
                        <td>{props.job[3].burstTime}</td>
                        <td>{props.job[3].priority}</td>
                        <td>{props.job[3].timeQuanta}</td>

                        
                    
                    </tr><tr>
                        <td>{props.job[4].id}</td>
                        <td>{props.job[4].arrivalTime}</td>
                        <td>{props.job[4].burstTime}</td>
                        <td>{props.job[4].priority}</td>
                        <td>{props.job[4].timeQuanta}</td>

                        
                    
                    </tr>
                    </tbody>
            </table>
        </div>
    );
}
export default JOBPOOL;