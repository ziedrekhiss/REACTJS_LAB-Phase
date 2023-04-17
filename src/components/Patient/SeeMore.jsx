import React from 'react';
import Table from 'react-bootstrap/Table';
import AddConsultation from './AddConsultation'

export default function SeeMore({formNumber, age, profession, address, observation, consultation}) {

    
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
            <AddConsultation formNumber={formNumber}/>

            <ul>
            {consultation.map((consultation, index) => (
                <Table key={index} striped="striped" bordered="bordered" hover="hover">
                    <tbody>
                        <tr>
                            <td style={{display:'flex', justifyContent:'space-between'}}>
                                <h6 className='col-1'>Date:</h6> <p className='col-3' style={{marginLeft:'10px'}}>{consultation.date}</p> 
                            </td>
                        </tr>
                        <tr>
                            <td style={{display:'flex', justifyContent:'space-between'}}>
                                <h6 className='col-3'>Acte:</h6>
                                <p className='col-5'>
                                    {consultation.act}</p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            ))}
            </ul>

        </div>
    )
}
