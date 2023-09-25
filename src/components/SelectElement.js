import "../styles/selectElement.css";
import {useState} from 'react';

function SelectElement(props){
    const [collapse,setCollapse] = useState(false);

    function select_element(element, index, value){
        document.querySelector("#"+props.id + "_selected_element").textContent = element;
        document.querySelector("#"+props.id + "_selected_element").dataset.index = index;
        document.querySelector("#"+props.id + "_selected_element").dataset.value = value;
        
        display_selectionList();
    }

    function display_selectionList(){
        setCollapse(!collapse);
    }

    let list = props.list.map((e,i)=>{return (<div key={'list_e_'+props.id+"_"+i} className="list_element" data-value={e} onClick={(el)=>{select_element(el.target.textContent,i,el.target.dataset.value)}}>{e}</div>)});

    return (
        <div className="select_container">
            <div className="selected_element" id={props.id + "_selected_element"} data-index="" onClick={display_selectionList} data-value={props.list[0]}>{props.list[0]}</div>
            <div className="list-element_container" data-display={collapse}>
                {list}
            </div>
        </div>
    )
}

export default SelectElement;