import "./index2.css"
import IconName1 from "./../../iconName1.png"
import IconSex from "./../../iconSex.png"
import IconAge from "./../../iconAge.png"
import IconDepartment from "./../../iconDepartment.png"

const ListItem =(props) => {
    
return (

    <div className="items">
    <div className="a"><img src={IconName1}/><p>{props.item.name} {props.item.lastName}</p></div>
    <div className="b"><p><img src={IconSex}/>{props.item.sex}</p></div>
    <div className="c"><p><img src={IconAge}/>{props.item.age}</p></div>
    <div className="d"><p><img src={IconDepartment}/>{props.item.department}</p></div>
    </div>

)
}

export default ListItem