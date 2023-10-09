import "../styles/selectElement.css";
import {useState} from 'react';

function SelectElement({id, name, list, setter}){
    const [collapse,setCollapse] = useState(false);
    const [selection, setSelection] = useState(list[0]);
    const [selectionValue, setSelectionValue] = useState(list[0]);
    let listContainer = list.map((e,i)=>{return (<div key={'list_e_'+id+"_"+i} className="list_element" data-value={e} onClick={(el)=>{setter(el.target.dataset.value);setSelection(e);setSelectionValue(el.target.dataset.value);setCollapse(false)}}>{e}</div>)});

    function display_selectionList(){
        setCollapse(!collapse);
    }
    
    return (
        <div className="select_container">
            <input id={id + "_selected_element"} name={name} value={selectionValue} onClick={display_selectionList} type="hidden"/>
            <div className="selected_element" onClick={display_selectionList}>{selection}</div>
            <div className="list-element_container" data-display={collapse}>
                {listContainer}
            </div>
        </div>
    )
}

export default SelectElement;