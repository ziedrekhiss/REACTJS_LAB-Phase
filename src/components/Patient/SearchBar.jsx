import React, {useState} from 'react';
import {BiSearchAlt} from 'react-icons/bi'
import { searchPatient } from '../../redux/Actions';
import { useDispatch } from 'react-redux';

export default function SearchBar() {

    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm]= useState('');
    
    const handleSearch = (e)=>{
        setSearchTerm(e.target.value)
        dispatch(searchPatient(searchTerm));
     }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                width: '150px',
                borderRadius: '30px'
            }}>
            <input
                style={{
                    border: 'none',
                    borderBottom: ' 2px solid black'
                }}
                type="search"
                placeholder='Chercher'
                value={searchTerm}
                onChange={handleSearch}/>
            <button onClick={handleSearch}><BiSearchAlt/></button>
        </div>
    )
}
