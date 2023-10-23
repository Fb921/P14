import DatasTable from "./DatasTable.js"
import { useSelector } from 'react-redux';

let header = [
    {key:"firstName",value:"Firstname"},
    {key:"lastName",value:"LastName"},
    {key:"birthDate",value:"Birth Date"},
    {key:"startDate",value:"Start Date"},
    {key:"street",value:"Street"},
    {key:"city",value:"City"},
    {key:"state",value:"State"},
    {key:"zipCode",value:"Zip Code"},
    {key:"department",value:"Department"}];


function EmployeeListPage(){
    
    // let employees = useSelector(state => state.employees);
    let employees = JSON.parse(window.localStorage.getItem('employees'));
    return (
        <div class="employees-list_container">
            <h1>Current Employees</h1>
            
            <DatasTable head={header} datas={employees}></DatasTable>
        </div>
    )
}

export default EmployeeListPage;