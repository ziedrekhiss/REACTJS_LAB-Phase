import React from 'react';
import Table from 'react-bootstrap/Table';
import AddConsultation from './AddConsultation'

export default function SeeMore({key, age, profession, address, observation}) {
    return (
        <div>
            <Table striped="striped" bordered="bordered" hover="hover">
                <tbody>
                    <tr>
                        <td style={{display:'flex', justifyContent:'space-between'}}>
                           <h6 className='col-1'>Age:</h6> <p className='col-3' style={{marginLeft:'10px'}}>{age}</p> 
                           <h6 className='col-3'>Profession:</h6> <p className='col-5'> {profession}</p>
                        </td>
                    </tr>  
                    <tr>
                        <td className='col-12'>
                           <h6 className='col-2' >Adresse :</h6> {address}</td>
                    </tr>
                    <tr>
                        <td className='col-10'> <h6 className='col-2'>Observations:</h6>{observation}</td>
                    </tr>
                </tbody>
            </Table>
            <AddConsultation key={key}/>
        </div>
    )
}
