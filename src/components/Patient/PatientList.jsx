import React from 'react'
import {useSelector} from 'react-redux'
import Patient from './Patient'
import AddPatient from './AddPatient'
import SearchBar from './SearchBar'
import {SlPeople} from 'react-icons/sl'
import Table from 'react-bootstrap/Table';

export default function PatientList() {

    const patientList = useSelector((state) => state)
    let patients = patientList.patients;
    console.log('patients',patients)
    
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '10px'
                }}>
                <h2>
                    <SlPeople size={25}/>
                    Patients</h2>
                <div>
                    <SearchBar/>
                </div>
                <AddPatient/>
            </div>
            <Table striped="striped" bordered="bordered" hover="hover">
                <thead>
                    <tr>
                        <th className='col-1'>#</th>
                        <th className='col-2'>Nom</th>
                        <th className='col-2'>Prénom</th>
                        <th className='col-2'>Téléphone</th>
                        <th className='col-2'>paiement</th>
                        <th className='col-3'>Actions</th>
                    </tr>
                </thead>
            </Table>

            {
                patients.length
                    ? patients.map((patient, id) => (
                        <Patient
                            key={id}
                            formNumber={patient.formNumber}
                            firstName={patient.firstName}
                            lastName={patient.lastName}
                            tel={patient.tel}
                            age={patient.age}
                            profession={patient.profession} 
                            address={patient.address} 
                            observation={patient.observation}
                            />    
                    ))
                    : null
            }

        </div>
    )
}
