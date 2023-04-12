import {configureStore} from'@reduxjs/toolkit';
import patientReducer from "./Reducer"

export default configureStore({
    reducer :
        patientReducer,
   
})