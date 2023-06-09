import {ADD_PATIENT, DELETE_PATIENT, EDIT_PATIENT, SEARCH_PATIENT, NEW_CONSULTATION} from "./ActionType"
  

  export const addPatient = (payload)=>{
    return{
        type:ADD_PATIENT,
        payload,
    };
  };

  export const deletePatient = (payload)=>{
    return{
        type:DELETE_PATIENT,
        payload,
    };  
  };

  export const editPatient = (payload)=>{
    return{
      type:EDIT_PATIENT,
      payload,
    };
  };

  export const searchPatient = (payload)=>{
    return{
      type:SEARCH_PATIENT,
      payload,
    };
  };

  export const NewConsultation = ( payload)=>{
    return{
        type:NEW_CONSULTATION,
        payload,
    };
  };