import React from 'react'
import {useSelector} from 'react-redux'
import Patient from './Patient'
import AddPatient from './AddPatient'
import SearchBar from './SearchBar'
import {SlPeople} from 'react-icons/sl'
import Table from 'react-bootstrap/Table';
import SeeMore from './SeeMore'

export default function PatientList() {

    const patientList = useSelector((state) => state)
    console.log(patientList)
    var patients = patientList.patients;
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
                patients
                    ? patients.map((patient, id) => (
                        <Patient
                            key={id}
                            formNumber={patient.patients.formNumber}
                            firstName={patient.patients.firstName}
                            lastName={patient.patients.lastName}
                            tel={patient.patients.tel}
                            age={patient.patients.age}
                            profession={patient.patients.profession} 
                            address={patient.patients.address} 
                            observation={patient.patients.observation}
                            />    
                    ))
                    : null
            }

        </div>
    )
}
