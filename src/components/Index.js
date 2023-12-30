import React from 'react';
import { useState, useRef, useEffect } from 'react';
import "../styles/index.css";
import states from "../datas/state_list.js";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addEmployee } from "./../utils/store.js";

import SelectElement from './SelectElement.js';
import DateSelector from './DateSelector.js';
import Modal from "./Modal.js";

let emptyForm = {firstName:"",lastName:"",birthDate:"",startDate:"",street:"",city:"",state:"",zipCode:"",department:""};

function Index(){
    // Initialization
    let state_list = states.map(e => {return e.name});
    let department = ['Sales','Marketing','Engineering','Human Resources','Legal'];

    const dispatch = useDispatch();
    const [displayModal,setDisplayModal] = useState(false);
    const [form,setForm] = useState({...emptyForm});
    const [reset,setReset] = useState(false);
    const refForm = useRef();

    useEffect(()=>{
        if(reset){
            setReset(false);
        }
    },[reset]);

    // Submit function
    function handleSubmit(){
        let filledForm = addEmployee(form);
        dispatch(filledForm);
        setDisplayModal(true);
        setForm(emptyForm);
        setReset(true);
        refForm.current.reset();
    }

    function closeModal(){
        setDisplayModal(false);
    }

    // Inputs setters
    // Mettre tout dans une fonction : {...form, [index]: date}
    function setBirthD(date){
        let newForm = {... form, birthDate:date};
        setForm(newForm);
    }

    function setStartD(date){
        let newForm = {... form, startDate:date}
        setForm(newForm);
    }

    function setFirstName(value){
        let newForm = {... form, firstName:value}
        setForm(newForm);
    }

    function setLastName(value){
        let newForm = {... form, lastName:value}
        setForm(newForm);
    }

    function setStreet(value){
        let newForm = {... form, street:value}
        setForm(newForm);
    }

    function setCity(value){
        let newForm = {... form, city:value}
        setForm(newForm);
    }

    function setState(value){
        let newForm = {... form, state:value}
        setForm(newForm);
    }

    function setZipCode(value){
        let newForm = {... form, zipCode:value}
        setForm(newForm);
    }
    
    function setDepartment(value){
        let newForm = {... form, department:value}
        setForm(newForm);
    }

    return(
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>

            <div className="container">
                <Link to="/employee-list" className="pink_link">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee" ref={refForm}>
                    <div className="align-input_container">
                        <div>
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="firstName" onInput={(e)=>{setFirstName(e.target.value)}}/>
                        </div>
                        <div>
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name"  name="lastName" onInput={(e)=>{setLastName(e.target.value)}}/>
                        </div>
                    </div>

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    {!reset?<DateSelector id="birth" name="birthDate" dateSetter={setBirthD}/>:""}
                    
                    <label htmlFor="start-date">Start Date</label>
                    {!reset?<DateSelector id="start" name="startDate" dateSetter={setStartD}/>:""}

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" name="street" onChange={(e)=>{setStreet(e.target.value)}}/>

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" name="city" onChange={(e)=>{setCity(e.target.value)}}/>

                        <label htmlFor="state">State</label>
                        {!reset?<SelectElement id="state_selection" list={state_list} name="state" setter={setState}></SelectElement>:""}

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" name="zipCode" onChange={(e)=>{setZipCode(e.target.value)}}/>
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    {!reset?<SelectElement id="dep_selection" list={department} name="department" setter={setDepartment}></SelectElement>:""}
                </form>
                <button className="submit_btn" onClick={handleSubmit}>Save</button>
                <Modal id="modal1" content="Employee Created !" collapse={displayModal} closeModal={closeModal}></Modal>
            </div>
        </div>
    )
}

export default Index;