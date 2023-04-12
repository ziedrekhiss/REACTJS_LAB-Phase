import React from 'react'
import SideBar from './SideBar'
import PatientList from './Patient/PatientList'
import Navbar from './Navbar'
import Rdv from './Calendar/Rdv'

export default function Home() {

    return (
        <div className='row'>
            <div className='col-2'><SideBar/></div>
            <div className='col-9'>
                <div className='row'><Navbar/></div>
                <div className='row'><PatientList/></div>
            </div>
        </div>

    )
}
