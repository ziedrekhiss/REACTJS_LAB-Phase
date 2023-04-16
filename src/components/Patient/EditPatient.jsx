import React, { useState } from 'react' 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import {editPatient } from '../../redux/Actions';
import {MdEdit} from 'react-icons/md'


export default function EditPatient({formNumber}) {

    const dispatch = useDispatch();

    const [updatedPatient, setUpdatedPatient] = useState(
        {firstName:"", lastName:"", age:"",tel:"", address:"", profession:"", observation:""}
    ) 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange= (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUpdatedPatient({...updatedPatient, [name]:value })
      }


    const handleSubmit = event => {
        event.preventDefault();
        setShow(false);
        dispatch(editPatient({formNumber:formNumber, firstName:updatedPatient.firstName, lastName:updatedPatient.lastName, age:updatedPatient.age ,tel:updatedPatient.tel, address:updatedPatient.address, profession:updatedPatient.profession, observation:updatedPatient.observation }))
      }

  return (
    <div>
        <button style={{border:'none',background:'none', maxHeight:'15px', width:'25px'}} onClick={handleShow}><MdEdit size={25} color='darkBlue'/></button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div style={{display:'flex', justifyContent:'space-between' }}>
              <Form.Group className="mb-3">
                <Form.Label >Nom</Form.Label>
                <Form.Control name='firstName' type="text" onChange={handleChange} value={updatedPatient.firstName} />
                <Form.Label>Prenom</Form.Label>
                <Form.Control type="text" name='lastName' onChange={handleChange} value={updatedPatient.lastName} />
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" name='age' onChange={handleChange} value={updatedPatient.age}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tel</Form.Label>
                <Form.Control type="text" name='tel' onChange={handleChange} value={updatedPatient.tel}/>
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="text" name='address' onChange={handleChange} value={updatedPatient.address}/>
                <Form.Label>Profession</Form.Label>
                <Form.Control type="text" name='profession' onChange={handleChange} value={updatedPatient.profession}/>
              </Form.Group>
            </div>
            <Form.Group>
              <Form.Label>observations</Form.Label>
              <Form.Control as="textarea" rows={3} name='observation' onChange={handleChange} value={updatedPatient.observation}/>
            </Form.Group>
            <Button onClick={handleSubmit} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
