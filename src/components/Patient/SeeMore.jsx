import React from 'react'
import Table from 'react-bootstrap/Table';

export default function SeeMore({age, profession, address, observation}) {
    return (
        <div>
            <Table striped="striped" bordered="bordered" hover="hover">
                <tbody>
                    <tr>
                        <td style={{display:'flex', justifyContent:'space-between'}}>
                           <th className='col-1'>Age:</th> <p className='col-3' style={{marginLeft:'10px'}}>{age}</p> 
                           <th className='col-3'>Profession:</th> <p className='col-5'> {profession}</p>
                        </td>
                    </tr>  
                    <tr>
                        <td className='col-12'>
                           <th className='col-2' >Adresse :</th> {address}</td>
                    </tr>
                    <tr>
                        <td className='col-10'> <th className='col-2'>Observations:</th>{observation}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
