import {ADD_PATIENT, DELETE_PATIENT, EDIT_PATIENT, SEARCH_PATIENT, NEW_CONSULTATION} from "./ActionType";

const initialState = {
  patients: []
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PATIENT:
      return { ...state, patients: [...state.patients, action.payload] };
    
    case DELETE_PATIENT :
      const patientId = action.payload;
      const updatedPatients = state.patients.filter(patient => patient.formNumber !== patientId);
      return { ...state, patients: updatedPatients };

    case EDIT_PATIENT:
      const editedPatients= state.patients.map(el=>el.formNumber===action.payload.formNumber? { ...el, ...action.payload } : el);
      return {...state, patients:editedPatients};
    
    case SEARCH_PATIENT:
      const searchTerm = action.payload.toLowerCase();
      const findPerson= state.patients.filter(patient=>{
        return patient.firstName.toLowerCase().includes(searchTerm) || patient.lastName.toLowerCase().includes(searchTerm) || patient.tel.toLowerCase().includes(searchTerm);
      });
      return {...state, patients:findPerson}
      
    case NEW_CONSULTATION:
      const id= action.payload.formNumber
      return {
        ...state,
        patients: state.patients.map((patient) =>
          patient.formNumber === id ? {
            ...patient,
            consultation: [...patient.consultation, action.payload.consultation],
          } : patient
        ),
      }; 
      
    default:
      return state;
  }
};

export default patientReducer;