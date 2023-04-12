import React, {useState} from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css"




export default function Rdv() {

  const [date,setDate]= useState (new Date())
  const handleDateChange=(date)=>{setDate(date)}

  return (
    <div>
        <Calendar value= {date} onChange={handleDateChange}/>
    </div>
  )
}
