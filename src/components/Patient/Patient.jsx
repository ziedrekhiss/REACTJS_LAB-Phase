import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import Table from 'react-bootstrap/Table';
import {CgDetailsMore} from 'react-icons/cg'
import {MdAddAPhoto, MdDelete, MdEdit} from 'react-icons/md'
import { deletePatient} from '../../redux/Actions'
import EditPatient from './EditPatient';
import SeeMore from './SeeMore';

export default function Patient({formNumber, firstName, lastName, tel, age, profession, address, observation, consultations}) {
    const [isShown, setIsShown] = useState(false);
    const handleShow=()=>setIsShown(!isShown)
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deletePatient(formNumber))
    }
    

    return (
        <div>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                    <td className='col-1'>{formNumber}</td>
                    <td className='col-2'>{firstName}</td>
                    <td className='col-2'>{lastName}</td>
                    <td className='col-2'>{tel}</td>
                    <td className='col-2'>false</td>
                    <td className='col-3'>
                        <div style={{display:'flex',justifyContent:'space-between', alignItems:'center', maxWidth:'200px'}}>
                            <button style={{background:'none', maxHeight:'15px'}}  onClick={() => {handleShow()}} ><CgDetailsMore size={25} color='green'/></button>
                            <div style={{background:'none', width:'25px', maxHeight:'15px', marginLeft:'0', marginRight:'15px'}}><EditPatient formNumber={formNumber}/></div>
                            <button style={{background:'none', maxHeight:'15px'}} ><MdAddAPhoto size={25} color='blue'/></button>
                            <button style={{background:'none', maxHeight:'15px'}} onClick={() => {handleDelete()}} ><MdDelete size={25} color='red'/></button>
                        </div> 
                    </td>
                    </tr>
                </tbody>
            </Table>
            {isShown?
                <SeeMore  age={age} profession={profession} address={address} observation={observation} />: null}
        </div>
    )
}
