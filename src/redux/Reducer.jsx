import {ADD_PATIENT, DELETE_PATIENT, EDIT_PATIENT, SEARCH_PATIENT} from "./ActionType";

const initialState = {
  patients: []
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PATIENT:
      return { ...state, patients: [...state.patients, action.payload] };
    
    case DELETE_PATIENT :
      const patientId = action.payload;
      const updatedPatients = state.patients.filter(patient => patient.patients.formNumber !== patientId);
      return { ...state, patients: updatedPatients };

    case EDIT_PATIENT:
      const editedPatients= state.patients.map(el=>el.patients.formNumber===action.payload.formNumber? { ...el, patients: action.payload } : el);
      return {...state, patients:editedPatients};
    
    case SEARCH_PATIENT:
      const searchTerm = action.payload.toLowerCase();
      const findPerson= state.patients.filter(patient=>{
        return patient.patients.firstName.toLowerCase().includes(searchTerm) || patient.patients.lastName.toLowerCase().includes(searchTerm) || patient.patients.tel.toLowerCase().includes(searchTerm);
      });
      return {...state, patients:findPerson}
      
    default:
      return state;
  }
};

export default patientReducer;