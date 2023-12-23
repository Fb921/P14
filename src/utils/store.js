import { configureStore } from '@reduxjs/toolkit'

const initialState = {
    employees:JSON.parse(window.localStorage.getItem('employees'))
}

export const addEmployee = (obj)=>{return {
    type:"addEmployee",
    payload:{
        firstName:obj.firstName,
        lastName:obj.lastName,
        birthDate:obj.birthDate,
        startDate:obj.startDate,
        street:obj.street,
        city:obj.city,
        state:obj.state,
        zipCode:obj.zipCode,
        department:obj.department
    }
  }}
  

function myReducer(state = initialState,action){    
    if(action.type == "addEmployee"){
        return {
            ... state,
            employees:[... state.employees,
                {
                    firstName:action.payload.firstName,
                    lastName:action.payload.lastName,
                    birthDate:action.payload.birthDate,
                    startDate:action.payload.startDate,
                    street:action.payload.street,
                    city:action.payload.city,
                    state:action.payload.state,
                    zipCode:action.payload.zipCode,
                    department:action.payload.department
                }
            ]
        }
    }
    return state;
}

export default configureStore({ reducer: myReducer });
