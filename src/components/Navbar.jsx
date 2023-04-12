import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import{GrLogout} from 'react-icons/gr'

export default function Navbar() {
  return (
    <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
       <button><AiOutlineMenu/></button>
       <button><GrLogout/></button>
    </div>
  )
}
