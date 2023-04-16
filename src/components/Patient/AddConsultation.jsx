import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch} from 'react-redux';
import { NewConsultation } from '../../redux/Actions';

export default function AddConsultation() {

    const [consultation, setConsultation] = useState({date:"", act:""})
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = ()=> setShow(true);
    const dispatch = useDispatch();
    
    const handleChange= (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setConsultation({...consultation, [name]:value })
    }
    const handleSubmit = event => {
      event.preventDefault();
      setShow(false);
      dispatch(
        NewConsultation({consultation})
      )
    }
  
    return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Ajouter Consultation
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nouvelle Consultation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div style={{display:'flex', justifyContent:'space-between' }}>
              <Form.Group className="mb-3">
                <Form.Label >Date</Form.Label>
                <Form.Control name='date' type="text" onChange={handleChange} value={consultation.date} />
              </Form.Group>            
            </div>
            <Form.Group>
              <Form.Label>Acte</Form.Label>
              <Form.Control as="textarea" rows={3} name='act' onChange={handleChange} value={consultation.act}/>
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
