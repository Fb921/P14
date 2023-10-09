import "../styles/dateSelector.css";
import { useState } from 'react';

//Ajouter un formateur de date
//Ajouter un gestionnaire de langues
// Date format : MM/DD/YYYY -> mois commun
function is_valid_date(dd){
    let date = new Date(dd);
    let day = date.getDate();
    let month = date.getMonth()+1;
    day = parseInt(day);
    month = parseInt(month);
    let d = month+"/"+day+"/"+date.getFullYear();
    return (dd == d);
}

function DateSelector({id, name, dateSetter}){

    let last_days = [31,29,31,30,31,30,31,31,30,31,30,31];
    let months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
    let now = new Date();

    const [month,setMonth] = useState(now.getMonth());
    const [year,setYear] = useState(now.getFullYear());
    const [calendar,setCalendar] = useState([]);
    const [collapse,setCollapse] = useState(false);
    const [date,setDate] = useState("");

    function createElementFromDate(d,m,y,mo){
        let current = "current";
        if(m != mo){
            current = "";
        }
        return <div className={"day_element "+current} onMouseDown={function(){select_date(d,m,y)}} data-day={d} data-month={m} data-year={y} key={"e_"+d+""+m+""+y}>{d}</div>;
    }

    function select_date(d,m,y){
        let day = (d<10)?("0"+d):d;
        let month = ((m+1)<10)?("0"+(m+1)):(m+1);
        setDate(day+"/"+month+"/"+y);
        setCollapse(false);
        dateSetter(day+"/"+month+"/"+y);
    }

    function display_month(mo, y){
        if(mo == -1){
            mo = 12;
        }if(mo == 12){
            mo = 0;
        }
        setMonth(mo);
        setYear(y);
        let calend = [];
        let day = 1;
        let first_day = new Date((mo+1)+"/"+day+"/"+y);
        if(first_day.getDay() != 1 ){
            if(mo == 0){
                let ldlm = 31;
                let ldolm = new Date("12/31/"+(y-1));
                let day_last_month = (ldolm.getDay())?(ldlm - (ldolm.getDay() - 1)):(ldlm - 5);
                while(day_last_month <= ldlm){
                    calend.push(createElementFromDate(day_last_month,11,(y-1),mo));
                    day_last_month++;
                }

            }else{
                let ldlm = is_valid_date((mo)+"/"+last_days[mo-1]+"/"+y)?last_days[mo-1]:(last_days[mo-1]-1);
                let ldolm = new Date(mo+"/"+ldlm+"/"+y);
                let day_last_month = (ldolm.getDay())?(ldlm - (ldolm.getDay() - 1)):(ldlm - 5);
                while(day_last_month <= ldlm){
                    calend.push(createElementFromDate(day_last_month,(mo-1),y,mo));
                    day_last_month++;
                }
            }
        }
        let ld = is_valid_date((mo+1)+"/"+last_days[mo]+"/"+y)?last_days[mo]:(last_days[mo]-1);
        while(day <= ld){
            calend.push(createElementFromDate(day,mo,y,mo));
            day++;
        }
        day = 1;
        if(mo < 11){
            while(calend.length < 42){
                calend.push(createElementFromDate(day,mo+1,y,mo));
                day++;
            }
        }else{
            while(calend.length < 42){
                calend.push(createElementFromDate(day,0,y+1,mo));
                day++;
            }
        }
        setCalendar(calend);
    }
    
    return (
        <div>
            <input defaultValue={""} name={name} class="date-picker_input" id={"date_picker_"+id} value={date} onBlur={()=>{setCollapse(false)}} onMouseDown={()=>{if(!collapse){display_month(5,2023);setCollapse(true);}else{setCollapse(false)}}}/>
            <div className="date-selector_container" data-display={collapse}>
                <div className="date-selector_header">
                    <div>
                        <span className='date-selector_arrow left' onClick={()=>{if(month == 0){display_month(11,year-1)}else{display_month(month-1,year)}}}><i class="fa fa-angle-left"></i></span>
                        <span class="month_container">{months[month]}</span>
                        <span className='date-selector_arrow right' onClick={()=>{if(month == 11){display_month(0,year+1)}else{display_month(month+1,year)}}}><i class="fa fa-angle-right"></i></span> 
                    </div>
                    <select defaultValue={year} value={year} onChange={(e)=>{display_month(month,e.target.value)}}>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                        <option>2028</option>
                        <option>2029</option>
                        <option>2029</option>
                        <option>2030</option>
                    </select>
                </div>
                <div className="date-selector_calendar">
                    <div className="calendar_container">
                        <div className="day_name">LUN</div>
                        <div className="day_name">MAR</div>
                        <div className="day_name">MER</div>
                        <div className="day_name">JEU</div>
                        <div className="day_name">VEN</div>
                        <div className="day_name">SAM</div>
                        <div className="day_name">DIM</div>
                        {calendar}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DateSelector;