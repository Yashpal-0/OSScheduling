import react from 'react';
import {useState} from 'react';

function CPU(){
    //use state variables   
    const [currProc, setCurrProc] = useState(1);

    return(
        <div>
            <table className='bg-secondary rounded bg-gradient inline' style={{width: "10px"}}>
                <thead>
                    <tr>
                        <th>CPU</th>
                        </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Running: </th>
                        <td>{currProc}</td>
                
                    </tr>
                </tbody>
                        

            </table>
        </div>
    )
}

export default CPU;