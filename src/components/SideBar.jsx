import React from 'react';
import {FaWpforms} from 'react-icons/fa';
import{GoCalendar} from 'react-icons/go';
import avatar from '../assets/doctor.jpg'
export default function SideBar() {
    return (
        <div
            style={{
                height: '100vh',
                marginTop: '20px',
                marginLeft:'15px',
                borderRight: 'solid 1px black'
            }}>
            <div
                className='profile'
                style={{
                    display: 'flex',
                    justifyContent:'left',
                    alignItems:'center',
                    borderBottom:'solid 0.5px lightgrey'
                }}>
                <img src={avatar} alt="profilepic" style={{width:"80px" , marginRight:'5px'}}/>
                <h4 style={{marginLeft:'5px'}}>username</h4>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'left',
                    marginTop:'10px'
                }}>
                <h4 style={{marginLeft:'0px', display:'flex', justifyContent:'left'}}>Gestion</h4>
                <div style={{
                    maxWidth:'100px',
                    display: 'flex',
                    justifyContent:'space-between'
                }}>
                    <FaWpforms/>
                    <h6>Patients</h6>
                </div>
                <div style={{
                    maxWidth:'130px',
                    display: 'flex',
                    justifyContent:'space-between'
                }}>
                    <GoCalendar/>
                    <h6>Rendez vous</h6>
                </div>
            </div>
        </div>
    )
}
