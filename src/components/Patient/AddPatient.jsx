import React ,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import { addPatient } from '../../redux/Actions';

export default function AddPatient() {
    const [patientData, setPatientData] = useState(
      {formNumber:"", firstName:"", lastName:"", age:"",tel:"", address:"", profession:"", observation:""}
    );
    const [id, setId]= useState(0)
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
      const newId = id + 1;
      setId(newId);
      setPatientData(prevState => {
          const newPatientData = {
              ...prevState
          };
          newPatientData.formNumber = newId.toString();
          return newPatientData;
      })
    };

    const dispatch = useDispatch();
    const handleChange= (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setPatientData({...patientData, [name]:value })
    }
    const handleSubmit = event => {
      event.preventDefault();
      setShow(false);
      dispatch(
        addPatient({patients:patientData})
      )
    }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ajouter Patient
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nouveau Patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div style={{display:'flex', justifyContent:'space-between' }}>
              <Form.Group className="mb-3">
                <Form.Label >N° de Fiche</Form.Label>
                <Form.Control name='formNumber' defaultValue={patientData.formNumber}/>
                <Form.Label >Nom</Form.Label>
                <Form.Control name='firstName' type="text" onChange={handleChange} value={patientData.firstName} />
                <Form.Label>Prenom</Form.Label>
                <Form.Control type="text" name='lastName' onChange={handleChange} value={patientData.lastName} />
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" name='age' onChange={handleChange} value={patientData.age}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tel</Form.Label>
                <Form.Control type="text" name='tel' onChange={handleChange} value={patientData.tel}/>
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="text" name='address' onChange={handleChange} value={patientData.address}/>
                <Form.Label>Profession</Form.Label>
                <Form.Control type="text" name='profession' onChange={handleChange} value={patientData.profession}/>
              </Form.Group>
            </div>
            <Form.Group>
              <Form.Label>observations</Form.Label>
              <Form.Control as="textarea" rows={3} name='observation' onChange={handleChange} value={patientData.observation}/>
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
    </>
    
  )
}
