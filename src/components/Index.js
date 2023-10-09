import "../styles/index.css";
import SelectElement from "./SelectElement.js"
import states from "../datas/state_list.js";
import { Link } from "react-router-dom";
import DateSelector from "./DateSelector.js";
import {useState,useRef} from 'react';
import { useDispatch } from 'react-redux';
import {addEmployee} from "./../utils/store.js";
import Modal from "./Modal.js";

let emptyForm = {firstName:"",lastName:"",birthDate:"",startDate:"",street:"",city:"",state:"",zipCode:"",department:""};

function Index(){
    // Initialization
    let state_list = states.map(e => {return e.name});
    let department = ['Sales','Marketing','Engineering','Human Resources','Legal'];

    const dispatch = useDispatch();
    const [displayModal,setDisplayModal] = useState(false);
    const [form,setForm] = useState(emptyForm);
    const refForm = useRef();

    // Submit function
    function handleSubmit(){
        let filledForm = addEmployee(form);
        dispatch(filledForm);
        setDisplayModal(true);
        setForm(emptyForm);
        refForm.current.reset();
    }

    function closeModal(){
        setDisplayModal(false);
    }

    // Inputs setters
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
                <Link to="/employee-list" class="pink_link">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee" ref={refForm}>
                    <div className="align-input_container">
                        <div>
                            <label for="first-name">First Name</label>
                            <input type="text" id="first-name" name="firstName" onInput={(e)=>{console.log(e);setFirstName(e.target.value)}}/>
                        </div>
                        <div>
                            <label for="last-name">Last Name</label>
                            <input type="text" id="last-name"  name="lastName" onInput={(e)=>{setLastName(e.target.value)}}/>
                        </div>
                    </div>

                    <label for="date-of-birth">Date of Birth</label>
                    <DateSelector id="birth" name="birthDate" dateSetter={setBirthD}></DateSelector>
                    
                    <label for="start-date">Start Date</label>
                    <DateSelector id="start" name="startDate" dateSetter={setStartD}></DateSelector>

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label for="street">Street</label>
                        <input id="street" type="text" name="street" onChange={(e)=>{setStreet(e.target.value)}}/>

                        <label for="city">City</label>
                        <input id="city" type="text" name="city" onChange={(e)=>{setCity(e.target.value)}}/>

                        <label for="state">State</label>
                        <SelectElement id="state_selection" list={state_list} name="state" setter={setState}></SelectElement>

                        <label for="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" name="zipCode" onChange={(e)=>{setZipCode(e.target.value)}}/>
                    </fieldset>

                    <label for="department">Department</label>
                    <SelectElement id="dep_selection" list={department} name="department" setter={setDepartment}></SelectElement>
                </form>
                <button class="submit_btn" onClick={handleSubmit}>Save</button>
                <Modal id="modal1" content="Employee Created !" collapse={displayModal} closeModal={closeModal}></Modal>
            </div>
        </div>
    )
}

export default Index;