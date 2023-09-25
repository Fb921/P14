import "../styles/index.css";
import SelectElement from "./SelectElement.js"
import states from "../datas/state_list.js";
import { Link } from "react-router-dom";

function Index(){
    let state_list = states.map(e => {return e.name});
    let department = ['Sales','Marketing','Engineering','Human Resources','Legal'];

    return(
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/employee-list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label for="date-of-birth">Date of Birth</label>

                    <label for="start-date">Start Date</label>
                    <input id="start-date" type="text" ></input>

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label for="street">Street</label>
                        <input id="street" type="text" />

                        <label for="city">City</label>
                        <input id="city" type="text" />

                        <label for="state">State</label>
                        <SelectElement id="state_selection" list={state_list}></SelectElement>

                        <label for="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label for="department">Department</label>
                    <SelectElement id="dep_selection" list={department}></SelectElement>
                </form>
                <button onClick="saveEmployee()">Save</button>
            </div>
            <div id="confirmation" className="modal">Employee Created!</div>
        </div>
    )
}

export default Index;